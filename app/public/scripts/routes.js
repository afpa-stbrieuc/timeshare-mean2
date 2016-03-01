'use strict';
(function () {
  angular
  .module('timeShareApp')
  .config(['$routeProvider','$locationProvider', config]);
  function config($routeProvider, $locationProvider){
    $routeProvider

    .when('/', {
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
      controller: 'RegisterCtrl',
      controllerAs: 'register'
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
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'search'
      })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
})();