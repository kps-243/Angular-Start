myApp = angular.module('inputValidation', []); //Stocke le module dans la variable myApp
myApp.controller('validControl', ['$scope', function($scope){ //Crée le controller
    $scope.submitform = function(isvalid){
        if(isvalid){
            alert('Data was save');
        }
    };
}]);