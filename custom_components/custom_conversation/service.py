"""Services for Custom Conversation Integrations."""

from litellm import OpenAIError, image_generation
import voluptuous as vol

from homeassistant.const import CONF_API_KEY
from homeassistant.core import (
    HomeAssistant,
    ServiceCall,
    ServiceResponse,
    SupportsResponse,
)
from homeassistant.exceptions import HomeAssistantError, ServiceValidationError
from homeassistant.helpers import (
    config_validation as cv,
    entity_registry as er,
    selector,
)

from .const import (
    CONF_BASE_URL,
    DOMAIN,
    LANGFUSE_SCORE_NEGATIVE,
    LANGFUSE_SCORE_POSITIVE,
    SERVICE_GENERATE_IMAGE,
)


async def async_setup_services(hass: HomeAssistant) -> None:
    """Set up the services for the Custom Conversation Integrations."""

    async def render_image(call: ServiceCall) -> ServiceResponse:
        """Render an image with dall-e."""
        entry_id = call.data["config_entry"]
        entry = hass.config_entries.async_get_entry(entry_id)

        if entry is None or entry.domain != DOMAIN:
            raise ServiceValidationError(
                translation_domain=DOMAIN,
                translation_key="invalid_config_entry",
                translation_placeholders={"config_entry": entry_id},
            )

        try:

            response = await hass.async_add_executor_job(lambda: image_generation(
                api_key=entry.data.get(CONF_API_KEY),
                base_url=entry.data.get(CONF_BASE_URL),
                model="dall-e-3",
                prompt=call.data["prompt"],
                size=call.data["size"],
                quality=call.data["quality"],
                style=call.data["style"],
                response_format="url",
                n=1,
            ))
        except OpenAIError as err:
            raise HomeAssistantError(f"Error generating image: {err}") from err

        return response.data[0].model_dump(exclude={"b64_json"})

    hass.services.async_register(
        DOMAIN,
        SERVICE_GENERATE_IMAGE,
        render_image,
        schema=vol.Schema(
            {
                vol.Required("config_entry"): selector.ConfigEntrySelector(
                    {
                        "integration": DOMAIN,
                    }
                ),
                vol.Required("prompt"): cv.string,
                vol.Optional("size", default="1024x1024"): vol.In(
                    ("1024x1024", "1024x1792", "1792x1024")
                ),
                vol.Optional("quality", default="standard"): vol.In(("standard", "hd")),
                vol.Optional("style", default="vivid"): vol.In(("vivid", "natural")),
            }
        ),
        supports_response=SupportsResponse.ONLY,
    )

    async def score_conversation(call: ServiceCall):
        """Score the most recent conversation processed by a device."""
        entry_id = call.data["config_entry"]
        entry = hass.config_entries.async_get_entry(entry_id)

        if entry is None or entry.domain != DOMAIN:
            raise ServiceValidationError(
                translation_domain=DOMAIN,
                translation_key="invalid_config_entry",
                translation_placeholders={"config_entry": entry_id},
            )

        client = hass.data[DOMAIN][entry.entry_id]["langfuse_client"]
        if client is None:
            raise HomeAssistantError("Langfuse client is not initialized.")

        assist_entity = call.data["assist_entity"]
        entity_registry = er.async_get(hass)
        entity_entry = entity_registry.async_get(assist_entity)
        device_id = entity_entry.device_id
        score = call.data["score"]

        await client.score(
            device_id=device_id,
            score=score,
        )

    hass.services.async_register(
        DOMAIN,
        "score_conversation",
        score_conversation,
        schema=vol.Schema(
            {
                vol.Required("config_entry"): selector.ConfigEntrySelector(
                    {
                        "integration": DOMAIN,
                    }
                ),
                vol.Required("assist_entity"): selector.EntitySelector(
                    {
                        "domain": "assist_satellite",
                        "multiple": False,
                    }
                ),
                vol.Required("score"): selector.SelectSelector(
                    selector.SelectSelectorConfig(
                        options=[LANGFUSE_SCORE_NEGATIVE, LANGFUSE_SCORE_POSITIVE],
                        mode="dropdown",
                    )
                ),
            }
        ),
        supports_response=SupportsResponse.NONE,
    )
