(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name tweetsModule
   * @description
   * # tweetsModule
   *
   * Tweets module of the application.
   */
  angular.module('tweets', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/tweets/tweetsOverview.html',
        controller: 'TweetsOverviewController'
      })
      .when('/tweetDetail/:id',{
        templateUrl:'views/tweets/tweetDetail.html',
        controller:'TweetDetailController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
})();
