angular
.module('timeShareApp')
.directive('header', function() {
  return {
    // show header as element so it can be used in index.html - no redundancy through out the project
    restrict: 'EA',
    templateUrl: 'views/header.html',
    controller: 'MainCtrl as headvm'
  };
})

// reload header when view page route changed on click
.directive('xref',function($route, $location){
  return {
    link: function(scope, elm, attr){
      elm.on('click',function(){
        if ( $location.path() === attr.xref ) {
          $route.reload();
        } else {
          scope.$apply(function(){
            $location.path(attr.xref);
          });
        }
      });
    }
  };
});