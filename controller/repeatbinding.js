// Définition du module AngularJS appelé "RepeatBinding"
var myApp = angular.module('RepeatBinding',[]);

// Définition du contrôleur "MyControlller" pour le module "RepeatBinding"
myApp.controller('MyControlller', ['$scope', function($scope) {

// Définition d'un tableau d'objets clients avec leurs propriétés "name", "email" et "country"
    $scope.customers = [
        {name:'user1',email:'user1@email.com',country:'UK'},
        {name:'user2',email:'user2@email.com',country:'NL'},    
        {name:'user3',email:'user3@email.com',country:'DE'},
        {name:'user4',email:'user4@email.com',country:'UK'},
        {name:'user5',email:'user5@email.com',country:'US'},
        {name:'user6',email:'user6@email.com',country:'US'},
        {name:'user7',email:'user7@email.com',country:'CA'}
    ];

}]);