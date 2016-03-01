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

    $scope.rowCollection = [
      {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
      {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
      {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    $scope.onlyNumbers = /^[0-9]+$/;

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
      '-------------------------------------------------',
      'Animaux - GARDE D_ANIMAUX',
      'Animaux - PROMENADE D_ANIMAUX',
      'Animaux - TOILETTAGE',
      'Animaux - AUTRES',
      '-------------------------------------------------',
      'Automobile - VIDANGE',
      'Automobile - NETTOYAGE',
      'Automobile - CHANGEMENT DE PIECES',
      'Automobile - AUTRES',
      '-------------------------------------------------',
      'Cours particuliers - MUSIQUE',
      'Cours particuliers - LANGUES',
      'Cours particuliers - MATIERS SCIENTIFIQUES',
      'Cours particuliers - AUTRES',
      '-------------------------------------------------',
      'Coaching / Conseils - SPORT',
      'Coaching / Conseils - CUISINE',
      'Coaching / Conseils - DECO',
      'Coaching / Conseils - JEUX',
      'Coaching / Conseils - AUTRES',
      '-------------------------------------------------',
      'Soins beauté - MASSAGE',
      'Soins beauté - COIFFURE',
      'Soins beauté - MANUCURE',
      'Soins beauté - EPILATION',
      'Soins beauté - AUTRES',
      '-------------------------------------------------',
      'Courses - FAIRE LES COURSES A PARTIR D_UNE LISTE',
      'Courses - DEMARCHES ADMINISTATIVES',
      'Courses - AUTRES',
      '-------------------------------------------------',
      'Absences / Vacances - ARROSER LE JARDIN',
      'Absences / Vacances - EFFECTUER DES RONDES',
      'Absences / Vacances - AUTRES',
      '-------------------------------------------------',
      'Informatique - RESOLUTION DE PROBLEMES',
      'Informatique - REDACTION DE DOCUMENTS',
      'Informatique - AUTRES',
      '-------------------------------------------------',
      'Festivités - ANIMATION MUSICALE',
      'Festivités - AIDE A LA PREPARATION D_UNE FETE',
      'Festivités - AUTRES'
    ];


  }

})();