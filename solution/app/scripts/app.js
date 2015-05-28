(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name solutionApp
   * @description
   * # solutionApp
   *
   * Main module of the application.
   */
  angular
    .module('solutionApp', [
      'ngResource',
      'ngRoute',
      'common',
      'tweets',
      'about',
      'contact'
    ]);
})();
