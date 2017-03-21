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
        var tipos = [];
        console.log('user');
        var proyectos = $("#proyectos");
        var userId = firebase.auth().currentUser.uid;
        firebase.database().ref("/alumnos/" + userId + "/").once('value').then(function(snapshot) {
          var username = snapshot.val().Nombre;
          $("#nomAlumno").text(username);
        });
        firebase.database().ref("/userProyectos/"+userId + "/").once('value').then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            firebase.database().ref("/proyectos/"+childSnapshot.val()+"/").once('value').then(function(snap){
              tipos.push(snap.val().Tipo);
              $("#proyectos").html( $("#proyectos").html() + '<div class="w3-card-4 w3-mobile w3-padding w3-grey">' +
                                                        '<header class="w3-container w3-teal w3-center">'+
                                                          '<h1>'+ snap.val().Nombre +' - ' + //childSnapshot.val().Empresa + 
                                                          '</h1>'+
                                                        ' </header>' +
                                                        '<div class="w3-container w3-white">'+
                                                          '<p>'+ 
                                                            '<h5>Descripción:</h5><br>' + snap.val().Descripcion +
                                                            '<br><h5>Perfil Buscado:</h5><br>' + snap.val().Perfil +
                                                            '<br><h5>Área De trabajo:</h5><br>' + snap.val().Area +
                                                            '</p>'+
                                                          '</div>'+
                                                          '<footer class="w3-container w3-teal">'+
                                                            '<h5>'+
                                                              'Vacantes: ' + snap.val().Vacantes+
                                                              '  Sueldo: $' + snap.val().Sueldo+
                                                            '</h5>'+
                                                            '<h5>'+
                                                              'Dirección: ' + snap.val().Direccion+
                                                            '</h5>'+
                                                          '</footer>'+
                                                      '</div>');

                var tipo = tipos.join(';')
                var caso = "";
                if(tipo.indexOf("Financiero") != -1)
                {
                  caso = "Financiero";
                }
                else if(tipo.indexOf("Estratégico") != -1)
                {
                  caso = "Estratégico";
                }
                else
                {
                  caso = "Ingenieril"
                }
                $("#CASO").text("Tipo de Caso - "+ caso);
                if(caso != "Ingenieril")
                {
                    $("#OFICINA").text("Pasa el 30 de Marzo a la oficina de Ana Maria Diaz Bonnet por tu caso, haz concluido la primer etapa.");
                }
                else
                {
                    $("#OFICINA").text("Pasa el 30 de Marzo a la oficina de Ana Lidia Franzoni por tu caso, haz concluido la primer etapa.");
                }
            });
          });
      
        


        }).then(function(){
        var tipo = tipos.join(';')
        var caso = "";
        if(tipo.indexOf("Financiero") != -1)
        {
          caso = "Financiero";
        }
        else if(tipo.indexOf("Estratégico") != -1)
        {
          caso = "Estratégico";
        }
        else
        {
          caso = "Ingenieril"
        }

        if(caso != "Ingenieril")
        {
          $("#proyectos").html( $("#proyectos").html() + '<div class="w3-card-4 w3-mobile w3-padding w3-grey">' +
                                                        '<header class="w3-container w3-teal w3-center">'+
                                                          '<h1 id="CASO"> Tipo de Caso - ' + caso + 
                                                          ' </h1>'+
                                                        ' </header>' +
                                                        '<div class="w3-container w3-white">'+
                                                          '<p>'+ 
                                                            '<h5 id="OFICINA">Dirigete a la oficina Contaduría por tu caso</h5>'+
                                                            '</p>'+
                                                        '</div>'+
                                                          '<footer class="w3-container w3-teal">'+
                                                          '</footer>'+
                                                      '</div>'
            );
        }
        else
        {
          $("#proyectos").html( $("#proyectos").html() + '<div class="w3-card-4 w3-mobile w3-padding w3-grey">' +
                                                        '<header class="w3-container w3-teal w3-center">'+
                                                          '<h1 id="CASO"> Tipo de Caso - ' + caso + 
                                                          ' </h1>'+
                                                        ' </header>' +
                                                        '<div class="w3-container w3-white">'+
                                                          '<p>'+ 
                                                            '<h5 id="OFICINA">Dirigete a la oficina Ingenería en Computación por tu caso</h5>'+
                                                            '</p>'+
                                                        '</div>'+
                                                          '<footer class="w3-container w3-teal">'+
                                                          '</footer>'+
                                                      '</div>'
            );
        }
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