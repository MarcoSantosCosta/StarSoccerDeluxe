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
        // window.location.href = "eventos.html";
    };
    var error = function (error) {
        alert("FUDEU");
    };
    http.get(url, header).then((response) => success(response), (response) => error(response))
};

deslogar = function (context) {
    localStorage.removeItem('token');
    this.credenciais = null;
    this.user = null;
    context.$router.push('/login');
};



