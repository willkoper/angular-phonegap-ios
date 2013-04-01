'use strict';

describe('Service: geolocation', function () {

  // load the service's module
  beforeEach(module('angularPhonegapTemplateApp'));

  // instantiate service
  var geolocation;
  beforeEach(inject(function (_geolocation_) {
    geolocation = _geolocation_;
  }));

  it('should do something', function () {
    expect(!!geolocation).toBe(true);
  });

});
