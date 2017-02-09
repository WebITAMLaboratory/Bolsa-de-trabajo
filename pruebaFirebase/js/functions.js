
//LOGIN
function loginAlumno(email,password){

	var mail = email;
	var pass = password;
	
	if( mail != null && password != null)
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
		   // ...
		 });
	}
	else
	{
		console.log("Please enter Email and Password");
	}
};


// REGISTER ALUMNO
function registerAlumno(email,password){

	var mail = email;
	var pass = password;
	
	if( mail != null && password != null)
	{
		firebase.auth().createUserWithEmailAndPassword(mail, pass)
		.then(function(){
			console.log(" ----- Register Complete \n");
			loginAlumno(mail,pass);
		})
		.catch(function(error) {
   		// Handle Errors here.
    	var errorCode = error.code;
    	var errorMessage = error.message;
    	// ...
    	console.log(errorCode + "\n" + errorMessage);
    	console.log("========== ERROR COULD NOT REGISTER ==========");
    	}); 
	}
	else
	{
		console.log("Please enter Email and Password");
	}
};

//ON LOGIN OR LOGOUT
firebase.auth().onAuthStateChanged(function(user) {
  if (user)
  {	
  	if ((window.location.href).includes("index.html"))
  	{
		const location = (window.location.href).replace("/index.html","");
	    window.location.replace(location + "/html/mainAlumno.html");
  	}
  	
  } 
  else 
  {
    console.log("No User, Please Login or Register");
    if (!(window.location.href).includes("index.html"))
  	{
    		const location = (window.location.href);
			const last = (window.location.href).lastIndexOf("/html");
    		window.location.replace(location.substr(0,last) + "/index.html");
	}  
  }
});

function signOut(){
	//SIGN OUT
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