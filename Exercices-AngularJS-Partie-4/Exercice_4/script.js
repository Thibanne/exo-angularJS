var app = angular.module('myApp', []);

app.controller('voituresCtrl', function($scope, $http) {
  //ici je récupère le fichier .json avec les données dont j'ai besoin
  $http.get("voiture.json")
  //ici then = le fichier et fonction pour lui demander quelque chose à faire
  .then(function(response){
    //ici je lui dit que voiture = données dans le documents
    $scope.voitures = response.data;
  })
})
