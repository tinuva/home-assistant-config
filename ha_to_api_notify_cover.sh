#/bin/bash

MESSAGE=$(cat)
SCRIPT=$1 # script.notify_garagedoor_back
APIKEY=`cat /config/secrets.yaml | grep ha_internal_rest_api_headers | awk -F': ' '{ print $2 }'`

generate_post_data()
{
  cat <<EOF
{
  "entity_id": "$SCRIPT",
  "variables": {"message": "$MESSAGE"}
}
EOF
}

curl -vs -X POST "http://localhost:8123/api/services/script/turn_on" \
    -H "Authorization: ${APIKEY}" \
    -H "Content-Type: application/json" \
    --data "$(generate_post_data)" >> /dev/null 2>&1