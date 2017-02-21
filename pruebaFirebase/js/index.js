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
	//Registro
	const btnRegister = document.getElementById("btnRegister");
	const txtEmail  = document.getElementById("txtEmail");
	const txtPassword  = document.getElementById("txtPassword");
	//Login
	const btnLogin = document.getElementById("btnLogin");
	const txtEmailLogin  = document.getElementById("txtEmailLogin");
	const txtPasswordLogin  = document.getElementById("txtPasswordLogin");

	//ADD register event
	btnRegister.addEventListener("click", function(){
		const email = txtEmail.value;
		const password = txtPassword.value;
		registerAlumno( email, password);
		console.log("Trying to Register");
	});


	//LOGIN register event
	btnLogin.addEventListener("click", function(){
		const email = txtEmailLogin.value;
		const password = txtPasswordLogin.value;
		alert("entrando");
		console.log("Trying to Login");
		loginAlumno( email, password);
		
	});
});