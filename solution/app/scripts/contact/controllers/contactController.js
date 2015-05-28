(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name contactModule.controllers:ContactController
   * @description
   * # ContactController
   * Controller of the contact module
   */
  angular.module('contact')
    .controller('ContactController', function ($scope, ContactService) {
      var fetchContactSuccessHandler = function (result) {
        $scope.contact = result;
      };

      ContactService.fetchContact().then(fetchContactSuccessHandler);
    });
})();
