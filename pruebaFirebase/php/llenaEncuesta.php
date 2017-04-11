<?php 
include("../php/Config.php");
session_start();
if(!isset($_SESSION['login_user']) && !isset($_SESSION['equipo']))
{
    // remove all session variables
    session_unset();
	// destroy the session
    session_destroy(); 
    header('Location: encuestaLogin.php');
}
else
{
    define(EQUIPO,$_SESSION['equipo']);
    define(USER,$_SESSION['login_user']);

    if($_SERVER["REQUEST_METHOD"] == "POST") 
    {	
    	$sql = "SELECT Nombre,CU FROM Encuesta_Alumno WHERE idEquipo = ". EQUIPO;
   		mysql_set_charset("UTF8");
   		header('Content-type: text/html; charset=utf-8');
    	$result = mysqli_query($db,$sql);
		$alumnos = array();
		// Fetch one and one row
		while ($row=mysqli_fetch_row($result))
		{
		   	$alumnos[trim($row[1])] = trim($row[0]);
		}
		$claves = array_keys($alumnos);
		$cantidad = count($alumnos);
		$cantPost = count($_POST);							  
		// Free result set
		mysqli_free_result($result);

		$val1 = $_POST['PresentacionEquipo'];
		$val2 = $_POST['OrganizacionEquipo'];
		$val3 = $_POST['AnalisisEquipo'];
		$user = USER;
		$equip = EQUIPO;

		$sql = "INSERT INTO Encuesta_Eval_Equipo (idEvalEquipo, Fecha, Presentacion, Organizacion, Analisis, idJuez,idEquipo) VALUES (NULL, CURRENT_DATE(), $val1, $val2, $val3, $user,$equip);";
		mysql_set_charset("UTF8");
   		header('Content-type: text/html; charset=utf-8');
    	$result = mysqli_query($db,$sql);
		$idEquipo = mysqli_insert_id($db);
		// Free result set
		mysqli_free_result($result);
		foreach ($alumnos as $cu => $nom)
		{
			$valores = array();
			foreach ($_POST as $key => $value) 
			{	 
				if (strpos("$key","_$cu") != false)
				{
    				$valores[] = $value;
				}
			}
			$sql = "INSERT INTO Encuesta_Eval_Alumno (idEvalAl,Fecha, Presentacion, Exposicion, Actitud, Conocimientos, Defensa, Capacidad, Evaluacion, idEvalEquipo, idJuez,CU) VALUES (NULL,CURRENT_DATE(),$valores[0],$valores[1],$valores[2],$valores[3],$valores[4],$valores[5],$valores[6],$idEquipo,$user,$cu)";
			mysql_set_charset("UTF8");
   			header('Content-type: text/html; charset=utf-8');
    		$result = mysqli_query($db,$sql);
			// Free result set
			mysqli_free_result($result);
		}
    }
    else
    {
    	// remove all session variables
   		session_unset();
		// destroy the session
    	session_destroy(); 
    	header('Location: encuestaLogin.php');
    }

}
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Prácticas 2017</title>
	<meta name="description" content="Prácticas de Verano 2017 ITAM">
	<meta name="robots" content="index, follow">
	<meta name="author" content="WIL(EMILIANO SOTOMAYOR AKA uboat46, VICTOR OSORNIO AKA Tech)">

	<!--OG-->
	<meta property="og:type" content="business.business">
	<meta property="og:title" content="Prácticas de Verano 2017 ITAM">
	<meta property="og:url" content="http://practicasdeverano.itam.mx">
	<meta property="og:image" content="http://practicasdeverano.itam.mx/img/VectPPPV17.png">
	<meta content="image/png" property="og:image:type" />
	<meta content="400" property="og:image:width" />
	<meta content="300" property="og:image:height" />
	<meta property="business:contact_data:street_address" content="Río Hondo #1,Col. Progreso Tizapán">
	<meta property="business:contact_data:locality" content="Ciudad de México">
	<meta property="business:contact_data:region" content="Ciudad de México">
	<meta property="business:contact_data:postal_code" content="01080">
	<meta property="business:contact_data:country_name" content="México">

	<!--links scripts-->
	<link rel="stylesheet" href="../css/w3.css">
	<link rel="stylesheet" href="../css/index.css">
	
	<script src="https://www.gstatic.com/firebasejs/3.6.9/firebase.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	
	
</head>
<body class=" w3-container w3-margin-0 w3-padding-0 w3-pale-green">
<div id="header-main" class="w3-container w3-padding-0">
	

	<header id="header">
		<ul class="w3-navbar color-itam w3-xlarge w3-margin-bottom w3-center w3-padding">
			<img src="../img/VectPPPV17.png" alt="Practicas Profesionales De Verano 2017" class="w3-image" style="max-width:200px"> 
			<p class="w3-margin-0 w3-text-white w3-border-top border-itam">Prácticas Profesionales De Verano 2017</p>
		</ul>	
	</header>
	<!-- /header -->	
	<main class="w3-display-container" id="main">
			<div class="w3-container">
			<div class="w3-card-4 w3-border w3-border-black">
				
				<header class="w3-container color-itam w3-row">
					<h1 class="w3-rest w3-text-white">Fin Encuesta</h1>
				</header>

				<div class="w3-container w3-white w3-row w3-padding">
					<p>
						Encuesta Completada con exito!
					</p>
					<a class="w3-btn w3-green w3-right w3-small" href="logout.php"><p class="w3-margin-0">Salir</p></a>
				</div>

				<footer class="w3-container w3-black">
					<h5>Powered by <a href="http://wil.itam.mx" title="WIL.ITAM" alt="WIL.ITAM">WIL.itam.mx</a></h5>
				</footer>
			</div>
		</div>
		<!-- Login -->
	</main>

	</div>
	<footer class="w3-container footer-grey w3-bottom w3-center w3-text-white" id="footer">
		<h3 class=" w3-small">
			Derechos Reservados &copy; ITAM, 2017<br>
			Creado por <a href="http://wil.itam.mx" title="wil itam">wil.itam.mx</a>
		</h3>
	</footer>

	
</body>
</html>