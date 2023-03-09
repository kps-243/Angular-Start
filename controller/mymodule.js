// Déclaration du module "canvas"
var myApp = angular.module('canvas',[]);

// Définition du contrôleur "sayHello" pour le module "canavas"
myApp.controller('sayHello', ['$scope', function($scope) {

// Définit une propriété name à la variable globale $scope, qui est un tableau avec un attribut text.
$scope.name = { text: "Morgan" };
}]);