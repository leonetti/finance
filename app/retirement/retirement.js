'use strict';

angular.module('myApp.retirement', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/retirement', {
    templateUrl: 'retirement/retirement.html',
    controller: 'retirementCtrl'
  });
}])

.controller('retirementCtrl', ['$scope', function($scope) {

  $scope.removeActive = function() {
    var get_current_active = document.getElementsByClassName('nav_is_active');
    for(var i=0; i<get_current_active.length; i++) {
      get_current_active[i].className = 'nav_primary--link';
    }
  }
  $scope.removeActive();

  document.getElementById('retirement').className = 'nav_primary--link nav_is_active';


}]);


// angular.module('myAngular.register', [])

// .controller('registerController', function($scope, Register) {
//   console.log('Initialized Register Controller');
//   $scope.user = {};

//   sessionStorage.clear();

//   $scope.register = function() {
//     if($scope.user.email && $scope.user.firstName && $scope.user.lastName && $scope.user.password && $scope.user.passwordConfirm) {
//       document.getElementById('register__error--empty').style.visibility = 'hidden';
//       if($scope.user.password === $scope.user.passwordConfirm) {
//         Register.attemptRegister($scope.user);
//       } else {
//         document.getElementById('register__error--password').style.visibility = 'inherit';
//       }
//     } else {
//       document.getElementById('register__error--password').style.visibility = 'hidden';
//       document.getElementById('register__error--empty').style.visibility = 'inherit';
//     }
//   };
// });
