myApp = angular.module('inputValidation', []); //Stocke le module dans la variable myApp
myApp.controller('validControl', ['$scope', function($scope){ //Crée le controller
    $scope.submitform = function(isvalid){ // Vérifie que le formulaire est valide
        if(isvalid){ //Si le formulaire est valide alors
            alert('Data was save'); // Alerte que les données sont sauvegardées
        }
    };
}]);