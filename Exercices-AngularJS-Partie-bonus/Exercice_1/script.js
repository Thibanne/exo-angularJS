var app = angular.module("myApp", []);

app.controller("fomulaire", ["$scope", function($scope) {
  // création du regex
    $scope.regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@example\.com.fr$/;
  // lancement de la fonction (dans l'html)
    $scope.myFunc = function() {
    // si la réponse envoyer égale à "true" alors ...
      if($scope.myForm.input.$valid){
      // un contour vert apparaite autour de l'input
        $scope.myStyle= {"border": "2px solid green"};
      // un bloc de couleur verte apparait dans la div
        $scope.myStyleNan= {"width": "300px", "height": "40px", "backgroundColor": "green"};
    // si non alors ...
      }else{
      // un contour rouge apparaite autour de l'input
        $scope.myStyle= {"border": "2px solid red"};
      // un bloc de couleur rouge apparait dans la div
        $scope.myStyleNan= {"width": "300px", "height": "40px", "backgroundColor": "red"};
      }
    };
  }]);
