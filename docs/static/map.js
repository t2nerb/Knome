$(function () {

	function initMap() {
		var location = new google.maps.LatLng(40.0150, -105.2705);
		var mapCanvas = document.getElementById('map');
		var mapOptions = {
			center: location,
			zoom: 16,
			panControl: true,
			streetViewControl: false,
			scrollwheel: true,
			mapTypeControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		var map = new google.maps.Map(mapCanvas, mapOptions);
		var markerImage = './static/img/marker.png';
		var addImage = './static/img/smallplus.png'
		var marker = new google.maps.Marker({
			position: location,
			map: map,
			icon: markerImage,
			animation: google.maps.Animation.DROP,
		});

		var addWindow = new google.maps.InfoWindow({ map: map });
		var addMarker = new google.maps.Marker({
			map: map,
			icon: markerImage
		});

		addMarker.addListener('click', function () {
			addWindow.open(map, addMarker);
		});

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				var pos = {
					lat: position.coords.latitude,
					lng: position.coords.longitude
				};

				addMarker.setIcon(addImage);
				addMarker.setPosition(pos);
				addWindow.setContent('<p>We found you!</p>' +
					'<button type="button" class="btn btn-knome btn-sm" data-toggle="modal" data-target="#new_event"> Create Event'
					+ '</button>');
				map.setCenter(pos);
				addWindow.open(map, addMarker);
			}, function () {
				handleLocationError(true, addMarker, map.getCenter());

			});
		} else {
			// Browser doesn't support Geolocation
			handleLocationError(false, addMarker, map.getCenter());
		}

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

		dbEventsObject = firebase.database().ref().child('Events/');
		dbEventsObject.on('child_added', snap=> {
			var newMarker = new google.maps.Marker({
				map: map,
				icon: markerImage
			});
			newMarker.setPosition(snap.val().Position);

			newMarker.addListener('click', function () {
				addWindow.open(map, newMarker);
			});

			eventDetails = snap.val().Description;
			eventName = snap.key;
			console.log(eventName);
			console.log(eventDetails);

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

		});


		marker.addListener('click', function () {
			infowindow.open(map, marker);
		});
		map.addListener('click', function () {
			infowindow.close(map, marker);
		});

		var styles = [{"stylers":[{"visibility":"on"},{"saturation":-100},{"gamma":0.54}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#4d4946"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"gamma":0.48}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"gamma":7.18}]}]

		map.set('styles', styles);

	}
	google.maps.event.addDomListener(window, 'load', initMap);
});
