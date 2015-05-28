(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name aboutModule.controllers:AboutController
   * @description
   * # AboutController
   * Controller of the about module
   */
  angular.module('about')
    .controller('AboutController', function ($scope, AboutService) {

      var fetchAboutSuccessHandler = function (result) {
        $scope.about = result;
      };

      AboutService.fetchAbout().then(fetchAboutSuccessHandler);
    });
})();
