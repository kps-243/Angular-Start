var myApp = angular.module('contactModule',[]);
myApp.controller('contactController', ['$scope', function($scope){
    $scope.contact = {
        name : "Michael Kpassi",
        email : "mic201223@gmail.com",
        number : "07 60 19 40 68"
    };
    $scope.calculate = function(a,b){
        return(a+b)*3;
    };
}]);