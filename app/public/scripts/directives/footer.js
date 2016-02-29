angular.module('timeShareApp')
  .directive('footer', function() {
    return {
      restrict: 'E',
      templateUrl: 'views/footer.html'
    };
  });