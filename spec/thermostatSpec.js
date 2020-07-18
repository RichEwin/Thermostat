describe('Thermostat', function () {

  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it('starts with a temperature of 20', function () {
    expect(thermostat.temperature).toEqual(20);
  });

  it('has a minimum temperature of 10', function () {
    expect(thermostat._MINIMUM_TEMP).toEqual(10);
  });

  describe('up', function () {

    it('raises the temperature', function () {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

    it('if in power save mode has max of 25', function () {
      thermostat.temperature = 25;
      thermostat.up();
      expect(thermostat.temperature).toEqual(25);
    });

    it('if not in power save mode has max of 32', function () {
      thermostat.temperature = 32;
      thermostat.powerSaveModeOff();
      thermostat.up();
      expect(thermostat.temperature).toEqual(32);
    });
  });

  describe('down', function () {

    it('reduces the temperature', function () {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it('does not allow user to go below minimum temp', function() {
      thermostat.temperature = 10;
      thermostat.down();
      expect(thermostat.temperature).toEqual(10)
    });
  });

  describe('power saving mode', function() {

    it('is on by default', function () {
      expect(thermostat.isInPowerSaveMode()).toEqual(true);
    });

    it('can be switched off', function () {
      thermostat.powerSaveModeOff();
      expect(thermostat.isInPowerSaveMode()).toEqual(false);
    });
  });

  describe('reset temperature', function() {

    it('resets the temperature', function () {
      thermostat.up();
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe('energy usage', function () {

    it('returns current energy usage', function () {
      expect(thermostat.energyUsage()).toEqual('Medium Usage');
    });
  });
});
