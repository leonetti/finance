'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope', function($scope) {
  $scope.removeActive = function() {
    var get_current_active = document.getElementsByClassName('nav_is_active');
    for(var i=0; i<get_current_active.length; i++) {
      get_current_active[i].className = 'nav_primary--link';
    }
  }
  $scope.removeActive();

  document.getElementById('view2').className = 'nav_primary--link nav_is_active';
}]);
