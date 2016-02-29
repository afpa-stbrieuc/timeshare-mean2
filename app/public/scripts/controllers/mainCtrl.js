/**
 * Created by cthed on 23/02/2016.
 */
'use strict';
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

    $scope.updateRegion = function(){
      console.log($scope.regionSelected);
    };

    $scope.updateDepartment = function(){
      console.log($scope.departmentSelected);
    };

    $scope.france = {
      'Alsace' : ['Bas-Rhin', 'Haut-Rhin'],
      'Aquitaine' : ['Dordogne', 'Gironde', 'Landes', 'Lot-et-Garonne', 'Pyrénées-Atlantiques'],
      'Auvergne' : ['Allier', 'Cantal', 'Haute-Loire', 'Puy-de-Dôme'],
      'Basse-Normandie' : ['Calvados', 'Manche', 'Orne'],
      'Bourgogne' : ['Nièvre', 'Saône-et-Loire', 'Yonne'],
      'Bretagne' : ['Côtes d Armor', 'Finistère', 'Ille-et-Vilaine', 'Morbihan'],
      'Centre' : ['Cher', 'Eure-et-Loir', 'Indre', 'Loir-et-Cher', 'Loiret'],
      'Champagne-Ardenne' : ['Ardennes', 'Aube', 'Marne', 'Haute-Marne'],
      'Corse' : ['Corse-du-Sud', 'Haute-Corse'],
      'Franche-Comté' : ['Doubs', 'Jura', 'Haute-Saône', 'Territoire-de-Belfort'],
      'Haute-Normandie' : ['Eure', 'Seine-Maritime'],
      'Ile-de-France' : ['Paris', 'Seine-et-Marne', 'Yvelines', 'Essonne', 'Hauts-de-Seine', 'Seine-Saint-Denis', 'Val-de-Marne'],
      'Languedoc-Roussillon' : ['Aude', 'Gard', 'Hérault', 'Lozère', 'Pyrénées-Orientales'],
      'Limousin' : ['Corrèze', 'Creuse', 'Haute-Vienne'],
      'Lorraine' : ['Meurthe-et-Moselle', 'Meuse', 'Moselle', 'Vosges'],
      'Midi-Pyrénées' : ['Ariège', 'Aveyron', 'Haute-Garonne', 'Gers', 'Lot', 'Hautes-Pyrénées', 'Tarn', 'Tarn-et-Garonne'],
      'Nord-Pas-de-Calais' : ['Nord', 'Pas-de-Calais'],
      'Outre-Mer' : ['Guadeloupe', 'Martinique', 'Guyane', 'La Réunion'],
      'Pays de la Loire' : ['Loire-Atlantique', 'Maine-et-Loire', 'Mayenne', 'Sarthe', 'Vendée'],
      'Picardie' : ['Aisne', 'Oise', 'Somme'],
      'Poitou-Charentes' : ['Charente', 'Charente-Maritime', 'Deux-Sèvres', 'Vienne'],
      'Provence-Alpes-Côte' : ['Alpes', 'Hautes-Alpes', 'Alpes-Maritimes', 'Bouches-du-Rhône', 'Var', 'Vaucluse'],
      'Rhône-Alpes' : ['Ain', 'Ardèche', 'Drôme', 'Isère', 'Loire', 'Rhône', 'Savoie', 'Haute-Savoie']
    };

    $scope.skillSet = [
      'Travaux et entretien habitat - JARDINAGE',
      'Travaux et entretien habitat - PEINTURE',
      'Travaux et entretien habitat - MAÇONNERIE',
      'Travaux et entretien habitat - PLOMBERIE',
      'Travaux et entretien habitat - ELECTRICITÉ',
      'Travaux et entretien habitat - AUTRES',
      '-------------------------------------------------',
      'Bricolage - MONTER UN MEUBLE EN KIT',
      'Bricolage - REPARATIONS',
      'Bricolage - PETITS TRAVAUX MANUELS',
      'Bricolage - AUTRES',
      '-------------------------------------------------',
      'Déménagement - AIDE DÉMÉNAGEMENT',
      'Déménagement - AUTRES',
      '-------------------------------------------------',
      'Baby-sitting - GARDE D_ENFANT',
      'Baby-sitting - ACCOMPAGNEMENT ÉCOLE OU ACTIVITÉ',
      'Baby-sitting - AUTRES',
      '-------------------------------------------------'];


  }

})();