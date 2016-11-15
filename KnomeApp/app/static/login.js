const auth = firebase.auth();

firebase.auth().createUserWithEmailAndPassword(email, password)
	.catch(function(error) {
	}
	var errorCode = error.code;
	var errorMessage = error.message;
	if (errorCode == 'auth/weak-password') {
		alert('The password is too weak.');
	} else {
		alert(errorMessage);
 	}
 	console.log(error);
});