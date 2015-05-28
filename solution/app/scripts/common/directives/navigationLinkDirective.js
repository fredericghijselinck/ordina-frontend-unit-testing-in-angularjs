(function () {
  'use strict'

  angular.module('common').
    directive('navigationLinkDirective', ['$location', function (location) {
      return {
        restrict: 'A',
        link: function (scope, element) {
          var activeClass = "active";
          var path = element[0].firstChild.attributes[0].value.substring(1); //remove the hash mark

          scope.$on('$routeChangeSuccess',function(event,next){
            if (next.$$route.originalPath === path) {
              element.addClass(activeClass);
            } else {
              element.removeClass(activeClass);
            }
          });
        }
      };
    }]);
})();
