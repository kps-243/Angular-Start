myApp = angular.module('inputValidation', []);
myApp.controller('validControl', ['$scope', function($scope){
    $scope.submitform = function(isvalid){
        if(isvalid){
            alert('Data was save');
        }
    };
}]);