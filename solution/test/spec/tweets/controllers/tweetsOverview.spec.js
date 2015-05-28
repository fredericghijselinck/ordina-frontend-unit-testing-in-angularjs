'use strict';

describe('Controller: TweetsOverviewController', function () {

  // load the controller's module
  beforeEach(module('tweets'));

  var TweetsOverviewController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TweetsOverviewController = $controller('TweetsOverviewController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
