


function regresar()
{
	window.location.replace("http://practicasdeverano.itam.mx/html/homeEmpresa.html");
}

firebase.auth().onAuthStateChanged(function(user)
{


	if(user)
	{
		
	}
	else
	{
	    window.location.replace("http://practicasdeverano.itam.mx/html/empresa.html");
	}


});