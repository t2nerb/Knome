(function() {

	// Initialize Firebase
  const config = {
    apiKey: "AIzaSyBu25CVtUZakZ1eyA1H_m7E2ni12cl8tRE",
    authDomain: "knomedb.firebaseapp.com",
    databaseURL: "https://knomedb.firebaseio.com",
    storageBucket: "knomedb.appspot.com",
    messagingSenderId: "712655229098"
  };
  firebase.initializeApp(config);

	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
	const btnLogout = document.getElementById('btnLogout');
	const loginForm = document.getElementById('login_form');
    const btnCreateSave = document.getElementById('btnCreateSave');
    userInfo = null;

	const txtTitle = document.getElementById('createtitle');
	const txtDescription = document.getElementById('createdescription');


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

    btnCreateSave.addEventListener('click', e =>{
        const title = txtTitle.value;
        const description = txtDescription.value;
        console.log(title);
        console.log(description);
        if (title == ""){
            console.log("no title input")
            return;
        }
        if (description == ""){
            console.log("no desc input")
            return;
        }
        writeUserData(title,description);
    });
        

	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser){
			userInfo = firebaseUser;
			btnLogout.classList.remove('hide');
			loginForm.classList.add('hide')
		} else {
			userInfo = null;
			console.log('not logged in');
			btnLogout.classList.add('hide');
			loginForm.classList.remove('hide')
		}
	});


	var userID = document.getElementById('userID');
	var dbRef = firebase.database().ref().child('text');
	//dbRef.on('value', snap => userID.innerText = snap.val());

	function writeUserData(title, description) {
		firebase.database().ref("Events/" + title).set({
			Description : description
		});
	};
}());
