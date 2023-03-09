// Déclaration d'un module AngularJS nommé 'SimpleFilter'
var myApp = angular.module('SimpleFilter', []);

// Définition d'un contrôleur nommé 'MyControlller' pour le module 'SimpleFilter'
myApp.controller('MyControlller', ['$scope', function($scope) {

  // Définition d'un tableau de clients dans la portée du contrôleur
  $scope.customers = [
    {name:'andi',email:'andi@email.com',country:'UK'},
    {name:'brown',email:'brown@email.com',country:'NL'},
    {name:'jake',email:'jake@email.com',country:'DE'},
    {name:'jane',email:'jane@email.com',country:'UK'},
    {name:'mike',email:'mike@email.com',country:'US'},
    {name:'xemmy',email:'xemmy@email.com',country:'US'},
    {name:'zahra',email:'zahra@email.com',country:'CA'}
  ];

}]);
