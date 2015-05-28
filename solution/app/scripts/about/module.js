(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name aboutModule
   * @description
   * # aboutModule
   *
   * About module of the application.
   */
  angular.module('about',['ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/about', {
          templateUrl: 'views/about/about.html',
          controller: 'AboutController'
        });
    });
})();
