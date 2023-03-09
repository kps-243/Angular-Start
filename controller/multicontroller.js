// Déclaration du module "multiController"
var myApp = angular.module('multiController', []);

// Définition du contrôleur "Math1" pour le module "multiController"
myApp.controller('Math1',['$scope', function ($scope){
   /* Définit une propriété qui joue le rôle de variable, "result" sur la super variable globale $scope,
    initialisée à la chaîne de caractères '0' */
    $scope.result = '0';

    // Définit une fonction "add" sur la super variable globale $scope, prenant deux arguments "a" et "b"
    $scope.add = function(a,b){
    
    // Ajoute "a" et "b" et stocke le résultat dans la propriété "result"
    $scope.result = a + b;
};

}]);

// Définition du contrôleur "Math1" pour le module "multiController"
myApp.controller('Math2', ['$scope', function($scope){
    $scope.result = '0';

    /* Définit une fonction "multiple" sur la super variable globale $scope,
     prenant deux arguments "a" et "b" */
    $scope.multiple = function(a,b){

        //Multiplie a et b et stocke le résultat dans la propriété result.
          $scope.result = a*b;
    }
}]);