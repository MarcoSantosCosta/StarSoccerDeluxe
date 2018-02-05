var app = angular.module('Editar', []);

app.controller("EditarController", function ($scope, $http) {
    var callbackFunc = function (resp) {
        if (resp) {
            $scope.user = resp.data;
            $scope.user.data.address.stateID = "" + $scope.user.data.address.stateID;
            console.log($scope.user.data.address.stateID);
            $scope.user.data.phoneNumber = "" + $scope.user.data.phone.DDD + $scope.user.data.phone.phoneNumber;
            console.log($scope.user);
        } else {
            window.location.href = 'index.html';
        }
    };
    autenticar($http, callbackFunc);


    let clearValues = function (data) {

        data.RG = data.RG.replace(/[)( \- \s .]/g, "");
        data.phoneNumber = data.phoneNumber.replace(/[)( \- \s .]/g, "");
        data.DDD = data.phoneNumber.substring(0, 2);
        data.phoneNumber = data.phoneNumber.substring(2, data.phoneNumber.length);
        data.cep = "" + data.cep;
        data.cep = data.cep.replace(/[)( \- \s .]/g, "");

        return data;
    };


    let validate = function () {
        var result = true;
        if (!$scope.user.data.name) {
            Materialize.toast('Ops! Qual é mesmo seu nome? &nbsp<i class="em em-thinking_face"></i>', 2000);
            result = false;
        }
        return result;

    };


    $scope.editar = function () {
        alert();
        if (validate()) {
            let url = path + "user/"+$scope.user.id;
            let data = {
                name: $scope.user.data.name,
                gender: $scope.user.data.gender,
                birthday: $scope.user.data.birthday,
                RG: $scope.user.data.rg,
                phoneNumber: $scope.user.data.phoneNumber,
                cep: $scope.user.data.address.cep,
                stateID: $scope.user.data.address.stateID,
                city: $scope.user.data.address.city,
                street: $scope.user.data.address.street,
                number: $scope.user.data.address.number,
                complement: $scope.user.data.address.complement,
                region: $scope.user.data.address.district,
            };
            let header = {
                headers: {'Authorization': 'Bearer ' + token}
            };

            console.log("PQPQPQPQP");
            console.log(data);
            data = clearValues(data);
            console.log(data);
            var success = function (success) {
                alert('Acertou Mizeravi');
            };
            var error = function (error) {
                console.log(error);
            };
            $http.put(url, data,header).then((response) => success(response), (response) => error(response))
        }
    };


});