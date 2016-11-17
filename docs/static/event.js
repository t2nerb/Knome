(function() {

	const title = document.getElementById('formGroupExampleInput');
	const description = document.getElementById('description');

		btnCreateSave.addEventListener('click', e=> {
		
	});

	function writeUserData(title, description) {
  		firebase.database().ref("Events/" + title).set({
  			Description : description
  		});
	}
	writeUserData(title, description);


}());