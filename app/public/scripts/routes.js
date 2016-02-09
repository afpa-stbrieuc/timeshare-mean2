'use strict';

angular.module('timeShareApp', ['ngRoute']).config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
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
        .otherwise({
          redirectTo: '/'
        });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
]);