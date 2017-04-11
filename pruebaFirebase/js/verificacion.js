// Initialize Firebase
var config = {
    apiKey: "AIzaSyByyIfhuIL9e0tvhwUqkGCWKcGBTGGBLO0",
    authDomain: "prueba-urgente.firebaseapp.com",
    databaseURL: "https://prueba-urgente.firebaseio.com",
    storageBucket: "prueba-urgente.appspot.com",
    messagingSenderId: "483313675253"
  };

/*
var config = {
	apiKey: "AIzaSyBxrNMp2TQU8y72jkRRGLSdJq2-2N3jNRw",
	authDomain: "prueba-proyecto-39eb7.firebaseapp.com",
	databaseURL: "https://prueba-proyecto-39eb7.firebaseio.com",
	storageBucket: "prueba-proyecto-39eb7.appspot.com",
	messagingSenderId: "356288809556"
};
*/

firebase.initializeApp(config);
/*
var config = {
    apiKey: "AIzaSyAUByn-6VOe_6htTVEUyNZi9MRdTHg-Ew8",
    authDomain: "bolsadetrabajoitamdb.firebaseapp.com",
    databaseURL: "https://bolsadetrabajoitamdb.firebaseio.com",
    storageBucket: "bolsadetrabajoitamdb.appspot.com",
    messagingSenderId: "427953157462"
};
*/




// ON SIGN OUT ==================================================================================================
	function signOut(){
		firebase.auth().signOut()
		.then(function()
		{
			console.log("Sign Out!");
		}, function(error)
		{
			console.log(" ========== Coud not Sign Out! ==========");
		  // An error happened.
		});
	};

// ON VERIFICATION CLICK =========================================================================================
function verificate(){
	firebase.auth().currentUser.sendEmailVerification()
	.then(
		signOut()
		)
	.catch(function(err){
		console.log(err.code);
	});
};

	//ON LOGIN OR LOGOUT ============================================================================================
	firebase.auth().onAuthStateChanged(function(user) {
		  if (user)
		  {
		  	console.log("hay usuario");
		  } 
		  else 
		  {
		  	//window.location.href = ("http://practicasdeverano.itam.mx/");
							window.location.href = ("../index.html");
    
		  }
	});



