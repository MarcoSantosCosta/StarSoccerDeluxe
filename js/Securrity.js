var path = 'http://localhost/compjr/SoccerStarsDeluxe/server.php/API/';
var user = null;

autenticar = function (http, callbackFunc) {
    let url = path + 'auth/user';
    let token = localStorage.getItem('SSDToken');
    let header = {
        headers: {'Authorization': 'Bearer ' + token}
    };
    var success = function (success) {
        this.user = success;
        callbackFunc(success);
    };
    var fail = function (error) {
        callbackFunc(false);
    };
    http.get(url, header).then((response) => success(response), (response) => fail(response))
};

deslogar = function () {
    localStorage.removeItem('SSDToken');
    window.location.href = 'index.html';

};



