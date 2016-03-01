'use strict';
(function() {
  angular
  .module('timeShareApp')
  .controller('BodyCtrl', bodyCtrl);
  bodyCtrl.$inject=['$scope', '$route', '$routeParams', '$location', '$window']
  function bodyCtrl($scope, $route, $routeParams, $location) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
    $scope.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };
  }
})();