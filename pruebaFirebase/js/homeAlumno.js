// Initialize Firebase
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
    apiKey: "AIzaSyByyIfhuIL9e0tvhwUqkGCWKcGBTGGBLO0",
    authDomain: "prueba-urgente.firebaseapp.com",
    databaseURL: "https://prueba-urgente.firebaseio.com",
    storageBucket: "prueba-urgente.appspot.com",
    messagingSenderId: "483313675253"
  };
  */

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
    var proyectos = $("#proyectos");
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref("/alumnos/" + userId + "/").once('value').then(function(snapshot) {
      var username = snapshot.val().Nombre;
      $("#nomAlumno").text(username);
    });
    firebase.database().ref("/proyectos/").once('value').then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        $("#proyectos").html( $("#proyectos").html() + '<div class="w3-card-4 w3-mobile w3-padding w3-grey">' +
          '<header class="w3-container w3-teal w3-center">'+
                                                          '<h1>'+ childSnapshot.val().Nombre +' - ' + //childSnapshot.val().Empresa + 
                                                          '</h1>'+
                                                          ' </header>' +
                                                          '<div class="w3-container w3-white">'+
                                                          '<p>'+ 
                                                          '<h5>Descripción:</h5><br>' + childSnapshot.val().Descripcion +
                                                          '<br><h5>Perfil Buscado:</h5><br>' + childSnapshot.val().Perfil +
                                                          '<br><h5>Área De trabajo:</h5><br>' + childSnapshot.val().Area +
                                                          '</p>'+
                                                          '</div>'+
                                                          '<footer class="w3-container w3-teal">'+
                                                          '<h5>'+
                                                          'Vacantes: ' + childSnapshot.val().Vacantes+
                                                          '  Sueldo: $' + childSnapshot.val().Sueldo+
                                                          '</h5>'+
                                                          '<h5>'+
                                                          'Dirección: ' + childSnapshot.val().Direccion+
                                                          '</h5>'+
                                                          '</footer>'+
                                                          '</div>');


      });
      
    });
  } 
  else 
  {
        //window.location.href = ("http://practicasdeverano.itam.mx/");
        window.location.href = ("../index.html");

      }
    });

 $(document).ready(function(){


  //lOG OUT PROCESS =========================================================================
  $("#btnLogOut").click(function(){
    firebase.auth().signOut()
    .then(function(){
          //window.location.href = ("http://practicasdeverano.itam.mx/");
          window.location.href = ("../index.html");
        },function(error){
          console.log(error.errorMessage);
        });
  });

});


var checaFile =false;
  //LISTEN FILE FOR THE SELECTION
  fileButton.addEventListener('change', function(e){
    var fup = document.getElementById('fileButton');
        var fileName = fup.value;
        var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
        if(ext == "pdf" )
        {
              //Get FILE
        const uploader = document.getElementById('uploader');
        var storage = firebase.storage();
        var file = e.target.files[0];
        //CREATE A STORAGE REF
        var storageRef =firebase.storage().ref('pdf_docs' + file.name);
        //UPLOAD FILE
        var task = storageRef.put(file);
      //UPDATE PROGRESS BAR
        task.on('state_changed',
        function progress(snapshot){
          var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          uploader.value = percentage;
        },
        function error(err){
        },
        function complete(){
        }
        );
        alert("Ok");
        checaFile = true;
        } 
        else
        {
        alert("Upload pdf files only");        
        }
});

  function CurriImg(){
    if (document.getElementById('CurriImg').style.display=='none') {
      document.getElementById('CurriImg').style.display='initial';
    }else{
      document.getElementById('CurriImg').style.display='none';
    }
    
  }

  function pasaHome(){
    if (checaFile) {
      document.getElementById('id01').style.display='none'
    }else
    {
      alert("Falta curriculum");
    }
  }