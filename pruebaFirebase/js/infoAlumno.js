



//LLenado de base de datos

function llenaAlumno(nom,cU,tel,car,semestre,interes, interes2, interes3){

 var res = false;
 var nombre;
 var claveU;
 var telefono;
 var carrera;
 var semestreAprox;
 var empresaInteres;
 var empresaInteres1;
 var empresaInteres2;

  	// nombre alumno
  	if(nom != null && nom != "")
  	{
  		nombre = nom;
  		res = true;
  	}
  	else
  	{
  		document.getElementById("txtAlumNom").innerHTML = "Nombre del alumno invalido";
  	}
  	//Clave unica
  	if( cU != null && cU != "")
  	{
  		claveU = cU;
  		res = true == res;
  	}
  	else
  	{
  		document.getElementById("txtAlumCU").innerHTML = "Clave unica invalida";
  	}
  	//número de alumno
  	if( tel != null && tel != "")
  	{
  		telefono = tel;
  		res = true == res;
  	}
  	else
  	{
  		document.getElementById("txtAlumTel").innerHTML = "Ingresa un número valido, solo números";
  	}
  	//carrera
  	if( car != null && car != "")
  	{
  	carrera = car;
  		res = true == res;
  	}
  	else
  	{
  		document.getElementById("txtAlumCarrera").innerHTML = "Ingresa una carrera valida";
  	}
  	//semestre aproximado
  	if(semestre != null && semestre != "" && semestre > 0)
  	{
  	semestreAprox =semestre;
  		res = true == res;
  	}
  	else
  	{
  		document.getElementById("txtAlumSem").innerHTML = "Ingresa unsemestre aproximado mayor de 0";
  	}
    //Empresa interes
    if(interes != null && interes != "")
    {
    empresaInteres =interes;
      res = true == res;
    }
    else
    {
      document.getElementById("txtAlumInteres1").innerHTML = "Ingresa tu empresa de interes";
    }
    if(interes != null && interes != "")
    {
    empresaInteres2 =interes2;
      res = true == res;
    }
    else
    {
      document.getElementById("txtAlumInteres2").innerHTML = "Ingresa tu empresa de interes";
    }
    if(interes != null && interes != "")
    {
    empresaInteres3 =interes3;
      res = true == res;
    }
    else
    {
      document.getElementById("txtAlumInteres3").innerHTML = "Ingresa tu empresa de interes";
    }


  	if(res)
  	{
  		var uid = firebase.auth().currentUser.uid;
  		var email = firebase.auth().currentUser.email;
  		const urlAlum = "/alumnos/" + uid + "/";
  		const urlUsers = "/users/" + uid + "/";
  		

      firebase.auth().currentUser.updateProfile({
        displayName: nombre
      }).then(function() {
		  // Update successful.
      firebase.database().ref(urlAlum).set({
        Nombre: nombre,
        Email : email,
        Contacto: claveU,
        Telefono: telefono,
        Carrera: carrera,
        Semestre: semestre,
        Empresa1: empresaInteres,
        Empresa2: empresaInteres2,
        Empresa3: empresaInteres3
      }).then(function(){
       firebase.database().ref(urlUsers).set({
        Tipo : "Alumno",
        Registro : "true",
        Nombre : nombre
      }).then(function(){
        firebase.auth().currentUser.sendEmailVerification().then(function(){
         const location = (window.location.href).replace("/mainAlumno.html","");
         window.location.href = (location + "/verificacion.html");
       })
      })
    })
    }, function(error) {
		  // An error happened.
      console.log(error.message);
    });

    }

  }
  
