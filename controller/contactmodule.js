// Déclaration du module "contactModule"
var myApp = angular.module('contactModule',[]);

// Définition du contrôleur "contactController" pour le module "contactModule"
myApp.controller('contactController', ['$scope', function($scope){

    // Définit un objet "contact" sur l'objet $scope, contenant les propriétés "name", "email" et "number"
    $scope.contact = {
        name : "Michael Kpassi",
        email : "mic201223@gmail.com",
        number : "07 60 19 40 68"
};

    // Définit une fonction "calculate" sur l'objet $scope, prenant deux arguments "a" et "b"
    $scope.calculate = function(a,b){
    
        // Calcule la somme de "a" et "b", multiplie le résultat par 3 et renvoie le résultat
        return(a+b)*3;
};
}]);