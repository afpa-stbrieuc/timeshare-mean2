'use strict';
//register all modules
angular.module('timeShareApp', [
  'ngRoute',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'pascalprecht.translate',
  'ui.bootstrap',
  'ngFileUpload',
  'smoothScroll',
  'countTo',
  'filtreAccount',
  'mp.datePicker',
  'dialogs.main' //https://github.com/m-e-conroy/angular-dialog-service
])
  .config(['$resourceProvider',
    function($resourceProvider) {
    // this is to allow calling GET /todos/ instead of /todos
    $resourceProvider.defaults.stripTrailingSlashes = false;
  }])
  .config(['dialogsProvider',function(dialogsProvider){

    dialogsProvider.setSize('sm');
  }])
  .config(['$translateProvider',function($translateProvider){

    $translateProvider.useSanitizeValueStrategy('sanitize');
    $translateProvider.preferredLanguage('en-US');

    $translateProvider.translations('en-US',{
      DIALOGS_OK: 'OK'
    });

  }]);
