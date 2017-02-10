'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  $scope.removeActive = function() {
    var get_current_active = document.getElementsByClassName('nav_is_active');
    for(var i=0; i<get_current_active.length; i++) {
      get_current_active[i].className = 'nav_primary--link';
    }
  }
  $scope.removeActive();

  document.getElementById('view1').className = 'nav_primary--link nav_is_active';
}]);
