// Initialize Firebase

var config = {
	apiKey: "AIzaSyBxrNMp2TQU8y72jkRRGLSdJq2-2N3jNRw",
	authDomain: "prueba-proyecto-39eb7.firebaseapp.com",
	databaseURL: "https://prueba-proyecto-39eb7.firebaseio.com",
	storageBucket: "prueba-proyecto-39eb7.appspot.com",
	messagingSenderId: "356288809556"
};
/*
var config = {
    apiKey: "AIzaSyAUByn-6VOe_6htTVEUyNZi9MRdTHg-Ew8",
    authDomain: "bolsadetrabajoitamdb.firebaseapp.com",
    databaseURL: "https://bolsadetrabajoitamdb.firebaseio.com",
    storageBucket: "bolsadetrabajoitamdb.appspot.com",
    messagingSenderId: "427953157462"
};
*/
firebase.initializeApp(config);

//Registro
const btnRegister = document.getElementById("btnRegister");
const txtEmail  = document.getElementById("txtEmail");
const txtPassword  = document.getElementById("txtPassword");
//Login
const btnLogin = document.getElementById("btnLogin");
const txtEmailLogin  = document.getElementById("txtEmailLogin");
const txtPasswordLogin  = document.getElementById("txtPasswordLogin");


//
// ======================= LLEVAR A LA PAGINA DE INFORMACION SOBRE EL REGISTRO COMO EMRPRESA
// ======================= CREAR LA BASE DE DATOS Y DAR SENTIDO QUE ES UNA EMPRESA
// ======================= CREAR LA FORMA DE CONFIRMACION SOBRE LOS USOS DEL SITIO
//
//ADD register event
btnRegister.addEventListener("click", function(){
	const email = txtEmail.value;
	const password = txtPassword.value;
	registerEmpresa( email, password);
	console.log("Trying to Register");
});


//LOGIN register event
btnLogin.addEventListener("click", function(){
	const email = txtEmailLogin.value;
	const password = txtPasswordLogin.value;
	console.log("Trying to Login");
	loginAlumno( email, password);
});