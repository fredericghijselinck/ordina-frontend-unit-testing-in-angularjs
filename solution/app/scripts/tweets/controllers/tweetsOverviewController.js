(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name tweetsModule.controllers:TweetsOverviewController
   * @description
   * # TweetsOverviewController
   * Controller of the tweets module
   */
  angular.module('tweets')
    .controller('TweetsOverviewController', function ($scope,$log, TwitterSearchService) {
      $scope.tweets = TwitterSearchService.searchTweets('Ordina Belgium');

      $log.log('Number of tweets: ' + $scope.tweets.length);
    });
})();
