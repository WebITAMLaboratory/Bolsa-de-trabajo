
//LLenado de base de datos

function llenaEmpresa(nom,contacto,tel,numVac,sueldoAprox){
  	
  	var res = false;
  	var nombre;
  	var cont;
  	var telefono;
  	var  vacantes;
  	var  sueldo;
  	// nombre empresa
  	if(nom != null)
  	{
  		nombre = nom;
  		res = true;
  	}
  	else
  	{
  		document.getElementById("txtEmpresaNom").innerHTML = "Nombre de empresa invalido";
  	}
  	//nombre de contacto
  	if( contacto != null)
  	{
  		cont = contacto;
  		res = true == res;
  	}
  	else
  	{
  		document.getElementById("txtEmpresaContacto").innerHTML = "Nombre de Contacto Invalido";
  	}
  	//número de contacto
  	if( tel != null)
  	{
  		telefono = tel;
  		res = true == res;
  	}
  	else
  	{
  		document.getElementById("txtEmpresaTel").innerHTML = "Ingresa un número valido, solo números";
  	}
  	//num de vacantes
  	if( numVac != null && numVac >= 0)
  	{
  		vacantes = numVac;
  		res = true == res;
  	}
  	else
  	{
  		document.getElementById("txtEmpresaVac").innerHTML = "Ingresa un número de vacantes valido, mayor o igual a 0";
  	}
  	//sueldo aproximado
  	if( sueldoAprox != null && sueldoAprox >= 0)
  	{
  		sueldo = sueldoAprox;
  		res = true == res;
  	}
  	else
  	{
  		document.getElementById("txtEmpresaSueldo").innerHTML = "Ingresa un sueldo aproximado sin SIGNO DE MONEDA";
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
		    		Telefono: telefono,
		    		Vacantes: vacantes,
		    		Sueldo: sueldo
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
		}, function(error) {
		  // An error happened.
      console.log(error.message);
		});
		
  	}
  		
}
  
