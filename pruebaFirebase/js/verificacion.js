$( document ).ready(function() {

	document.getElementById("btnLogOut").addEventListener("click",function(){
		signOut();
	});

});
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

	const email = firebase.auth().currentUser.email;
	//ON LOGIN OR LOGOUT
	firebase.auth().onAuthStateChanged(function(user) {
		  if (user)
		  {
		  	console.log("hay usuario");
		  } 
		  else 
		  {
		  	console.log("no hay usuario");
		  	if ((email).includes("@itam.mx"))
		  	{
				const location = (window.location.href).replace("/html/verificacion.html","");
			    window.location.replace(location + "/index.html");
		  	}
		  	else
		  	{
				const location = (window.location.href).replace("/verificacion.html","");
			    window.location.replace(location + "/empresa.html");
		  	}     
		  }
	});