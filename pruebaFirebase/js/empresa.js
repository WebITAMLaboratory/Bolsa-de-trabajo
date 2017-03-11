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

/*
var config = {
    apiKey: "AIzaSyAUByn-6VOe_6htTVEUyNZi9MRdTHg-Ew8",
    authDomain: "bolsadetrabajoitamdb.firebaseapp.com",
    databaseURL: "https://bolsadetrabajoitamdb.firebaseio.com",
    storageBucket: "bolsadetrabajoitamdb.appspot.com",
    messagingSenderId: "427953157462"
};
*/
firebase.initializeApp(config);

// GLOBAL FUNCTIONS ============================================================================
//==============================================================================================
	
	//EMAIL VERIFICATION ===================================================
	function ValidateEmail(mail) 
	{
	 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail))
	  {
	    return (true)
	  }
	    return (false)
	}

	// REGISTER ALUMNO ==================================================
	function registerEmpresa(email,password){

		var mail = email;
		var pass = password;
		var error = $("#txtError");
			if((mail.trim()) && (pass.trim()))
			{	

					if(ValidateEmail(mail))
					{
						firebase.auth().createUserWithEmailAndPassword(mail.trim(), pass.trim())
						.then(function(){
							alert("Registro exitoso");
						})
						.catch(function(error) {
					   		//Handle Errors here.
					    	var errorCode = error.code;
					    	var errorMessage = error.message;
					    	console.log(errorCode + "\n" + errorMessage);
					    	$("#txtError").text(errorMessage);
				    	});
				    }
				    else
					{
						error.text("Email invalido, vuelvelo a intentar");
						console.log("Please enter Email and Password");
					} 
			}
			else
			{
				error.text("");
				if(!mail.trim())
				{
					error.text("Registra un correo valido\n");
			    }
				if(!pass.trim()){
					error.text(error.text() + "Registra una contraseña valida");
				}
			}
	};

	//LOGIN Alumno ===============================================
	function loginEmpresa(email,password){

		var mail = email;
		var pass = password;
		var error = $("#txtErrorLogin");
		if((mail.trim()) && (pass.trim()))
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
					   $("#txtErrorLogin").text(errorMessage);
					 });
				}
				else
				{
					error.text("Email invalido, vuelvelo a intentar");
					console.log("Please enter Email and Password");
				}
		}
		else
		{
			error.text("");
				if(!mail.trim())
				{
					error.text("Ingresa un correo valido\n");
			    }
				if(!pass.trim()){
					error.text(error.text() + "Ingresa una contraseña valida");
				}
		}
	};

	//ON LOGIN OR LOGOUT =============================================================
	firebase.auth().onAuthStateChanged(function(user) {
		  if (user)
		  {	
		  	if(!firebase.auth().currentUser.emailVerified)
		  	{
		  		//window.location.replace("http://practicasdeverano.itam.mx/html/homeEmpresa.html");
		  		window.location.href = ("./homeEmpresa.html");
		  	}
		  	else
		  	{
		  		//get user id
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
							window.location.href = ("./verificacionEmpresa.html");
						}
						else
						{
							//window.location.href = ("http://practicasdeverano.itam.mx/html/mainEmpresa.html");
							window.location.href = ("./mainEmpresa.html");

						}
				    }
				    else
				    {
				    	//user has not filled form
				    	//window.location.href = ("http://practicasdeverano.itam.mx/html/mainEmpresa.html");
				    	window.location.href = ("./mainEmpresa.html");
				    }
				});
		  	}
		  } 
		  else 
		  {
		  	     
		  		console.log("No user");
          
		  }
	});

// GLOBAL FUNCTIONS  END ============================================================================
//===================================================================================================

$( document ).ready(function() {
	
	//ON REGISTER
	$("#btnRegister").click(function(){
		var email = $("#txtEmail").val();
		var password = $("#txtPassword").val();
		//register an alumni
		registerEmpresa(email,password);
	});

    //ON LOGIN
	$("#btnLogin").click(function(){
		var email = $("#txtEmailLogin").val();
		var password = $("#txtPasswordLogin").val();
		//login alumni
		loginEmpresa(email,password)
	});

});