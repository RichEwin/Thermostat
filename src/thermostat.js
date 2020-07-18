class Thermostat {
  constructor() {
    this.temperature = 20;
    this._MINIMUM_TEMP = 10;
    this._MAX_TEMP_POWERSAVE = 25;
    this._MAX_TEMP_POWERSAVE_OFF = 32;
    this.powerSaveMode = true;
  }

  getCurrentTemp () {
    return this.temperature
  }
  up() {
    if (this.temperature === 25 && this.powerSaveMode === true) {
      return;
    }
    else if (this.temperature === 32 && this.powerSaveMode === false) {
      return;
    }
      this.temperature += 1;
  }
  down() {
    if (this.isMinimumTemperature()) {
      return this.temperature;
    }
    this.temperature -= 1
  }
  isMinimumTemperature() {
    return this.temperature === this._MINIMUM_TEMP;
  }
  isInPowerSaveMode() {
    return this.powerSaveMode;
  }
  powerSaveModeOff() {
    this.powerSaveMode = false;
    console.log("PowerSave Mode De-activated")
  }
  powerSaveModeOn() {
    this.powerSaveMode = true;
    console.log("PowerSave Mode Activated")
  }
  resetTemperature() {
    this.temperature = 20;
    console.log("Temperature Reset")
  }
  energyUsage() {
    if (this.temperature < 18) { return 'Low Usage' ; }
    else if (this.temperature > 25) { return 'High Usage' ; }
    else { return 'Medium Usage' ; }
  }

}
