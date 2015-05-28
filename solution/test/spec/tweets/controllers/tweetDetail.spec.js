'use strict';

describe('Controller: TweetDetailController', function () {

  // load the controller's module
  beforeEach(module('tweets'));

  var TweetDetailController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TweetDetailController = $controller('TweetDetailController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
