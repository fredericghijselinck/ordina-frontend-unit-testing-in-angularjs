(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name tweetsModule.services.TwitterSearchService
   * @description
   * # TwitterSearchService
   * Service in the tweets module.
   */
  angular.module('tweets')
    .service('TwitterSearchService', function twitterSearchService($log,$resource) {
      // AngularJS will instantiate a singleton by calling "new" on this function

      var twitterSearchResource = $resource('https://twitter.com/search?q=:searchTerm',{ searchTerm: '@searchTerm'}, {});

      this.searchTweets = function (searchTerm) {
        $log.log('Fetching all tweets for ' + searchTerm);
        return twitterSearchResource.get({searchTerm: searchTerm}).$promise;
      };

      this.searchTweetById = function (id){
        $log.log('Fetching tweet by tweet id ' + id);
      };

    });
})();
