$(function(){

	// Initialize Firebase
  const config = {
    apiKey: "AIzaSyBu25CVtUZakZ1eyA1H_m7E2ni12cl8tRE",
    authDomain: "knomedb.firebaseapp.com",
    databaseURL: "https://knomedb.firebaseio.com",
    storageBucket: "knomedb.appspot.com",
    messagingSenderId: "712655229098"
  };
  firebase.initializeApp(config);

	function initMap(){
		var location = new google.maps.LatLng(40.0150, -105.2705);
		var mapCanvas = document.getElementById('map');
		var mapOptions = {
			center: location,
			zoom: 16,
			panControl: false,
			streetViewControl: false,
			scrollwheel: true,
			mapTypeControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(mapCanvas, mapOptions);
		var markerImage = '../static/img/marker.png';
		var marker = new google.maps.Marker({
			position: location,
			map: map,
			icon: markerImage
		});

		var newMarker = new google.maps.InfoWindow({map: map});

		if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            newMarker.setPosition(pos);
            newMarker.setContent('We found you.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, newMarker, map.getCenter());

          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, newMarker, map.getCenter());
        }

		//Have to dynamically update reads - Using snapshots, we can do this with an event handler. - jquery
    //var database = firebase.database()
		/*
		function readEventdata(event, Char){
		    var eventinfo = firebase.database().ref('Events/' + event + '/' + Char);
		    eventinfo.on('value', function(snapshot)){
					updateChar(postElement, snapshot.val())
		}
	}
	*/

		/*function writeEventData(eventname, location, price, time, type, agerec){
			firebase.database().ref('Events/' + eventame).set(
				{
					Location: location,
					Price: price,
					Time: time,
					ageRec: agerec,
					Type: type
				}
			)
		}*/

		var eventName = 'FUN TIMES';
		var eventDetails = 'WOW THIS IS FUN';

		var contentString = '<div class="info-window">' +
				'<h3 class="brand"> ' + eventName + ' </h3>' +
				'<div class="info-content">' +
				'<p> ' + eventDetails + ' </p>' +
				'</div>' +
				'</div>';

		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 400
		});

		marker.addListener('click', function () {
			infowindow.open(map, marker);
		});
		map.addListener('click', function () {
			infowindow.close(map, marker);
		});

		var styles = [{"featureType": "landscape", "stylers": [{"saturation": 0}, {"lightness": 0}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -10}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": 0}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": 0}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": 0}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": 0}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": 0}, {"saturation": 0}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#8eb7ff"}, {"lightness": 0}, {"saturation": 0}]}];

		map.set('styles', styles);

	}
	google.maps.event.addDomListener(window, 'load', initMap);
});
