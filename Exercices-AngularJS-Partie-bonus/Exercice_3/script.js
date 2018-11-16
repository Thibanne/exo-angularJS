var app = angular.module('myForm', ['ngMessages']); //on déclare le module et on lui donne un nom

app.controller('formCtrl', ['$scope', function($scope){ //on donne les fonctions du controleur
  $scope.formsArray = []; //on crée un tableau vide pour pouvoir l'incrémenter des formulaires remplis ensuite
  $scope.clickedButton = function() { //au click sur le bouton, on lance la fonction suivante
    $scope.formsArray.push({ //on push (pousse) dans le tableau chacune des informations
      name: $scope.name, //dans la colonne "name", on ajoute le name (ng-model de l'index)
      email: $scope.email,  //dans la colonne "email", on ajoute le email (ng-model de l'index)
      subject: $scope.subject, //dans la colonne "subject", on ajoute le subject (ng-model de l'index)
      textsubject: $scope.textsubject //dans la colonne "textsubject", on ajoute le textsubject (ng-model de l'index)
    });
  };
}]);

// var app = angular.module('myApp', []);
//
// app.controller('validateCtrl', function($scope) {
//
// });

// $scope.tableau.push({
//   nom: name.value;
// })

// var app = angular.module("myApp", []);
//
// app.controller("formulary", ["$scope", function($scope) {
//   // création du regex
//     $scope.regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@example\.com.fr$/;
//   // lancement de la fonction (dans l'html)
//     $scope.myFunc = function() {
//     // si la réponse envoyer égale à "true" alors ...
//       if($scope.myForm.input.$valid){
//       // un contour vert apparaite autour de l'input
//         $scope.myStyle= {"border": "2px solid green"};
//       // un bloc de couleur verte apparait dans la div
//         $scope.myStyleNan= {"width": "300px", "height": "80px", "backgroundColor": "green"};
//     // si non alors ...
//       }else{
//       // un contour rouge apparaite autour de l'input
//         $scope.myStyle= {"border": "2px solid red"};
//       // un bloc de couleur rouge apparait dans la div
//         $scope.myStyleNan= {"width": "300px", "height": "80px", "backgroundColor": "red"};
//       }
//     };
//   }]);
