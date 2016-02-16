'use strict';
angular.module('timeShareApp')
    .controller('LoginCtrl', ['$route', '$routeParams', '$location', '$scope',
        function($route, $routeParams, $location, $scope) {
            this.$route = $route;
            this.$location = $location;
            this.$routeParams = $routeParams;
            $scope.message = 'Hello from login page!';
          }
    ]);
