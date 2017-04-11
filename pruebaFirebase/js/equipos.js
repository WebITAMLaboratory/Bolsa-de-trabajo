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
        console.log('user');

        firebase.database().ref("/userProyectos/").once('value').then(function(snep){
          var nf = 0;
          var equipof = 1;
          var ne = 0;
          var equipoe = 1;
          var ni = 0;
          var equipoi = 1;
            snep.forEach(function(childSnep){
              var proyectoss =childSnep.val();
              var proyectosid = [];
              var proyectos = [];
              var tipos = [];
              var area = [];
              var cu;
              var nombre;
              var mail;
              var telefono;
              var carrera;
              proyectosid.push(proyectoss.Proyecto1);
              proyectosid.push(proyectoss.Proyecto2);
              proyectosid.push(proyectoss.Proyecto3);

              primerProyecto();
                

                function primerProyecto(){
                  firebase.database().ref("/proyectos/"+proyectosid[0]+"/").once('value').then(function(snap){
                    var num = snap.val().Tipo;
                    tipos.push(snap.val().Tipo);
                    proyectos.push(snap.val().Nombre);
                    area.push(snap.val().Area);
                    segundoProyecto(tipos,proyectos,area);
                  });
                };

                function segundoProyecto(tipos,proyectos,area){
                    firebase.database().ref("/proyectos/"+proyectosid[1]+"/").once('value').then(function(snap){
                      var num = snap.val().Tipo;
                      tipos.push(snap.val().Tipo);
                      proyectos.push(snap.val().Nombre);
                      area.push(snap.val().Area);
                      tercerProyecto(tipos,proyectos,area);
                    });
                };

                function tercerProyecto(tipos,proyectos,area){
                    firebase.database().ref("/proyectos/"+proyectosid[2]+"/").once('value').then(function(snap){
                      var num = snap.val().Tipo;
                      tipos.push(snap.val().Tipo);
                      proyectos.push(snap.val().Nombre);
                      area.push(snap.val().Area);
                      nombreAlumno(tipos,proyectos,area);
                    });
                };

                function nombreAlumno(tipos,proyectos,area){
                  firebase.database().ref("/alumnos/"+childSnep.key+"/").once('value').then(function(snap){
                    cu = snap.val().CU;
                    nombre = snap.val().Nombre;
                    mail = snap.val().Email;
                    telefono = snap.val().Telefono;
                    carrera = snap.val().Carrera;
                    creaTabla(tipos,proyectos,area,cu,nombre,mail,telefono,carrera);
                  });
                };

              function creaTabla(tipos,proyectos,area,cu,nombre,mail,telefono,carrera){
                  
              
              var tipo = tipos.join(';')
              var caso = "";
              if(tipo.indexOf("Financiero") != -1)
              {
                caso = "Financiero";
                nf ++;
              }
              else if(tipo.indexOf("Estratégico") != -1)
              {
                caso = "Estrategico";
                ne ++;
              }
              else
              {
                caso = "Ingenieril";
                ni ++;
              }
              switch(caso)
              {
                // FINANCIERO ==================================================================================================
                case "Financiero":
                  if(nf <= 4)
                  {
                      $("#equipof"+equipof).html( $("#equipof"+equipof).html() + '<div class="tg-wrap"><table class="tg">'+
                                                                        '  <tr>' +
                                                                        '    <th class="tg-031e">'+cu+'</th> '+
                                                                        '    <th class="tg-yw4l">'+nombre+'</th> '+
                                                                        '    <th class="tg-yw4l">'+carrera+'</th> '+
                                                                        '    <th class="tg-yw4l">'+mail+'</th> '+
                                                                        '    <th class="tg-yw4l">'+telefono+'</th> '+
                                                                        '    <th class="tg-yw4l">'+proyectos[0]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+area[0]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+proyectos[1]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+area[1]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+proyectos[2]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+area[2]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+caso+'</th> '+
                                                                        '  </tr>'+
                                                                        '</table></div>'
                                                                        );
                  }
                  else
                  {
                    nf = 1;
                    equipof ++;
                    $("#Financiero").html( $("#Financiero").html() + '<div class="w3-card-4 w3-mobile w3-padding w3-white" id="equipof'+equipof+'" >'+
                                                                        '<header class="w3-container w3-teal w3-center">'+
                                                                          '<h3> Equipo_'+ equipof + 
                                                                          '</h3>'+
                                                                        ' </header>' +
                                                                        '<div class="tg-wrap"><table class="tg">'+
                                                                        '  <tr>' +
                                                                        '    <th class="tg-031e">'+cu+'</th> '+
                                                                        '    <th class="tg-yw4l">'+nombre+'</th> '+
                                                                        '    <th class="tg-yw4l">'+carrera+'</th> '+
                                                                        '    <th class="tg-yw4l">'+mail+'</th> '+
                                                                        '    <th class="tg-yw4l">'+telefono+'</th> '+
                                                                        '    <th class="tg-yw4l">'+proyectos[0]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+area[0]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+proyectos[1]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+area[1]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+proyectos[2]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+area[2]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+caso+'</th> '+
                                                                        '  </tr>'+
                                                                        '</table></div></div>'
                                                                        );
                  }
                break;
                // ESTRATEGICO ==================================================================================================
                case "Estrategico":
                  if(ne <= 4)
                  {
                      $("#equipoe"+equipoe).html( $("#equipoe"+equipoe).html() + '<div class="tg-wrap"><table class="tg">'+
                                                                        '  <tr>' +
                                                                        '    <th class="tg-031e">'+cu+'</th> '+
                                                                        '    <th class="tg-yw4l">'+nombre+'</th> '+
                                                                        '    <th class="tg-yw4l">'+carrera+'</th> '+
                                                                        '    <th class="tg-yw4l">'+mail+'</th> '+
                                                                        '    <th class="tg-yw4l">'+telefono+'</th> '+
                                                                        '    <th class="tg-yw4l">'+proyectos[0]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+area[0]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+proyectos[1]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+area[1]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+proyectos[2]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+area[2]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+caso+'</th> '+
                                                                        '  </tr>'+
                                                                        '</table></div>'
                                                                        );
                  }
                  else
                  {
                    ne = 1;
                    equipoe ++;
                    $("#Estrategico").html( $("#Estrategico").html() + '<div class="w3-card-4 w3-mobile w3-padding w3-white" id="equipoe'+equipoe+'" >'+
                                                                        ' <header class="w3-container w3-teal w3-center">'+
                                                                          '<h3> Equipo_'+ equipoe + 
                                                                          '</h3>'+
                                                                        ' </header>' +
                                                                        '<div class="tg-wrap"><table class="tg">'+
                                                                        '  <tr>' +
                                                                        '    <th class="tg-031e">'+cu+'</th> '+
                                                                        '    <th class="tg-yw4l">'+nombre+'</th> '+
                                                                        '    <th class="tg-yw4l">'+carrera+'</th> '+
                                                                        '    <th class="tg-yw4l">'+mail+'</th> '+
                                                                        '    <th class="tg-yw4l">'+telefono+'</th> '+
                                                                        '    <th class="tg-yw4l">'+proyectos[0]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+area[0]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+proyectos[1]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+area[1]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+proyectos[2]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+area[2]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+caso+'</th> '+
                                                                        '  </tr>'+
                                                                        '</table></div></div>'
                                                                        );
                  }
                break;
                // INGENIERIL ==================================================================================================
                case "Ingenieril":
                  if(ni <= 4)
                  {
                      $("#equipoi"+equipoi).html( $("#equipoi"+equipoi).html() + '<div class="tg-wrap"><table class="tg" >'+
                                                                        '  <tr>' +
                                                                        '    <th class="tg-031e">'+cu+'</th> '+
                                                                        '    <th class="tg-yw4l">'+nombre+'</th> '+
                                                                        '    <th class="tg-yw4l">'+carrera+'</th> '+
                                                                        '    <th class="tg-yw4l">'+mail+'</th> '+
                                                                        '    <th class="tg-yw4l">'+telefono+'</th> '+
                                                                        '    <th class="tg-yw4l">'+proyectos[0]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+area[0]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+proyectos[1]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+area[1]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+proyectos[2]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+area[2]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+caso+'</th> '+
                                                                        '  </tr>'+
                                                                        '</table></div>'
                                                                        );
                  }
                  else
                  {
                    ni = 1;
                    equipoi ++;
                    $("#Ingenieril").html( $("#Ingenieril").html() + '<div class="w3-card-4 w3-mobile w3-padding w3-white" id="equipoi'+equipoi+'">'+
                                                                        '<header class="w3-container w3-teal w3-center">'+
                                                                          '<h3> Equipo_'+ equipoi + 
                                                                          '</h3>'+
                                                                        ' </header>' +
                                                                        '<div class="tg-wrap"><table class="tg">'+
                                                                        '  <tr>' +
                                                                        '    <th class="tg-031e">'+cu+'</th> '+
                                                                        '    <th class="tg-yw4l">'+nombre+'</th> '+
                                                                        '    <th class="tg-yw4l">'+carrera+'</th> '+
                                                                        '    <th class="tg-yw4l">'+mail+'</th> '+
                                                                        '    <th class="tg-yw4l">'+telefono+'</th> '+
                                                                        '    <th class="tg-yw4l">'+proyectos[0]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+area[0]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+proyectos[1]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+area[1]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+proyectos[2]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+area[2]+'</th> '+
                                                                        '    <th class="tg-yw4l">'+caso+'</th> '+
                                                                        '  </tr>'+
                                                                        '</table></div></div>'
                                                                        );
                  }
                break;
              };
              }
            });
        });


          

        

      } 
      else 
      {
        //window.location.href = ("http://practicasdeverano.itam.mx/");
        window.location.href = ("./admin.html");
    
      }
  });

$(document).ready(function(){
  //lOG OUT PROCESS =========================================================================
    $("#btnLogOut").click(function(){
      firebase.auth().signOut()
      .then(function(){
          //window.location.href = ("http://practicasdeverano.itam.mx/");
          window.location.href = ("./admin.html");
      },function(error){
          console.log(error.errorMessage);
      });
    });

});