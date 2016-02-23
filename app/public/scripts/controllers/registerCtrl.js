/**
 * Created by cthed on 15/02/2016.
 */
'use strict';


(function() {
    angular
    .module('timeShareApp')
    .controller('registerCtrl', registerCtrl);
    registerCtrl.$inject = ['$location', 'authentication'];

    function registerCtrl($location, authentication) {
        var register = this;

        register.pageHeader = {
            title: 'Creation d\'un nouveau compte'
        };

        register.credentials = {
            lastName: "",
            firstName: "",
            mail: "",
            password: "",
            phone: "",
            address: "",
            media : "avatar.ico"

        };

        register.returnPage = $location.search().page || '/';

        register.onSubmit = function() {
            register.formError = "";
            if (!register.credentials.lastName || !register.credentials.firstName || !register.credentials.mail || !register.credentials.password) {
                register.formError = "tous les champs sont requis";
                return false;
            } else {
                register.doRegister();
            }
        };

        register.doRegister = function() {
            register.formError = "";
            authentication
            .register(register.credentials)
            .error(function(err) {
                register.formError = err;
            })
            .then(function() {
                $location.search('page', null);
                $location.path(register.returnPage);
            });
        };

    }

})();