(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name contactModule.services.ContactService
   * @description
   * # ContactService
   * Service in the about module.
   */
  angular.module('contact')
    .service('ContactService', function contactService($q, $log) {
      // AngularJS will instantiate a singleton by calling "new" on this function
      var title = 'Some contact stuff';
      var contacts = ['jan.dewilde@ordina.be', 'dennis.jaamann@ordina.be', 'http://www.ordina.be'];

      this.fetchContact = function () {
        $log.log('Fetching contact');
        var deferred = $q.defer();
        deferred.resolve({title: title, contacts: contacts});
        return deferred.promise;
      };
    });
})();
