/**
 * Created by cthed on 23/02/2016.
 */
(function() {

  angular
  .module('timeShareApp')
  .controller('MainCtrl', mainCtrl);

  mainCtrl.$inject = ['$location', 'authentication', '$scope', '$route', '$routeParams'];

  function mainCtrl($location, authentication, $scope, $route, $routeParams) {
    var vm = this;
    vm.$route = $route;
    vm.$location = $location;
    vm.$routeParams = $routeParams;
    vm.isActive = function(viewLocation) {
      return viewLocation === $location.path();
    };

    vm.currentPath = $location.path();

    vm.isLoggedIn = authentication.isLoggedIn();


    vm.currentUser = authentication.currentUser();
    console.log('headvm : ', vm.currentUser, vm.isLoggedIn);
    vm.logout = function() {
      authentication.logout();
      $location.path('/');
    };


  }

})();