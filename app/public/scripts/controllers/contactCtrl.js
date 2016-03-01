'use strict';
(function() {
  angular.module('timeShareApp')
  .controller('ContactCtrl', contactCtrl);
  contactCtrl.$inject = ['$route', '$routeParams', '$location', '$scope',];
  function contactCtrl($route, $routeParams, $location, $scope) {
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
    $scope.message = 'Hello from Stay in touch page!';
  }
})();
