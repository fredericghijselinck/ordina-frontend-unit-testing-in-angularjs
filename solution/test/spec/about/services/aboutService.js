'use strict';

describe('Service: AboutService', function () {

  // load the service's module
  beforeEach(module('about'));

  // instantiate service
  var AboutService;
  beforeEach(inject(function (_AboutService_) {
    AboutService = _AboutService_;
  }));

  it('should do something', function () {
    expect(!!AboutService).toBe(true);
  });

});
