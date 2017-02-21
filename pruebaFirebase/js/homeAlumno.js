// Initialize Firebase
var config = {
	apiKey: "AIzaSyBxrNMp2TQU8y72jkRRGLSdJq2-2N3jNRw",
	authDomain: "prueba-proyecto-39eb7.firebaseapp.com",
	databaseURL: "https://prueba-proyecto-39eb7.firebaseio.com",
	storageBucket: "prueba-proyecto-39eb7.appspot.com",
	messagingSenderId: "356288809556"
};
firebase.initializeApp(config);

$(document).ready(function(){


  //buttons
  const btnLogOut = document.getElementById("btnLogOut");


  /*lOG OUT PROCESS*/
  btnLogOut.addEventListener("click", function(){
        firebase.auth().signOut().then(function() {
          console.log("Sign-out successful");

        }, function(error) {
          console.log("An error happened.");
          alert(error.message);
        });
  });

});