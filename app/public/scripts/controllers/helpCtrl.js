'use strict';
(function() {
	angular
	.module('timeShareApp')
	.controller('HelpCtrl', helpCtrl);

	helpCtrl.$inject=['$route', '$routeParams', '$location', '$scope'];
	function helpCtrl($route, $routeParams, $location, $scope) {
		this.$route = $route;
		this.$location = $location;
		this.$routeParams = $routeParams;
		$scope.message = 'Hello from Frequently Asked Questions page!';
	}
})();