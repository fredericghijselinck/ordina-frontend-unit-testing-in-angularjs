'use strict';

describe('Directive: NavigationLinkDirective', function () {

  // instantiate service
  var $scope,$compile,template,element;

  // load the service's module
  beforeEach(module('about'));

  beforeEach(inject(function ($rootScope,_$compile_) {
    $scope = $rootScope.$new();
    $compile = _$compile_;
  }));

  it('when fetch about called should return a promise', function () {
    givenTemplate();
    whenDirectiveInitialized();
  });

  function givenTemplate(){
    template = '<div data-navigation-link-directive><div>';
  }

  function whenDirectiveInitialized(){
    element = $compile(template)($scope);
    $scope.$digest();
  }

});
