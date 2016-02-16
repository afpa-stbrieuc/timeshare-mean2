'use strict';
angular.module('timeShareApp')
  .controller('MainCtrl', ['$scope', '$route', '$routeParams', '$location',
    function($scope, $route, $routeParams, $location) {
      this.$route = $route;
      this.$location = $location;
      this.$routeParams = $routeParams;
      $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
      };
    }
  ]);
$(function(){
  var navMain = $("#nav-main");
  navMain.on("click", "a", null, function () {
    navMain.collapse('hide');
  });
});