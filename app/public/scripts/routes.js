'use strict';
(function () {

  function config($routeProvider){
    $routeProvider

    .when('/', {
      templateUrl: 'views/ts-landing-page.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/home', {
      templateUrl: 'views/ts-landing-page.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/howItWorks', {
      templateUrl: 'views/howItWorks.html',
      controller: 'ServiceCtrl',
      controllerAs: 'service'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })
    .when('/help', {
      templateUrl: 'views/help.html',
      controller: 'HelpCtrl',
      controllerAs: 'help'
    })
    .when('/register', {
      templateUrl: 'views/signUp.html',
      controller: 'SignUpCtrl',
      controllerAs: 'signUp'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl',
      controllerAs: 'contact'
    })
    .when('/404', {
      templateUrl: '404.html'
    })
    .otherwise({
      redirectTo: '/'
    });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
  angular
  .module('timeShareApp')
  .config(['$routeProvider', config]);

})();