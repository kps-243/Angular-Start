// Définition du module AngularJS appelé "sampleModule"
var myApp = angular.module('sampleModule',[]);

// Définition d'un contrôleur nommé 'MyControlller' pour le module 'sampleModule'
myApp.controller('Mycontroller', ['$scope', function($scope){

       // Initialise une variable "title" avec la valeur "Module Simple" sur $scope
       $scope.title = 'Module Simple';
    
       // Initialise une variable "result" avec la valeur "0" sur $scope
       $scope.result = '0';
       
       // Définit une fonction "add" qui prend deux arguments "a" et "b"
       $scope.add = function(a,b){
           // Ajoute les deux arguments et stocke le résultat dans la variable "result" sur $scope
           $scope.result = a + b;
       };
       
       // Définit une fonction "multiple" qui prend deux arguments "a" et "b"
       $scope.multiple = function(a,b){
           // Multiplie les deux arguments et stocke le résultat dans la variable "result" sur $scope
           $scope.result = a*b;
       };
   
   }]);
