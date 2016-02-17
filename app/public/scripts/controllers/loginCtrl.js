/**
 * Created by cthed on 09/02/2016.
 */
'use strict';

(function() {
  angular
  .module('timeShareApp')
  .controller('LoginCtrl', loginCtrl);

    loginCtrl.$inject = ['$location', 'authentication'];

  function loginCtrl($location, authentication) {
    var login = this;

    login.pageHeader = {
      title: 'Connexion'
    };

    login.credentials = {
      mail: '',
      password: ''
    };

    login.returnPage = $location.search().page || '/';

    login.onSubmit = function() {
      login.formError = '';
      if (!login.credentials.mail || !login.credentials.password) {
        login.formError = 'tous les champs sont requis';
        return false;
      } else {
        login.doLogin();
      }
    };

    login.doLogin = function() {
      login.formError = '';
      authentication
      .login(login.credentials)
      .error(function(err) {
        login.formError = err;
      })
      .then(function() {
        $location.search('page', null);
        $location.path(login.returnPage);
      });
    };

  }
})();
