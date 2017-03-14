
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
      



// ON CHANGE CARRERA ===================================================================================
function displayCarrera(){
  
        
    /*
    var licenciaturas = ['Actuaría','Administración','Ciencia Política','Contaduría Pública y Estrategia Financiera',
    'Derecho','Dirección Financiera','Economía','Matemáticas Aplicadas','Relaciones Internacionales','Ingeniería en Computación',
    'Ingeniería en Mecatrónica','Ingeniería en Negocios','Ingeniería en Telecomunicaciones','Ingeniería en Telemática',
    'Ingeniería Industrial'];
    */

    var licenciaturas = ['Administración','Contaduría Pública y Estrategia Financiera',
    'Dirección Financiera','Ingeniería en Computación',
    'Ingeniería en Mecatrónica','Ingeniería en Negocios','Ingeniería en Telecomunicaciones','Ingeniería en Telemática',
    'Ingeniería Industrial'];
    

        
    /*
    var planesConjuntos = ['Administración y Actuaría','Actuaría y Dirección Financiera','Actuaría y Matemáticas Aplicadas',
    'Administración y Contaduría Pública y Estrategia Financiera','Administración y Dirección Financiera','Administración y Relaciones Internacionales',
    'Administración e Ing. en Computación','Administración e Ing. Industrial','Contaduría Pública y Actuaría','Contaduría Pública y Derecho',
    'Contaduría Pública y Dirección Financiera','Contaduría Pública e Ing. Industrial','Derecho y Ciencia Política','Derecho y Relaciones Internacionales',
    'Economía y Administración','Economía y Ciencia Política','Economía y Derecho','Economía y Dirección Financiera','Economía y Matemáticas Aplicadas',
    'Economía y Relaciones Internacionales','Economía e Ing. en Negocios','Relaciones Internacionales y Ciencia Política','Ing. en Computación y Matemáticas Aplicadas',
    'Ing. en Computación e Ing. Industrial','Ing. en Mecatrónica e Ing. en Computación','Ing. en Mecatrónica e Ing. Industrial','Ing. en Negocios y Administración',
    'Ing. en Negocios y Dirección Financiera','Ing. en Negocios e Ing. en Computación','Ing. en Negocios e Ing. Industrial','Ing. en Negocios e Ing. en Telecomunicaciones',
    'Ing. en Telecomunicaciones e Ing. en Computación','Ing. en Telecomunicaciones e Ing. en Mecatrónica','Ing. en Telecomunicaciones y Matemáticas Aplicadas'];
    */
    
    var planesConjuntos = ['Administración y Actuaría','Actuaría y Dirección Financiera',
    'Administración y Contaduría Pública y Estrategia Financiera','Administración y Dirección Financiera','Administración y Relaciones Internacionales',
    'Administración e Ing. en Computación','Administración e Ing. Industrial','Contaduría Pública y Actuaría','Contaduría Pública y Derecho',
    'Contaduría Pública y Dirección Financiera','Contaduría Pública e Ing. Industrial',
    'Economía y Administración','Economía y Dirección Financiera',
    'Economía e Ing. en Negocios','Ing. en Computación y Matemáticas Aplicadas',
    'Ing. en Computación e Ing. Industrial','Ing. en Mecatrónica e Ing. en Computación','Ing. en Mecatrónica e Ing. Industrial','Ing. en Negocios y Administración',
    'Ing. en Negocios y Dirección Financiera','Ing. en Negocios e Ing. en Computación','Ing. en Negocios e Ing. Industrial','Ing. en Negocios e Ing. en Telecomunicaciones',
    'Ing. en Telecomunicaciones e Ing. en Computación','Ing. en Telecomunicaciones e Ing. en Mecatrónica','Ing. en Telecomunicaciones y Matemáticas Aplicadas'];

  //Display Licenciaturas  
  if($("#licenciatura").is(':checked'))
  {  
    $("#Carrera").empty();
    $("#Carrera").append('<select class="w3-select" data-placeholder="Choose a Carrer..." id ="Career" > </select>')
    licenciaturas.forEach(function(item,index){
      $("#Career").append('<option class="valorOption'+index+'">'+item+'</option>');
    });
  }
  //Display Planes Conjuntos
  if($("#planConjunto").is(':checked'))
  {  
    $("#Carrera").empty();
    $("#Carrera").append('<select class="w3-select" data-placeholder="Choose a Joint plan..." id ="Career" > </select>')
    planesConjuntos.forEach(function(item,index){
      $("#Career").append('<option class="valorOption'+index+'">'+item+'</option>');
    });
  }
};

// ON CHANGE IDIOMA ======================================================================================
function displayIdioma(){
  var strIdioma = $("#selectAlumIdiomas :selected").text().trim();
  $("#txtIdiomaNivel").append('<p><span class="w3-closebtn w3-left" onClick="remueveme(this)">&times;</span><select class="w3-select idiomas" data-placeholder="Choose a Level..." id="'+strIdioma+'" required><option class="valorOption1" selected>Basico</option><option class="valorOption2">Intermedio</option><option class="valorOption3">Avanzado</option></select> <label class="w3-label w3-validate">Nivel de '+strIdioma+'</label></p>');
};

// ON REMOVE IDIOMA ======================================================================================
function remueveme(element){
  padre = $(element).parent();
  padre.remove($(element).attr("id"));
}

// ON FINISHED FORM ======================================================================================
function idiomas(){
  // CREATE IDIOMAS ARRAY
  var res = "";
  var idiomas = $("select[class~='idiomas']");
  
  
  for (i = 0; i < idiomas.length;i++){
    var id  = $(idiomas[i]).attr("id");
    var lvl = $("#"+ id +" option:selected").text();
    var str = id+","+lvl+";";
    res += str;
  }
    var nom = $("#txtAlumNom").val();
    var cU = $("#txtAlumCU").val();
    var tel = $("#txtAlumTel").val();
    var semestre = $("#txtAlumSem").val();
    var interes = $("#txtAlumInteres1").val();
    var interes2 = $("#txtAlumInteres2").val();
    var interes3 = $("#txtAlumInteres3").val();
    var areaInteres = $("#txtAlumArea1").val();
    var areaInteres2 = $("#txtAlumArea2").val();
    var areaInteres3 = $("#txtAlumArea3").val();
    var car = $("#Career option:selected").val();

    llenaAlumno(nom,cU,tel,car,semestre,interes,areaInteres, interes2,areaInteres2, interes3,areaInteres3, res);

  
};

// ON LLENAR ALUMNO =======================================================================================

function llenaAlumno(nom,cU,tel,car,semestre,interes,areaInteres, interes2,areaInteres2, interes3,areaInteres3, idiomas){

  var res = false;
  var nombre;
  var claveU;
  var telefono;
  var carrera;
  var semestreAprox;
  var empresaInteres;
  var alumArea1;
  var empresaInteres2;
  var alumArea2;
  var empresaInteres3;
  var alumArea3;
  var idiom;

    // nombre alumno
    if(nom.trim())
    {
      nombre = nom;
      res = true;
    }
    else
    { 
      $("#txtErrorAlumNom").text("Nombre del alumno invalido");
      res = false;
    }
    //Clave unica
    if(cU.trim())
    {
      claveU = cU;
      res = true == res;
    }
    else
    {
      $("#txtErrorAlumCU").text("Clave unica invalida");
      res = false;
    }
    //número de alumno
    if(tel.trim())
    {
      telefono = tel;
      res = true == res;
    }
    else
    {
      $("#txtErrorAlumTel").text("Ingresa un número valido, solo números");
      res = false;
    }
    //carrera
    if(car.trim())
    {
      carrera = car;
      res = true == res;
    }
    else
    {
      $("#txtErrorAlumCarrera").text("Seleciona una carrera");
      res = false;
    }
    //semestre aproximado
    if(semestre >= 5 && semestre.trim())
    {
      semestreAprox =semestre;
      res = true == res;
    }
    else
    {
      $("#txtErrorAlumSem").text("Ingresa un semestre mayor a 5");
      res = false;
    }
    //Empresa interes
    if(interes.trim())
    {
      empresaInteres =interes;
      res = true == res;
    }
    else
    {
      $("#txtErrorAlumInteres").text("Ingresa tu empresa de interes");
      res = false;
    }
    if(areaInteres.trim())
    {
      alumArea1 =areaInteres;
      res = true == res;
    }
    else
    {
      $("#txtErrorAlumArea").text("Ingresa tu Area de interes");
      res = false;
    }
    if(interes2.trim())
    {
      empresaInteres2 =interes2;
      res = true == res;
    }
    else
    {
      $("#txtErrorAlumInteres2").text("Ingresa tu empresa de interes");
      res = false;
    }
    if(areaInteres2.trim())
    {
    alumArea2 =areaInteres2;
      res = true == res;
    }
    else
    {
      $("#txtErrorAlumArea2").text("Ingresa tu Area de interes");
      res = false;
    }
    if(interes3.trim())
    {
      empresaInteres3 =interes3;
      res = true == res;
    }
    else
    {
      $("#txtErrorAlumInteres3").text("Ingresa tu empresa de interes");
      res = false;
    }
    if(areaInteres3.trim())
    {
    alumArea3 =areaInteres3;
      res = true == res;
    }
    else
    {
      if(res){$("#txtErrorAlumArea3").text("Ingresa tu empresa de interes");}
      res = false;
    }
     // Idiomas
    if(idiomas.trim() && idiomas.indexOf("English") != -1 && idiomas.indexOf("Spanish") != -1)
    {
      idiom = idiomas;
      res = true == res;
    }
    else
    {
      $("#txtErrorAlumIdiomas").text("Se necesitan Ingles y Español para proceder");
      res = false;
    }


    if(res)
    {
      var uid = firebase.auth().currentUser.uid;
      var email = firebase.auth().currentUser.email;
      var urlAlum = "/alumnos/" + uid + "/";
      var urlUsers = "/users/" + uid + "/";
      

      firebase.auth().currentUser.updateProfile({
        displayName: nombre
      }).then(function() {
      // Update successful.
      firebase.database().ref(urlAlum).set({
        Nombre: nombre,
        Email : email,
        CU: claveU,
        Telefono: telefono,
        Carrera: carrera,
        Semestre: semestre,
        Empresa1: empresaInteres,
        AreaInteres1: alumArea1,
        Empresa2: empresaInteres2,
        AreaInteres2: alumArea2,
        Empresa3: empresaInteres3,
        AreaInteres3: alumArea3,
        Idiomas: idiom
      }).then(function(){
       firebase.database().ref(urlUsers).set({
        Tipo : "Alumno",
        Registro : "true",
        Nombre : nombre,
        CV : "false"
      }).then(function(){
        firebase.auth().currentUser.sendEmailVerification().then(function(){
         //window.location.href = ("http://practicasdeverano.itam.mx/html/verificacion.html");
          emailjs.init("user_4L7hlqEtSFWFsS3Yus8HW");
          emailjs.send("default_service","template_65hEieUm",{to_name: "Emiliano", message_html:"usuario:{ \n "+  

                  nombre + " \n"+ email + " \n"+ claveU+ " \n"+ telefono+ " \n"+ carrera+ " \n"+ semestre+ " \n"+ empresaInteres+ " \n"+ alumArea1+ " \n"+ empresaInteres2+ " \n"+ alumArea2+ " \n"+ empresaInteres3+ " \n"+ alumArea3+ " \n"+ idiom 
            +"\n}"});
         window.location.href = ("./verificacion.html");
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
          window.location.href = ("./homeAlumno.html");
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
                window.location.href = ("./verificacion.html");
              }
            }
            else
            {
              //user has not filled form
              //window.location.href = ("http://practicasdeverano.itam.mx/html/mainAlumno.html");
              //window.location.href = ("./mainAlumno.html");
            }
          });
        }
      } 
      else 
      {
             
        //window.location.replace("http://practicasdeverano.itam.mx/");
          window.location.href = ("../index.html");
          
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

});





