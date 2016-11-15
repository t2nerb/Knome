$(function(){
	function initMap(){
		var location = new google.maps.LatLng(40.0150, -105.2705);
		var mapCanvas = document.getElementById('map');
		var mapOptions = {
			center: location,
			zoom: 16,
			panControl: false,
			scrollwheel: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(mapCanvas, mapOptions);
		var markerImage = 'marker.png';
		var marker = new google.maps.Marker({
			position: location,
			map: map,
			icon: markerImage
		});

		var contentString = '<div class="info-window">' +
				'<h3>Event Name</h3>' +
				'<div class="info-content">' +
				'<p>Event Details</p>' +
				'</div>' +
				'</div>';

		var infowindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 400
		});

		marker.addListener('click', function () {
			infowindow.open(map, marker);
		});

		var styles = [{"featureType": "landscape", "stylers": [{"saturation": 0}, {"lightness": 0}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -10}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -50}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": 0}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": 0}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": 0}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": 0}, {"saturation": 0}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#8eb7ff"}, {"lightness": 0}, {"saturation": 0}]}];

		map.set('styles', styles);

	}
	google.maps.event.addDomListener(window, 'load', initMap);
});
