(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name aboutModule.services.AboutService
   * @description
   * # AboutService
   * Service in the about module.
   */
  angular.module('about')
    .service('AboutService', function aboutService($q, $log) {
      // AngularJS will instantiate a singleton by calling "new" on this function
      var title = 'Some about stuff';
      var content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

      this.fetchAbout = function () {
        $log.log('Fetching about');
        var deferred = $q.defer();
        deferred.resolve({title: title, content: content});
        return deferred.promise;
      };
    });
})();
