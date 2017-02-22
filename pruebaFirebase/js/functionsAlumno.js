










firebase.auth().onAuthStateChanged(function(user)
{


	if(user)
	{
		var proyectos = document.getElementById("proyectos");
		var userId = firebase.auth().currentUser.uid;
		firebase.database().ref("/alumnos/" + userId + "/").once('value').then(function(snapshot) {
  			var username = snapshot.val().Nombre;
  			document.getElementById("nomAlumno").innerHTML = username;
		});
		firebase.database().ref("/proyectos/").once('value').then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
    		proyectos.innerHTML = proyectos.innerHTML + "<p>" + childSnapshot.val().Nombre + "</p>";
  		});
			
		});
	}
	else
	{
		window.location.replace("http://practicasdeverano.itam.mx/");
	}


});