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
    const txtFirstName = document.getElementById('firstName');
    const txtLastName = document.getElementById('lastName');
    newUser = false;
    
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
		newUser = true;
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
        if (!user){
        	alert("Please log in to create events");
        	return;
        }
        const title = createtitle.value;
        const description = createdescription.value;
        const posWrite = pos;
		if(!user) { alert("You need to sign in first!")}
        const userID = user.uid;
        const eventTime = new Date();
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
        saveEvent(title,description,posWrite,userID,eventTime);
    });
        
    //State change for user
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if (firebaseUser) {
			user = firebase.auth().currentUser;
    		if (user != null) {
    			email = user.email;
    			uid = user.uid;
    		}
    		if (newUser) {
				firstName = txtFirstName.value;
				lastName = txtLastName.value;
				saveUser(firstName, lastName, uid);
    		}
    		userSerssion(user);
		} else {
			user = null;
			userSerssion(user);
		}
	});

	function userSerssion (user){
		if (user) {
			btnLogout.classList.remove('hide');
			loginForm.classList.add('hide')
			console.log(user.uid + " is logged in");
			loginName.classList.remove('hide');
			firebase.database().ref('Users/' + user.uid).once('value').then(function(snapshot) {
				firstName = snapshot.val().FirstName;
				document.getElementById("loginName").innerHTML = "Hi, " + firstName;
			});
		} else {
			console.log('not logged in');
			btnLogout.classList.add('hide');
			loginForm.classList.remove('hide')
			loginName.classList.add('hide');
		}
	};

	//Function to save events into firebase
	function saveEvent(title, description, posWrite, userID, eventTime) {
		firebase.database().ref("Events/" + title).set({
			Description : description, 
			Position : posWrite,
			UserInfo : {
				UserID : userID,
				EventTime : eventTime.toString()
			}
		});
	};

	function saveUser(firstName, lastName, userID){
		firebase.database().ref("Users/" + userID).set({
			FirstName : firstName,
			LastName : lastName
		});
	};

    function bootstrap_alert(message) {
        $('#alert_placeholder').html('<div class="alert"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')
    }
}());
