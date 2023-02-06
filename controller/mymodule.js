var myApp = angular.module('canvas',[]);
myApp.controller('sayHello', ['$scope', function($scope) {
$scope.name = { text: "Morgan" };
}]);