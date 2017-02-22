
//LLenado de base de datos

function llenaEmpresa(nom,contacto,tel){
  	
  	var res = false;
  	var nombre;
  	var cont;
  	var telefono;
  	// nombre empresa
  	if(nom != null && nom != "")
  	{
  		nombre = nom;
  		res = true;
  	}
  	else
  	{
      res = false;
  		document.getElementById("txtEmpresaNom").innerHTML = "Nombre de empresa invalido";
  	}
  	//nombre de contacto
  	if( contacto != null && contacto != "")
  	{
  		cont = contacto;
  		res = true == res;
  	}
  	else
  	{
      res = false;
  		document.getElementById("txtEmpresaContacto").innerHTML = "Nombre de Contacto Invalido";
  	}
  	//número de contacto
  	if( tel != null && tel != "")
  	{
  		telefono = tel;
  		res = true == res;
  	}
  	else
  	{
      res = false;
  		document.getElementById("txtEmpresaTel").innerHTML = "Ingresa un número valido, solo números";
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
                const location = (window.location.href).replace("/mainEmpresa.html","");
                window.location.href = (location + "/verificacion.html");
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
  
