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

  	//User Auth Info
	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
	const btnLogout = document.getElementById('btnLogout');
	const loginForm = document.getElementById('login_form');
    const btnCreateSave = document.getElementById('btnCreateSave');
    
    //Write to DB info
	const txtTitle = document.getElementById('createtitle');
	const txtDescription = document.getElementById('createdescription');

	//add login event
	btnLogin.addEventListener('click', e => {
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		//sign in
		const promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(e => alert(e.message));
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
			.catch(e => alert(e.message));
	});
	//sign out
	btnLogout.addEventListener('click', e => {
		firebase.auth().signOut();
	});


	//save event
    btnCreateSave.addEventListener('click', e =>{
        const title = createtitle.value;
        const description = createdescription.value;
        const posWrite = pos;
        const userID = user.uid;
        addMarker.setVisible(false);
        addWindow.close();

        //error handling for event creation
        if (title == ""){
            console.log("NULL title")
            alert('Please enter a title');
            return;
        }
        if (description == ""){
            console.log("NULL description")
            alert('Please enter a description');
            return;
        }
        saveEvent(title,description,posWrite,userID);
    });
        
    //State change for user
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			user = firebase.auth().currentUser;
    		if (user != null) {
    			email = user.email;
    			uid = user.uid;
    		}
    		userSerssion(user);
		} else {
			user = null;
			userSerssion(user)
		}
	// 		userInfo = firebaseUser;
	// 		btnLogout.classList.remove('hide');
	// 		loginForm.classList.add('hide')
	// 	} else {
	// 		userInfo = null;
	// 		console.log('not logged in');
	// 		btnLogout.classList.add('hide');
	// 		loginForm.classList.remove('hide')
	// 	}
	});

	
	function userSerssion (user){
		if (user) {
			btnLogout.classList.remove('hide');
			loginForm.classList.add('hide')
			console.log(user.uid);
		} else {
			console.log('not logged in');
			btnLogout.classList.add('hide');
			loginForm.classList.remove('hide')
		}
	};


	//Function to save events into firebase
	function saveEvent(title, description, posWrite, userID) {
		firebase.database().ref("Events/" + title).set({
			Description : description, 
			Position : posWrite,
			UserID : userID
		});
	};

    function bootstrap_alert(message) {
        $('#alert_placeholder').html('<div class="alert"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')
    }
}());
