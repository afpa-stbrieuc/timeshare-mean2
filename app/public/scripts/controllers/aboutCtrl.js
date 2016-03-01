'use strict';
(function() {
  angular
  .module('timeShareApp')
  .controller('AboutCtrl', aboutCtrl);

  aboutCtrl.$inject = ['$route', '$routeParams', '$location', '$scope'];
  function aboutCtrl($route, $routeParams, $location, $scope) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
    $scope.message = 'Hello from Who we are page!';
  }
})();
