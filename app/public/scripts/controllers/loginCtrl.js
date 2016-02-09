/**
 * Created by cthed on 09/02/2016.
 */
'use strict';
angular.module('timeShareApp')
    .controller('MainCtrl', ['$route', '$routeParams', '$location',
        function($route, $routeParams, $location) {
            this.$route = $route;
            this.$location = $location;
            this.$routeParams = $routeParams;
        }
    ]);
