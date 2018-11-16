var app = angular.module("carApp", []);

// On défini le contrôleur
app.controller("carCtrler", function($scope, $http) {
  // On va chercher le contenu de voiture.json
  $http.get("voiture.json")
  // Si on le récupère alors ...
  .then(function(response){
    // on le stocke dans la variable "$scope.cars"
    $scope.cars = response.data;
  });
});
