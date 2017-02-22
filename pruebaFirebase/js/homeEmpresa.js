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

   /*Return PROCESS*/
  btnRegresar.addEventListener("click", function(){
        regresar();
  });

   /*New proyect PROCESS*/
  btnFormulario.addEventListener("click", function(){
        var nom = document.getElementById("txtNombreProyecto").value;
        var des = document.getElementById("txtDescripcion").value;
        var are = document.getElementById("txtArea").value;
        var per = document.getElementById("txtPerfil").value;
        var vac = document.getElementById("txtVacantes").value;
        var sue = document.getElementById("txtSueldo").value;
        var dir = document.getElementById("txtDireccion").value;

        llenaProyecto(nom,des,are,per,vac,sue,dir);
  });

});