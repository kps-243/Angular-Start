// Déclaration du module "inputvalidation"
myApp = angular.module('inputValidation', []); 

// Définition du contrôleur "validControl" pour le module "inputValidation"
myApp.controller('validControl', ['$scope', function($scope){ 

    // Vérification de la validité du formulaire 
    $scope.submitform = function(isvalid){ 

        //Si le formulaire est valide alors
        if(isvalid){ 

            // Alerte que les données sont sauvegardées
            alert('Data was save'); 
        }
    };
}]);