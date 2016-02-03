'use strict';

angular.module('timeShareApp', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider',
		function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'views/ts-landing-page.html',
        controller: 'MainCtrl',
        controllerAs:'main'
      })
      .when('/who-we-are', {
      	templateUrl: 'who-we-are.html',
      	controller: 'UsCtrl', 
      	controllerAs: 'us'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
      }]);
      

