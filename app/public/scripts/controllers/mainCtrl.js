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
      $location.path('xref');
    };

    $scope.searchAds = function() {
      if ($scope.regionSelected !== undefined && $scope.departmentSelected !== undefined
        && $scope.cdPostal !== undefined && $scope.skillSelected !== undefined) {
        console.log($scope.regionSelected + ' ' +  $scope.departmentSelected + ' ' +  $scope.cdPostal + ' ' +  $scope.skillSelected);
      }
      else if($scope.regionSelected === undefined) {
        console.log('You must select region');
      }
      else if($scope.departmentSelected === undefined) {
        console.log('You must select department');
      }
      else if($scope.cdPostal === undefined) {
        console.log('You must enter postal code');
      }
      else if($scope.skillSelected === undefined) {
        console.log('You must select skill');
      }
    };

    $scope.rowCollection = [
      {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com', region: 'Bretagne'},
      {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com', region: 'Alsace'},
      {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com', region: 'Bretagne'}
    ];

    $scope.onlyNumbers = /^[0-9]+$/;

   /* $scope.updateRegion = function(){
      console.log($scope.regionSelected);
    };

    $scope.updateCodePostal = function() {
      console.log($scope.cdPostal);
    }

    $scope.updateDepartment = function(){
      console.log($scope.departmentSelected);
    };

    $scope.updateSkill = function() {
      console.log($scope.skillSelected);
    }*/

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

    $scope.skillSet = {
      'Travaux et entretien habitat' : ['JARDINAGE', 'PEINTURE', 'MAÇONNERIE', 'PLOMBERIE', 'ELECTRICITÉ', 'AUTRES'],
      'Bricolage' : ['MONTER UN MEUBLE EN KIT', 'REPARATIONS', 'PETITS TRAVAUX MANUELS', 'AUTRES'],
      'Déménagement': ['AIDE DÉMÉNAGEMENT', 'AUTRES'],
      'Baby-sitting': ['GARDE', 'ACCOMPAGNEMENT ÉCOLE OU ACTIVITÉ', 'AUTRES'],
      'Animaux': ['GARDE', 'PROMENADE', 'TOILETTAGE', 'AUTRES'],
      'Automobile': ['VIDANGE', 'NETTOYAGE', 'CHANGEMENT DE PIECES', 'AUTRES'],
      'Cours particuliers': ['MUSIQUE', 'LANGUES', 'MATIERS SCIENTIFIQUES', 'AUTRES'],
      'Coaching / Conseils': ['SPORT', 'CUISINE', 'DECO', 'JEUX', 'AUTRES'],
      'Soins beauté': ['MASSAGE', 'COIFFURE', 'MANUCURE', 'EPILATION', 'AUTRES'],
      'Courses': ['FAIRE LES COURSES A PARTIR D_UNE LISTE', 'DEMARCHES ADMINISTATIVES', 'AUTRES'],
      'Absences / Vacances': ['ARROSER LE JARDIN', 'EFFECTUER DES RONDES', 'AUTRES'],
      'Informatique': ['DEVELOPPEMENT', 'RESOLUTION DE PROBLEMES', 'REDACTION DE DOCUMENTS', 'AUTRES'],
      'Festivités': ['ANIMATION MUSICALE', 'AIDE A LA PREPARATION D_UNE FETE', 'AUTRES']
    };
  }
})();