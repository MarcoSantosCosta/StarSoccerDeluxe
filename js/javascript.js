$(document).ready(function(){
    $('ul.tabs').tabs({
    swipeable : true   
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

$(document).ready(function(){
     $('.slider').slider();
     $('.slider').height ='900px';
});
var options = [
    {selector: '.botoes-icon', offset: 200, callback: customCallbackFunc },
    {selector: '.botoes-icon', offset: 200, callback: function() {
      customCallbackFunc();
    } },
  ];
  Materialize.scrollFire(options);
        