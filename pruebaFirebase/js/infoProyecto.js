    

$(document).ready(function(){

   

});

//LLenado de base de datos

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
  	if(nom != null && nom != "")
  	{
  		nombre = nom;
  		res = true;
  	}
  	else
  	{
      res = false;
  		document.getElementById("txtErrorNombreProyecto").innerHTML = "Nombre de empresa invalido.";
  	}
  	//descripcion
  	if( des != null && des != "")
  	{
  		descripcion = des;
  		res = true == res;
  	}
  	else
  	{
      res = false;
  		document.getElementById("txtErrorDescripcion").innerHTML = "Debe llenar una Descripción.";
  	}
  	//area
  	if( are != null && are != "")
  	{
  		area = are;
  		res = true == res;
  	}
  	else
  	{
      res = false;
  		document.getElementById("txtErrorArea").innerHTML = "Escriba un Área valida";
  	}
    //perfil
    if( per != null && per != "")
    {
      perfil = per;
      res = true == res;
    }
    else
    {
      res = false;
      document.getElementById("txtErrorPerfil").innerHTML = "Escriba un perfil valido";
    }
    //vacantes
    if( vac != null && vac >= 0)
    {
      vacantes = vac;
      res = true == res;
    }
    else
    {
      res = false;
      document.getElementById("txtErrorVacantes").innerHTML = "Ingrese un numero de vacantes valido";
    }
     //sueldo
    if( sue != null && sue >= 0)
    {
      sueldo = sue;
      res = true == res;
    }
    else
    {
      res = false;
      document.getElementById("txtErrorSueldo").innerHTML = "Ingrese un sueldo valido";
    }
     //direccion
    if( dir != null && dir != "")
    {
      direccion = dir;
      res = true == res;
    }
    else
    {
      res = false;
      document.getElementById("txtErrorDireccion").innerHTML = "Ingrese un a dirección valida";
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
             window.location.href = ("homeEmpresa.html");           
    }, function(error) {
      // An error happened.
      console.log(error.message);
    });
		
  	}
  		
};
  
