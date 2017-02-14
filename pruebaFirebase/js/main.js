
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


/*lOG OUT PROCESS*/
btnLogOut.addEventListener("click", function(){
      firebase.auth().signOut().then(function() {
        console.log("Sign-out successful");

      }, function(error) {
        console.log("An error happened.");
        alert(error.message);
      });
});


function displayIdioma() {
    var strIdioma = $("#selectAlumIdiomas :selected").text();
    ideoma(strIdioma);
}
function Idioma(strIdioma) {
    var btn = document.createTextNode(strIdioma);
    document.getElementById("idioma").appendChild(btn);
}
