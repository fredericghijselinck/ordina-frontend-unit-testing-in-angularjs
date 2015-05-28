'use strict';

describe('Controller: AboutController', function () {

  // load the controller's module
  beforeEach(module('about'));

  var $scope,$controller,$q,aboutData,AboutController,AboutService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope,_$controller_,_$q_,_AboutService_) {
    $scope = $rootScope.$new();
    $controller = _$controller_;
    $q = _$q_;
    AboutService = _AboutService_;
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    givenAboutData();
    givenSpyOnAboutService();
    whenControllerInitialized();
    thenExpectAboutToBeOnScope();
  });

  function givenAboutData(){
    aboutData = {title: 'test', content: 'This is some dummy content'};
  }

  function givenSpyOnAboutService(){
    var deferred = $q.defer();
    deferred.resolve(aboutData);
    spyOn(AboutService,'fetchAbout').and.returnValue(deferred.promise);
  }

  function whenControllerInitialized(){
    AboutController = $controller('AboutController', {
      $scope: $scope
    });
    $scope.$digest();
  }

  function thenExpectAboutToBeOnScope(){
    expect($scope.about).toBe(aboutData);
  }
});
