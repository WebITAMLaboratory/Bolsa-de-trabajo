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



 //ON LOGIN OR LOGOUT ========================================================================================
  firebase.auth().onAuthStateChanged(function(user) {
      if (user)
      {
        console.log("hay usuario");
      } 
      else 
      {
        //window.location.href = ("http://practicasdeverano.itam.mx/");
      window.location.href = ("./empresa.html");
    
      }
  });



$(document).ready(function(){


  //lOG OUT PROCESS =========================================================================
    $("#btnLogOut").click(function(){
      firebase.auth().signOut()
      .then(function(){
          //window.location.href = ("http://practicasdeverano.itam.mx/");
          window.location.href = ("./empresa.html");
      },function(error){
          console.log(error.errorMessage);
      });
    });

  
   
});