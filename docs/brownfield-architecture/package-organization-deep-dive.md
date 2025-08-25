# Package Organization Deep Dive

## Energy Management (`packages/energy/`)
Complex solar and power management system with:
- GoodWe inverter integration with battery management
- Load shedding automation for South African power grid
- Solar forecasting via Solcast
- Utility meters for energy tracking
- Cost calculations and notifications

## Security System (`packages/security/`)
Comprehensive security with:
- 26-zone DSC alarm system via Envisalink
- Different sensor groups for home/away/night modes
- Camera notification system (though cameras currently disabled)
- Pet door integration and monitoring
- Garage door and gate control

## Lighting Automation (`packages/lighting/`)
Advanced lighting control with:
- Motion-based automation for every room
- Adaptive lighting that adjusts color temperature
- Power saving modes and schedules
- Integration with alarm system states
- Morning and evening routines

## Climate Control (`packages/climate/`)
Environmental management including:
- Humidity-based bathroom fan control (notable automation)
- Midea AC integration and scheduling
- Temperature averaging across multiple sensors
- Weather integration for outdoor conditions
