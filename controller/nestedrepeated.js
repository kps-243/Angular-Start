// Déclaration d'un module AngularJS nommé 'SimpleFilter'
var myApp = angular.module('NestedRepeatBinding',[]);

// Définition d'un contrôleur nommé 'MyControlller' pour le module 'SimpleFilter'
myApp.controller('MyControlller', ['$scope', function($scope) {

// Définit une propriété "orders" sur la super variable globale $scope qui est un objet
$scope.orders = [

    // Ajoute un tableau représentant une commande
    {
        // Attribue un identifiant unique à la commande
        id:1,
        
        // Attribue un identifiant de transaction à la commande
        transid:'123456',
        
        // Attribue un nom de client à la commande
        customer:'user1',
        
        // Attribue une date de création à la commande
        created:'3/1/2014',
        
        // Ajoute un tableau d'objets représentant les détails de la commande
        details: [
            {name:'product1', quantity:2, price:2.5},
            {name:'product2', quantity:1, price:1.4},
            {name:'product3', quantity:3, price:3.5},
            {name:'product4', quantity:5, price:2.8}
        ]
    },
{
id:2,
transid:'123457',
customer:'user2',
created:'3/8/2014',
details: [
{name:'product1', quantity:1, price:2.5},
{name:'product2', quantity:1, price:1.4},
{name:'product4', quantity:2, price:2.8}
]
},
{
id:3,
transid:'123458',
customer:'user1',
created:'3/15/2014',
details: [
{name:'product1', quantity:4, price:2.5},
{name:'product2', quantity:3, price:1.4},
{name:'product3', quantity:2, price:3.5},
{name:'product4', quantity:1, price:2.8}
]
},
{
id:4,
transid:'123459',
customer:'user2',
created:'3/23/2014',
details: [
{name:'product1', quantity:1, price:2.5},
{name:'product2', quantity:1, price:1.4}
]
}
]
}]);
