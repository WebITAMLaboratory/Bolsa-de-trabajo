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

// GLOBAL FUNCTIONS ============================================================================
//==============================================================================================
    
    // ON CREAR PROYECTO ======================================================
    function creaProyecto(){
        var nom = $("#txtNombreProyecto").val();
        var des = $("#txtDescripcion").val();
        var are = $("#txtArea").val();
        var per = $("#txtPerfil").val();
        var vac = $("#txtVacantes").val();
        var sue = $("#txtSueldo").val();
        var dir = $("#txtDireccion").val();

        //Borrando mensajes de error
        $("#txtErrorNombreProyecto").text("");
        $("#txtErrorDescripcion").text("");
        $("#txtErrorArea").text("");
        $("#txtErrorPerfil").text("");
        $("#txtErrorVacantes").text("");
        $("#txtErrorSueldo").text("");
        $("#txtErrorDireccion").text("");

        llenaProyecto(nom,des,are,per,vac,sue,dir);
    };

    // ON LLENAR PROYECTO =====================================================
    function llenaProyecto(nom,des,are,per,vac,sue,dir){
        var res = false;
        var nombre;
        var descripcion;
        var area;
        var perfil;
        var vacante;
        var sueldo;
        var direccion;

        // nombre empresa
    if(nom.trim())
    {
        nombre = nom;
        res = true;
    }
    else
    {
        $("#txtErrorNombreProyecto").text("Nombre de empresa invalido.");
        res = false;
    }
    //descripcion
    if(des.trim())
    {
        descripcion = des;
        res = true == res;
    }
    else
    {
        $("#txtErrorDescripcion").text("Debe llenar una Descripción.");
        res = false;
    }
    //area
    if( are.trim())
    {
        area = are;
        res = true == res;
    }
    else
    {
        $("#txtErrorArea").text("Escriba un Área valida");
        res = false;
    }
    //perfil
    if( per.trim())
    {
      perfil = per;
      res = true == res;
    }
    else
    {
        $("#txtErrorPerfil").text("Escriba un perfil valido");
        res = false;
    }
    //vacantes
    if( vac >= 0 && vac.trim())
    {
      vacantes = vac;
      res = true == res;
    }
    else
    {
        $("#txtErrorVacantes").text("Ingrese un numero de vacantes valido");
        res = false;
    }
     //sueldo
    if( sue >= 8000 && sue.trim())
    {
      sueldo = sue;
      res = true == res;
    }
    else
    {
        $("#txtErrorSueldo").text("Ingrese un sueldo valido mayor a $8000");
        res = false;
    }
     //direccion
    if( dir.trim())
    {
      direccion = dir;
      res = true == res;
    }
    else
    {
        $("#txtErrorDireccion").text("Ingrese un a dirección valida");
        res = false;
    }

    if(res)
    {
        var uid = firebase.auth().currentUser.uid;
        const urlEmpresa = "/empresas/" + uid + "/Proyectos/";
        const urlUsers = "/users/" + uid + "/";
     
        
      var key = firebase.database().ref(urlEmpresa).push(
        {
         Nombre : nombre 
        }).key;
      const urlProyecto = "/proyectos/" + key + "/";
       firebase.database().ref(urlProyecto).set({
            Empresa: firebase.auth().currentUser.displayName,
            Nombre: nombre,
            Descripcion : descripcion,
            Area: area,
            Perfil: perfil,
            Vacantes: vacantes,
            Sueldo: sueldo,
            Direccion: direccion,
            Validado: "false"
        }).then(function(){
             window.location.href = ("./homeEmpresa.html");           
    }, function(error) {
      // An error happened.
      console.log(error.message);
    });
        
    }
};

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

// GLOBAL FUNCTIONS  END ============================================================================
//===================================================================================================



$( document ).ready(function() {
    
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

    // ON REGRESAR ============================================================================
    $("#btnRegresar").click(function(){
        //window.location.replace("http://practicasdeverano.itam.mx/html/homeEmpresa.html");
        window.location.href = ("./homeEmpresa.html");
    });

});
