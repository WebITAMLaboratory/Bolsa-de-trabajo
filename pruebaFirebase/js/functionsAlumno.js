










firebase.auth().onAuthStateChanged(function(user)
{


	if(user)
	{
		var userId = firebase.auth().currentUser.uid;
		firebase.database().ref("/alumnos/" + userId + "/").once('value').then(function(snapshot) {
  			var username = snapshot.val().Nombre;
  			document.getElementById("nomAlumno").innerHTML = username;
		});
	}
	else
	{
		alert("no user");
	}


});