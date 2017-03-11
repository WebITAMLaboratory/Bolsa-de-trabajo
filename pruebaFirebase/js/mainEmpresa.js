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


// GLOBAL FUNCTIONS ============================================================================
//==============================================================================================



// ON FINISHED FORM ======================================================================================

function llenaEmpresa(nom,contacto,tel){
    
    var res = false;
    var nombre;
    var cont;
    var telefono;
    // nombre empresa
    if(nom.trim())
    {
      nombre = nom;
      res = true;
    }
    else
    {
      $("#txtErrorEmpresaNom").text("Nombre de empresa invalido");
      res = false;
    }
    //nombre de contacto
    if( contacto.trim())
    {
      cont = contacto;
      res = true == res;
    }
    else
    {
      $("#txtErrorEmpresaContacto").text("Nombre de Contacto Invalido");
      res = false;
    }
    //número de contacto
    if( tel.trim())
    {
      telefono = tel;
      res = true == res;
    }
    else
    {
      $("#txtErrorEmpresaTel").text("Ingresa un número valido, solo números");
      res = false;
    }

    if(res)
    {
      var uid = firebase.auth().currentUser.uid;
      var email = firebase.auth().currentUser.email;
      const urlEmpresa = "/empresas/" + uid + "/";
      const urlUsers = "/users/" + uid + "/";
      
      firebase.auth().currentUser.updateProfile({
      displayName: nombre
    }).then(function() {
      // Update successful.
        firebase.database().ref(urlEmpresa).set({
            Nombre: nombre,
            Email : email,
            Contacto: cont,
            Telefono: telefono
        }).then(function(){
          firebase.database().ref(urlEmpresa + "Proyectos/").set({
            proyecto : "false"
          }).then(function(){
              firebase.database().ref(urlUsers).set({
              Tipo : "Empresa",
              Registro : "true",
              Nombre : nombre
            }).then(function(){
              firebase.auth().currentUser.sendEmailVerification().then(function(){
                //window.location.href = ("http://practicasdeverano.itam.mx/html/verificacion.html");
                window.location.href = ("./verificacion.html");
              })
            })
          })
          
        })
    }, function(error) {
      // An error happened.
      console.log(error.message);
    });

    
    }
      
};


//ON LOGIN OR LOGOUT =============================================================
  firebase.auth().onAuthStateChanged(function(user) {
      if (user)
      { 
        if(firebase.auth().currentUser.emailVerified)
        {
          //window.location.replace("http://practicasdeverano.itam.mx/html/homeAlumno.html");
          window.location.href = ("./homeEmpresa.html");
        }
        else
        {
          var userId = firebase.auth().currentUser.uid;
          
            firebase.database().ref("/users/"+userId).once('value', function(snapshot) {
            var exists = (snapshot.val() !== null);
            if(exists)
            {   
              //check if user has filled form
              var form = false;
              var a = snapshot.val().Registro;
              form = a;   
              if(form)
              {
                //window.location.href = ("http://practicasdeverano.itam.mx/html/verificacion.html");
                window.location.href = ("./verificacionEmpresa.html");
              }
            }
            else
            {
              //user has not filled form
              //window.location.href = ("http://practicasdeverano.itam.mx/html/mainAlumno.html");
              //window.location.href = ("./mainEmpresa.html");
            }
        });
        }
      } 
      else 
      {
             
        //window.location.replace("http://practicasdeverano.itam.mx/html/empresa.html");
          window.location.href = ("./empresa.html");
          
      }
  });

// GLOBAL FUNCTIONS  END ============================================================================
//===================================================================================================


$(document).ready(function(){

  //lOG OUT PROCESS =========================================================================
    $("#btnLogOut").click(function(){
      firebase.auth().signOut()
      .then(function(){
          //window.location.href = ("http://practicasdeverano.itam.mx/");
          window.location.href = ("../");
      },function(error){
          console.log(error.errorMessage);
      });
    });

    $("#btnCancelar").click(function(){
      firebase.auth().signOut()
      .then(function(){
          //window.location.href = ("http://practicasdeverano.itam.mx/");
          window.location.href = ("../");
      },function(error){
          console.log(error.errorMessage);
      });
    });

    // ON FINISHED FORM =================================================================
    $("#btnFormulario").click(function(){

      var nom =$("#txtEmpresaNom").val();
      var contacto =$("#txtEmpresaContacto").val();
      var tel =$("#txtEmpresaTel").val();

      llenaEmpresa(nom,contacto,tel);
    });

});