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

$(document).ready(function(){


  //buttons
  const btnLogOut = document.getElementById("btnLogOut");
  const btnCancelar = document.getElementById("btnCancelar");
  const btnFormulario = document.getElementById("btnFormulario");

  //text
  const txtEmpresaNom = document.getElementById("txtEmpresaNom");
  const txtEmpresaContacto = document.getElementById("txtEmpresaContacto");
  const txtEmpresaTel = document.getElementById("txtEmpresaTel");
  const txtEmpresaVac = document.getElementById("txtEmpresaVac");
  const txtEmpresaSueldo = document.getElementById("txtEmpresaSueldo");

  /*lOG OUT PROCESS*/
  btnLogOut.addEventListener("click", function(){
        firebase.auth().signOut().then(function() {
          console.log("Sign-out successful");

        }, function(error) {
          console.log("An error happened.");
          alert(error.message);
        });
  });

  /*lOG OUT PROCESS*/
  btnCancelar.addEventListener("click", function(){
        firebase.auth().signOut().then(function() {
          console.log("Sign-out successful");

        }, function(error) {
          console.log("An error happened.");
          alert(error.message);
        });
  });

  btnFormulario.addEventListener("click",function(){
    const nom = txtEmpresaNom.value;
    const contacto = txtEmpresaContacto.value;
    const tel = txtEmpresaTel.value;
    const numVac = txtEmpresaVac.value;
    const sueldoAprox = txtEmpresaSueldo.value;

    llenaEmpresa(nom,contacto,tel,numVac,sueldoAprox);

  });

});