var app = angular.module('myApp', [])

app.controller('appButtonAlert', ['$scope', function($scope) {
  $scope.appButtonAlert = function() {
    alert('Bouh !');
  };
}]);
//
// app.controller('myCtrl', ['$scope', '$window', function($scope, $window) {
//   $scope.doGreeting = function(text) {
//     $window.alert(text);
//   };
// }]);
