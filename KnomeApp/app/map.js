$(function(){
	function loadMap(){
		var location = new google.maps.LatLng(40.015, 105.2705);
		var mapCanvas = document.getElementById('map');
		var map options = {
			center: location,
			zoom: 16,
			panControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(mapCanvas, mapOptions);
		var markerImage = 'marker.png';
		var marker = new google.maps.Marker({
			position: location,
			map: map,
			icon: markerImage
		});
		var contentString = '<div class="event-window>' +
				'<h3>Our Event</h3>' +
				'<div class="event-content">' +
				'<p>Event Info Here<p>' +
				'</div>' +
				'</div>'; 
		var eventWindow = new google.maps.InfoWindow({
			content: contentString,
			maxWidth: 400
		});
		marker.addListener('click',function(){
			eventWindow.open(map, marker);
		});
	}
	google.maps.event.addDomListener(window,'load', initMap);
});
