// Définit une application AngularJS nommée "MyService"
var myApp = angular.module('LogService',[]);

// Définit un contrôleur pour l'application myApp, en utilisant la méthode controller() d'AngularJS.
myApp.controller('LogController', function($scope,$log) {
    // Attache la valeur de $log à la propriété $log du $scope.
    $scope.$log = $log;
    // Initialise la propriété $scope.message avec la chaîne de caractères "AngularJS".
    $scope.message = 'AngularJS';
  });