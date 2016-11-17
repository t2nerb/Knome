(function() {
	const config = {
		apiKey: "AIzaSyCPZd9X-l1LlbqJrDHbrLDE2FsF6fyWBV0",
		authDomain: "knomedb-89499.firebaseapp.com",
		databaseURL: "https://knomedb-89499.firebaseio.com",
		storageBucket: "knomedb-89499.appspot.com",
		messagingSenderId: "83063709381"
	};
	firebase.initializeApp(config);

	var ref = new Firebase(https://knomedb.firebaseio.com);
	var eventRef = ref.child("Events");
	var title = document.getElementById("formGroupExampleInput");
	var description = document.getElementById("Description");
	function writeEventData(title, description){
		eventRef.set({
			title : {
				Description : description
			}
		});
	};


}());