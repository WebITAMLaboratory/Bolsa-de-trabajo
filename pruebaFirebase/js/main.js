
// Initialize Firebase
/*var config = {
	apiKey: "AIzaSyBxrNMp2TQU8y72jkRRGLSdJq2-2N3jNRw",
	authDomain: "prueba-proyecto-39eb7.firebaseapp.com",
	databaseURL: "https://prueba-proyecto-39eb7.firebaseio.com",
	storageBucket: "prueba-proyecto-39eb7.appspot.com",
	messagingSenderId: "356288809556"
};*/
var config = {
    apiKey: "AIzaSyAUByn-6VOe_6htTVEUyNZi9MRdTHg-Ew8",
    authDomain: "bolsadetrabajoitamdb.firebaseapp.com",
    databaseURL: "https://bolsadetrabajoitamdb.firebaseio.com",
    storageBucket: "bolsadetrabajoitamdb.appspot.com",
    messagingSenderId: "427953157462"
  };
firebase.initializeApp(config);

const btnRegister = document.getElementById("btnRegister");
const txtEmail  = document.getElementById("txtEmail");
const txtPassword  = document.getElementById("txtPassword");

/*lOG OUT PROCESS*/
btnLogOut.addEventListener("click", function(){
      firebase.auth().signOut().then(function() {
        console.log("Sign-out successful");

      }, function(error) {
        console.log("An error happened.");
        alert(error.message);
      });
});


