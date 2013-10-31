jQuery(document).ready(function () {
    var map;
    var idelement; 		
    function initializeMap() {
  	var mapOptions = {
    		zoom: 12,
    		mapTypeId: google.maps.MapTypeId.ROADMAP
 	 };
  	map = new google.maps.Map(document.getElementById(idelement),mapOptions);
	if(navigator.geolocation) {
    		navigator.geolocation.getCurrentPosition(function(position) {
      		var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      		var marker = new google.maps.Marker({
      			position: pos,
      			map: map,
      			title: 'Aqui estoy!'
  		});
      		map.setCenter(pos);
    		},function(error){
		    switch(error.code) {
                    	case error.PERMISSION_DENIED:
                        	alert('El usuario nego la peticion.');
                        break;
                    	case error.POSITION_UNAVAILABLE:
                        	alert('La información de ubicacion no esta disponible.');
                        break;
                    	case error.TIMEOUT:
                        	alert('La petición tardo mucho tiempo en responder.');
                        break;
                    	case error.UNKNOWN_ERROR:
                        	alert('Ocurrio un error desconocido.');
                        break;
                   }
		});
  	} 
    } 
    function initializeImage() {
  	var mapOptions = {
    		zoom: 12,
    		mapTypeId: google.maps.MapTypeId.ROADMAP
 	 };
  	map = new google.maps.Map(document.getElementById(idelement),mapOptions);
	if(navigator.geolocation) {
    		navigator.geolocation.getCurrentPosition(function(position) {
      		var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      		map.setCenter(pos);
    		},function(error){
		    switch(error.code) {
                    	case error.PERMISSION_DENIED:
                        	alert('El usuario nego la peticion.');
                        break;
                    	case error.POSITION_UNAVAILABLE:
                        	alert('La información de ubicacion no esta disponible.');
                        break;
                    	case error.TIMEOUT:
                        	alert('La petición tardo mucho tiempo en responder.');
                        break;
                    	case error.UNKNOWN_ERROR:
                        	alert('Ocurrio un error desconocido.');
                        break;
                   }
		});
  	} 
    }   
    $.fn.locateMe = function (options) {

	idelement = $(this).attr('id');

        var defaults = {
            type: 'map'
        };
	options = $.extend(defaults, options); 
	if(options.type=='map'){   
		google.maps.event.addDomListener(window, 'load', initializeMap);
	}else if(options.type=='image'){   
		google.maps.event.addDomListener(window, 'load', initializeImage);
	}

        return $(this);
    }
    	
});
