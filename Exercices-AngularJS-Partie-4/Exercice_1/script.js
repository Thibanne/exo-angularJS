var increment = angular.module("increment", []);

increment.controller("ctrl", ["$scope", function ($scope) {
  $scope.number = 0;
  $scope.add = function () {
    $scope.number = $scope.number + 1;
  };
  $scope.remove = function () {
    $scope.number = $scope.number - 1;
  };
}]);
