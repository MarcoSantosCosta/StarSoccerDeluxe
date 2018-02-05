var app = angular.module('Editar', []);

app.controller("EditarController", function ($scope, $http) {
    var callbackFunc = function (resp) {
        $scope.user = resp.data;
        console.log($scope.user);
    };
    autenticar($http, callbackFunc);


});