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

    login.returnPage = $location.search().page || '/home';

    login.onSubmit = function() {
      console.log('kikou');


      login.formError = '';

      if (!login.credentials.mail || !login.credentials.password) {
        console.log('faut remplir');
        login.formError = 'tous les champs sont requis';
        return false;
      } else {
        console.log('appel le login');
        login.doLogin();
      }
    };

    login.doLogin = function() {
      console.log('start login authentication');
      login.formError = '';
      console.log(login.credentials);
      console.log('call authentication service login');
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
