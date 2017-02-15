// Initialize Firebase

var config = {
	apiKey: "AIzaSyBxrNMp2TQU8y72jkRRGLSdJq2-2N3jNRw",
	authDomain: "prueba-proyecto-39eb7.firebaseapp.com",
	databaseURL: "https://prueba-proyecto-39eb7.firebaseio.com",
	storageBucket: "prueba-proyecto-39eb7.appspot.com",
	messagingSenderId: "356288809556"
};
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


$( document ).ready(function() {

	document.getElementById("btnLogOut").addEventListener("click",function(){
		signOut();
	});

});
//Sign OUT
	function signOut(){
		firebase.auth().signOut()
		.then(function()
		{
			console.log("Sign Out!");
			const location = (window.location.href);
			const last = (window.location.href).lastIndexOf("/html");
			window.location.replace(location.substr(0,last) + "/index.html");
		}, function(error)
		{
			console.log(" ========== Coud not Sign Out! ==========");
		  // An error happened.
		});
	}

	var email;
	//ON LOGIN OR LOGOUT
	firebase.auth().onAuthStateChanged(function(user) {
		  if (user)
		  {
		  	console.log("hay usuario");
		  	email = firebase.auth().currentUser.email;
		  } 
		  else 
		  {
		  	console.log("no hay usuario");
		  	if ((email).includes("@itam.mx"))
		  	{
				const location = (window.location.href).replace("/html/verificacion.html","");
			    window.location.replace(location + "/index.html");
		  	}
		  	else
		  	{
				const location = (window.location.href).replace("/verificacion.html","");
			    window.location.replace(location + "/empresa.html");
		  	}     
		  }
	});