(function() {

	// Initialize Firebase
	const config = {
		apiKey: "AIzaSyCPZd9X-l1LlbqJrDHbrLDE2FsF6fyWBV0",
		authDomain: "knomedb-89499.firebaseapp.com",
		databaseURL: "https://knomedb-89499.firebaseio.com",
		storageBucket: "knomedb-89499.appspot.com",
		messagingSenderId: "83063709381"
	};
	firebase.initializeApp(config);

	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
	const btnLogout = document.getElementById('btnLogout');
	const loginForm = document.getElementById('login_form');

	//add login event
	btnLogin.addEventListener('click', e => {
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		//sign in
		const promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));
	});
	//sign up
	btnSignUp.addEventListener('click', e =>{
		// TODO: check real email
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		//sign in
		const promise = auth.createUserWithEmailAndPassword(email, pass);
		promise
			.catch(e => console.log(e.message));
	});

	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
	});

	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser){
			console.log(firebaseUser);
			btnLogout.classList.remove('hide');
			loginForm.classList.add('hide')
		} else {
			console.log('not logged in');
			btnLogout.classList.add('hide');
			loginForm.classList.remove('hide')
		}
	});


	var userID = document.getElementById('userID');
	var dbRef = firebase.database().ref().child('text');
	//dbRef.on('value', snap => userID.innerText = snap.val());
}());