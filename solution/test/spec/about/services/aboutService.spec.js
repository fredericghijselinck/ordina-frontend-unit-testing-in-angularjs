'use strict';

describe('Service: AboutService', function () {

  // instantiate service
  var $log,promise,AboutService;

  // load the service's module
  beforeEach(module('about'));

  beforeEach(inject(function (_$log_,_AboutService_) {
    $log = _$log_;
    AboutService = _AboutService_;
  }));

  it('when fetch about called should return a promise', function () {
    givenSpyOnLog();
    whenFetchAboutCalled();
    thenExpectContentToBeReturned();
  });

  function givenSpyOnLog(){
    spyOn($log, 'log').and.returnValue();
  }

  function whenFetchAboutCalled(){
    promise = AboutService.fetchAbout();
  }

  function thenExpectContentToBeReturned(){
    expect($log.log).toHaveBeenCalled();
    expect(promise.$$state.value).toBeDefined();
  }

});
