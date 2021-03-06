/**
 * Created by cthed on 16/02/2016.
 */
(function() {

  angular
    .module('timeShareApp')
    .service('authentication', authentication);

  authentication.$inject = ['$http', '$window'];

  function authentication($http, $window) {

    var saveToken = function(token) {
      $window.localStorage['timeshare-token'] = token;
    };

    var getToken = function() {
      return $window.localStorage['timeshare-token'];
    };

    var isLoggedIn = function() {
      var token = getToken();

      if (token) {
        var payload = JSON.parse($window.atob(token.split('.')[1]));
        console.log('loggedin');

        return payload.exp > Date.now() / 1000;
      } else {
        console.log('notlogged');
        return false;
      }
    };

    var currentUser = function() {
      if (isLoggedIn()) {
        var token = getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));
        return {
          _id: payload._id,
          mail: payload.mail,
          lastnNme: payload.lastName,
          firstName: payload.firstName,
          tel: payload.tel,
          address: payload.address
        };
      }
    };

    register = function(user) {
      return $http.post('/api/users/register', user).success(function(data) {
        saveToken(data.token);
        console.log(data.token);
        console.log("c fait");

      });
    };
    updateProfile = function(user) {
      console.log("totototo");
      return $http.put('/api/users/updateProfile', user).success(function(data) {
        saveToken(data.token);
        console.log(data.token);
        console.log("c fait");

      });
    };

    login = function(user) {
      console.log('login user');
      console.log(user);
      return $http.post('/api/users/login', user).success(function(data) {
        saveToken(data.token);
        console.log(data.token);
        console.log("c fait");
      });
    };

    logout = function() {
      $window.localStorage.removeItem('timeshare-token');
    };



    return {
      currentUser: currentUser,
      saveToken: saveToken,
      getToken: getToken,
      isLoggedIn: isLoggedIn,
      register: register,
      updateProfile: updateProfile,
      login: login,
      logout: logout,
    };
  }


})();