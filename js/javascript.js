$(document).ready(function(){
    $('ul.tabs').tabs({
    /*swipeable : true   /* DESLIZAR TABS DAS CURIOSIDADES*/
    });
});


function initMap() {
    var comp = {lat: -21.227783, lng: -44.978517};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: comp
    });
    var marker = new google.maps.Marker({
    position: comp,
    map: map
    });
}


$(document).ready(function(){
    $('.carousel').carousel();
});
        

  $(document).ready(function() {
    $('select').material_select();
  });
           
 $('select').material_select('destroy');
            


function scrollto (target) {
	$(target).scroll();
}
