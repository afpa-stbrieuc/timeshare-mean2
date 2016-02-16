/**
 * Created by cthed on 15/02/2016.
 */
'use strict';
angular.module('timeShareApp')
    .controller('RegisterCtrl', ['$route', '$routeParams', '$location',
        function($route, $routeParams, $location) {
            this.$route = $route;
            this.$location = $location;
            this.$routeParams = $routeParams;
          }
    ]);
