'use strict';
angular.module('timeShareApp')
	.controller('ServiceCtrl', ['$route', '$routeParams', '$location',
		function($route, $routeParams, $location) {
			this.$route = $route;
			this.$location = $location;
			this.$routeParams = $routeParams;
		}
	]);