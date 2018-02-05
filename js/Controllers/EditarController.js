var app = angular.module('Editar', []);

app.controller("EditarController", function ($scope, $http) {
    var callbackFunc = function (resp) {
        if (resp) {
            $scope.user = resp.data;
            console.log($scope.user);
        }else{
            window.location.href = 'index.html';
        }
    };
    autenticar($http, callbackFunc);


});