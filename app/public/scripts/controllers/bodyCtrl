'use strict';
angular.module('timeShareApp')
  .controller('BodyCtrl', ['$scope', '$route', '$routeParams', '$location', '$window',
    function($scope, $route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
      };
    }
  ]);