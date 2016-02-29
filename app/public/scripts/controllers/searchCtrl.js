'use strict';
(function() {
  angular
  .module('timeShareApp')
  .controller('SearchCtrl', searchCtrl);

    searchCtrl.$inject = ['$route', '$routeParams', '$location', '$scope'];

  function searchCtrl($route, $routeParams, $location, $scope) {
      var search = this;

    this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $scope.message = 'Hello from search page!';
  }
})();