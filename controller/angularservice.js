// Définit une application AngularJS nommée "MyService"
var myApp = angular.module('MyService',[]);

// Définit un service nommé "AreaService"
// avec deux méthodes: "square" et "circle"
myApp.service('AreaService', function(){
  this.square = function(a) {
    return a*a;
  };
  this.circle = function(r) {
    return 3.14*r*r;
  };
});

// Définit un contrôleur AngularJS nommé "MyControlller"
myApp.controller('MyControlller', function($scope,AreaService) {

  // Initialise le résultat du calcul à 0
  $scope.result = 0;

  // Définit une fonction qui calcule le carré de "a" et stocke le résultat dans "result"
  $scope.calculateSquare = function(a) {
    $scope.result = AreaService.square(a);
  };

  // Définit une fonction qui calcule l'aire du cercle de rayon "r" et stocke le résultat dans "result"
  $scope.calculateCircle = function(r) {
    $scope.result = AreaService.circle(r);
  };
});