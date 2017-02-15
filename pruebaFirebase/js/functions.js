	

	//email validation
	function ValidateEmail(mail) 
	{
	 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail))
	  {
	    return (true)
	  }
	    return (false)
	} 

    //LOGIN
	function loginAlumno(email,password){

		var mail = email;
		var pass = password;
		
		if( mail != null && password != null )
		{	
			if(ValidateEmail(mail))
			{
				firebase.auth().signInWithEmailAndPassword(mail, pass)
				.then(function(){
					console.log("========== Login Succesfull! ========== \n ----- Welcome : " + mail);
				})
				.catch(function(error) {
				   // Handle Errors here.
				   var errorCode = error.code;
				   var errorMessage = error.message;
				   console.log(errorCode + "\n" + errorMessage);
				   console.log("========== ERROR COULD NOT LOGIN ==========");
				   document.getElementById("txtErrorLogin").innerHTML = errorMessage;
				   // ...
				 });
			}
			else
			{
				document.getElementById("txtErrorLogin").innerHTML = "No se aceptan caracteres especiales en el mail";
				console.log("Please enter Email and Password");
			}
			
		}
		else
		{
			document.getElementById("txtErrorLogin").innerHTML = "El email y la contraseña son requeridos";
			console.log("Please enter Email and Password");
		}
	};


	// REGISTER ALUMNO
	function registerAlumno(email,password){

		var mail = email;
		var pass = password;
		//  ============================= HACER EL REGISTER PARA DOMINIOS DE EMEPRESA ======================
		//  ============================= CREAR UNA BASE DE DATOS PARA CADA UNO DE ELLOS ===================
		//
		if(mail.includes('itam.mx'))
		{
			if( mail != null && password != null)
			{	
				if(ValidateEmail(mail))
				{
					firebase.auth().createUserWithEmailAndPassword(mail, pass)
					.then(function(){
						console.log(" ----- Register Complete \n");
					})
					.catch(function(error) {
			   		// Handle Errors here.
			    	var errorCode = error.code;
			    	var errorMessage = error.message;
			    	// ...
			    	console.log(errorCode + "\n" + errorMessage);
			    	console.log("========== ERROR COULD NOT REGISTER ==========");
			    	document.getElementById("txtError").innerHTML = errorMessage;
			    	});
			    }
			    else
				{
				document.getElementById("txtError").innerHTML = "No se aceptan caracteres especiales en el mail";
				console.log("Please enter Email and Password");
				} 
			}
			else
			{
				console.log("Please enter Email and Password");
			}
		}
		else
		{
			document.getElementById("txtError").innerHTML = "Solo correos correo@itam.mx";
			console.log("========== ERROR COULD NOT REGISTER ==========");
		}
	};

	// REGISTER EMPRESA
	function registerEmpresa(email,password){

		var mail = email;
		var pass = password;
		//  ============================= HACER EL REGISTER PARA DOMINIOS DE EMEPRESA ======================
		//  ============================= CREAR UNA BASE DE DATOS PARA CADA UNO DE ELLOS ===================
		//
			if( mail != null && password != null)
			{
				if (ValidateEmail(mail))
				{
					firebase.auth().createUserWithEmailAndPassword(mail, pass)
					.then(function(){
						console.log(" ----- Register Complete \n");
					})
					.catch(function(error) {
			   		// Handle Errors here.
			    	var errorCode = error.code;
			    	var errorMessage = error.message;
			    	// ...
			    	console.log(errorCode + "\n" + errorMessage);
			    	console.log("========== ERROR COULD NOT REGISTER ==========");
			    	document.getElementById("txtError").innerHTML = errorMessage;
			    	});
			    }
			    else
				{	
				document.getElementById("txtError").innerHTML = "No se aceptan caracteres especiales en el mail";
				console.log("Please enter Email and Password");
				} 
			}
			else
			{
				console.log("Please enter Email and Password");
			}
	};

	//Sign OUT
	function signOut(){
		firebase.auth().signOut()
		.then(function()
		{
			console.log("Sign Out!");
			const location = (window.location.href);
			const last = (window.location.href).lastIndexOf("/html");
			window.location.replace(location.substr(0,last) + "/index.html");
		}, function(error)
		{
			console.log(" ========== Coud not Sign Out! ==========");
		  // An error happened.
		});
	}

	//ON LOGIN OR LOGOUT
	firebase.auth().onAuthStateChanged(function(user) {
		  if (user)
		  {	
		  	firebase.database().ref().once("value").then(function(snapchot){
					var a = snapchot.numChildren();
				});
		  	console.log("hay usuario activo");
		  	const email = firebase.auth().currentUser.email;

		  	if(firebase.auth().currentUser.emailVerified)
		  	{
			  	if ((email).includes("@itam.mx"))
			  	{
					
				    window.location.replace("http://practicasdeverano.itam.mx/html/homeAlumno.html");
			  	}
			  	else
			  	{
					 window.location.replace("http://practicasdeverano.itam.mx/html/homeEmpresa.html");
			  	}  
		  	}
		  	else
		  	{
		  		const userId = firebase.auth().currentUser.uid;
		  		var form = false;
				
				if(form)
				{
					window.location.href = ("http://practicasdeverano.itam.mx/html/verificacion.html");
				}
				else
				{
						if ((window.location.href).includes("index.html") || (window.location.href === "https://uboat46.com/pruebaFirebase/"))
					  	{
							const location = (window.location.href).replace("/index.html","");
						    window.location.href = (location + "/html/mainAlumno.html");
					  	}
					  	if ((window.location.href).includes("empresa.html"))
					  	{
							const location = (window.location.href).replace("/empresa.html","");
						    window.location.href = (location + "/mainEmpresa.html");
					  	}
				}
		  	}
		  
		  } 
		  else 
		  {
		  	console.log("no hay usuario");
		  	if ((window.location.href).includes("mainAlumno.html"))
		  	{
				const location = (window.location.href).replace("/html/mainAlumno.html","");
			    window.location.replace(location + "/index.html");
		  	}
		  	if ((window.location.href).includes("mainEmpresa.html"))
		  	{
				const location = (window.location.href).replace("/mainEmpresa.html","");
			    window.location.replace(location + "/empresa.html");
		  	}     
		  }
	});

