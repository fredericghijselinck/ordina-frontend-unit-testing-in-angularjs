'use strict';

describe('Service: TwitterSearchService', function () {

  // load the service's module
  beforeEach(module('tweets'));

  // instantiate service
  var TwitterSearchService;
  beforeEach(inject(function (_TwitterSearchService_) {
    TwitterSearchService = _TwitterSearchService_;
  }));

  it('should do something', function () {
    expect(!!TwitterSearchService).toBe(true);
  });

});
