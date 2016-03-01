'use strict';
(function() {
	angular
	.module('timeShareApp')
	.controller('ServiceCtrl', serviceCtrl);

	serviceCtrl.$inject=['$route', '$routeParams', '$location', '$scope'];
	function serviceCtrl($route, $routeParams, $location, $scope) {
		this.$route = $route;
		this.$location = $location;
		this.$routeParams = $routeParams;
		$scope.message = 'Hello from How it works page!';
	}
})();