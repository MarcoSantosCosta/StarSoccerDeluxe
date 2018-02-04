var final = new Date('02/05/2018- 23:00');
console.log(final);


var returnStringDate = function(now, final){
    var steep = final-now;
    var h = Math.floor(steep/3600000);
    steep = steep - (h*3600000);
    var m = Math.floor(steep/60000);
    steep = steep - (m*60000);
    var s = Math.floor(steep/1000);
    if(h < 10){
        h = "0"+h;
    }
    if(m < 10){
        m = "0"+m;
    }
    if(s < 10){
        s = "0"+s;
    }

    return h+":"+m+":"+s;
};


var loop = function () {
    setTimeout(function () {
        var time = returnStringDate(new Date(),final)
        $("#countdown").html(time);
        loop();
    }, 1000);
}

loop();



