(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name tweetsModule.controllers:TweetDetailController
   * @description
   * # TweetDetailController
   * Controller of the tweets Module
   */
  angular.module('tweets')
    .controller('TweetDetailController', function ($scope,$log,id, TwitterSearchService) {
      $scope.tweet = TwitterSearchService.searchTweetById(id);

      $log.log('Tweet ' + $scope.tweet);
    });
})();
