var app = angular.module("myApp", []);

app.controller("myCtrler", function ($scope, $http) {
  $http.get("voiture.json")
  .then(function (driver) {
    $scope.voitures = driver.data;
  });
});
