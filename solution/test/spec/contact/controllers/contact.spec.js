'use strict';

xdescribe('Controller: ContactController', function () {

  // load the controller's module
  beforeEach(module('contact'));

  var ContactController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContactController = $controller('ContactController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
