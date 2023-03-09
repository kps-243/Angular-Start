// Déclaration du module "SimpleBinding"
var myApp = angular.module('SimpleBinding',[]);

// Définition du contrôleur "MyControlller" pour le module "SimpleBinding"
myApp.controller('MyControlller', ['$scope', function($scope) {
    // Initialisation d'un objet "customer" vide dans le $scope
    $scope.customer = {};
}]);