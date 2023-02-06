var myApp = angular.module('sampleModule',[]);
myApp.controller('Mycontroller', ['$scope', function($scope){
    $scope.title = 'Module Simple';
    $scope.result = '0';
    $scope.add = function(a,b){
        $scope.result = a + b;
    };
    $scope.multiple = function(a,b){
        $scope.result = a*b;
    };

}]);