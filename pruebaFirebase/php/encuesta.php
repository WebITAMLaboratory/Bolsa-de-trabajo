<?php
   include("../php/Config.php");
   session_start();
    if(!isset($_SESSION['login_user']))
    {
    	// remove all session variables
    	session_unset();
		// destroy the session
    	session_destroy(); 
    	header('Location: encuestaLogin.php');;
    }
    else
    {
    	define(USER,$_SESSION['login_user']);
    }
   
   
    if($_SERVER["REQUEST_METHOD"] == "POST") 
    {
    	if(isset($_POST['equipo']))
    	{	
   			define(EQUIPO,$_POST['equipo']);
   			$_SESSION['equipo'] = EQUIPO;
   			$sql = "SELECT Nombre,CU FROM Encuesta_Alumno WHERE idEquipo = ". EQUIPO ." ORDER BY Nombre";
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
		  	// Free result set
		   	mysqli_free_result($result);

		   	$sql = "SELECT NumEquipo FROM Encuesta_Equipo WHERE idEquipo = ". EQUIPO;
		   	mysql_set_charset("UTF8");
   			header('Content-type: text/html; charset=utf-8');
		   	$result = mysqli_query($db,$sql);
		   	$nume = array();
			// Fetch one and one row
		   	while ($row=mysqli_fetch_row($result))
		   	{
		   		$nume[] = $row[0];
		   	}
		   	mysqli_free_result($result);
		   	mysqli_close($db);
    	}
    	else
    	{
    		header("location: encuesta.php");
    	}
    } 
    else
    {
	   	$sql = "SELECT ej.idEquipo,NumEquipo FROM Encuesta_Equipo_Juez ej,Encuesta_Equipo ee WHERE ej.idJuez = ". USER . " AND ej.idEquipo = ee.idEquipo";
	   	$result = mysqli_query($db,$sql);
	   	$selects = array();
		$equipos = array();
	   	// Fetch one and one row
	   	while ($row=mysqli_fetch_row($result))
	   	{
	   		$selects[] = $row[0];
			$equipos[] = $row[1];
	   	}
	  	// Free result set
	   	mysqli_free_result($result);
	   	mysqli_close($db);

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
			<a class="w3-btn w3-green w3-right w3-small" href="logout.php"><p class="w3-margin-0">Log Out</p></a>
		</ul>
	</header>
	<!-- /header -->	
	<main class="w3-display-container" id="main">
		<div class="w3-container">
			<div class="w3-card-4 w3-border w3-border-black">
				
				
				<?php if(isset($_POST['equipo'])): ?>
					<header class="w3-container color-itam w3-row">
						<h1 class="w3-rest w3-text-white">Encuesta <?php echo "Equipo : $nume[0]"?></h1>
					</header>

					<div class="w3-container w3-white w3-row w3-padding">
						<div class="w3-responsive">
							<hr>
							<label><strong>1.- Información General</strong></label>
							<hr>
							<div class="w3-table w3-table-all">
								<table>
									<tr>
									  <th>
									  	Escala de 	evaluación
									  </th>
									  <th>1</th>
									  <th>2</th>
									  <th>3</th>
									  <th>4</th>
									  <th>5</th>
									</tr>
									<tr>
									  <th>Evaluación</th>
									  <th>No cumple</th>
									  <th>
									  	Cumple a un 	Nivel Bajo
									  </th>
									  <th>
									  	Cumple a un Nivel Medio
									  </th>
									  <th>
									  	Cumple a un Nivel Alto
									  </th>
									  <th>Excelente</th>
									</tr>
									<tr>
									  <th>
									  	Equivalencia Calificaciones ITAM
									  </th>
									  <th>NA</th>
									  <th>6</th>
									  <th>7-8</th>
									  <th>9</th>
									  <th>10</th>
									</tr>
								</table>
							</div>
						</div>
						
						<form class="w3-container" method="POST" action="llenaEncuesta.php">
							<div class="w3-responsive">
								<hr>
								<label><strong>2.- Evaluación de equipo</strong></label>
								<hr>
								<div class="w3-table w3-table-all">
									<table>
										<tr>
										  <th>
										  	Elementos de Evaluación
										  </th>
										  <th>
										  	Evaluación
											(Escala del 1 al 5)
										  </th>		
										</tr>
										<tr>
										  <th>
										  	2.1	Presentación (Diapositivas). Claridad y Lógica
											La presentación es clara y fácil de seguir. La presentación tiene una narrativa lógica entre diapositivas.
										  </th>
										  <th>
											  <select name="PresentacionEquipo" required>
											  	<option value="1">1</option>
											  	<option value="2">2</option>
											  	<option value="3">3</option>
											  	<option value="4">4</option>
											  	<option value="5">5</option>
											  </select>
										  </th>
										</tr>
										<tr>
										  <th>
										  	2.2	Organización. Organización y dinámica del Equipo
											Los alumnos están organizados para cada intervención. El uso del tiempo está distribuido equitativamente entre los miembros del equipo. Los alumnos interactúan de manera profesional.
										  </th>
										  <th>
											  <select name="OrganizacionEquipo" required>
											  	<option value="1">1</option>
											  	<option value="2">2</option>
											  	<option value="3">3</option>
											  	<option value="4">4</option>
											  	<option value="5">5</option>
											  </select>
										  </th>
										</tr>
										<tr>
										  <th>
										  	2.3	Análisis. Análisis, Contexto, Recomendaciones y Conclusiones
											El equipo identificó los elementos relevantes del caso. El equipo entendió el contexto de la empresa. El equipo utilizó argumentos de negocios sólidos. La solución es congruente con el análisis presentado.
										  </th>
										  <th>
											  <select name="AnalisisEquipo" required>
											  	<option value="1">1</option>
											  	<option value="2">2</option>
											  	<option value="3">3</option>
											  	<option value="4">4</option>
											  	<option value="5">5</option>
											  </select>
										  </th>
										</tr>
									</table>
								</div>
								<hr>
								<label><strong>3.- Evaluación Individual</strong></label>
								<hr>
								<div class="w3-table w3-table-all w3-border">
									<table>
										<tr>
										  <th>
										  	Elementos de Evaluación (Integrantes)
										  </th>
										  <?php
										  	for ($i=0; $i < $cantidad ; $i++) 
										   	{ 	
										   		$aux = utf8_encode($alumnos[$claves[$i]]);
										   		echo "<th> $aux </th>";
										   	} 
										  ?>
										</tr>
										<tr>
										  <th>
										  	3.1	Presentación y Vestimenta. Imagen 
											El alumno se presentó con vestimenta formal y adecuada para una entrevista de trabajo.
										  </th>
										  <?php
										  		for ($i=0; $i <$cantidad ; $i++)
										  		{ 
										  				echo "<th> <select name=\"PresentacionAlumno $claves[$i]\" required>
											  	<option value=\"1\">1</option>
											  	<option value=\"2\">2</option>
											  	<option value=\"3\">3</option>
											  	<option value=\"4\">4</option>
											  	<option value=\"5\">5</option>
											  </select> </th>";
										  		}	
										   ?>
										</tr>
										<tr>
										  <th>
										  	3.2	Exposición. Habilidades de Comunicación
											La postura corporal del alumno es adecuada; El alumno habla correctamente y de manera fluida; mira a la audiencia; utiliza la comunicación no verbal (ej. manos); no lee las diapositivas.
										  </th>
										  <?php
										  		for ($i=0; $i <$cantidad ; $i++)
										  		{ 
										  				echo "<th> <select name=\"ExposicionAlumno $claves[$i]\" required>
											  	<option value=\"1\">1</option>
											  	<option value=\"2\">2</option>
											  	<option value=\"3\">3</option>
											  	<option value=\"4\">4</option>
											  	<option value=\"5\">5</option>
											  </select> </th>";
										  		}	
										   ?>
										</tr>
										<tr>
										  <th>
										  	3.3	Actitud. Compromiso, Entusiasmo y Seguridad
											El alumno se muestra entusiasmado y comprometido con sus ideas. El alumno muestra una actitud profesional y de respeto. El alumno muestra seguridad en su discurso.
										  </th>
										  <?php
										  		for ($i=0; $i <$cantidad ; $i++)
										  		{ 
										  				echo "<th> <select name=\"ActitudAlumno $claves[$i]\" required>
											  	<option value=\"1\">1</option>
											  	<option value=\"2\">2</option>
											  	<option value=\"3\">3</option>
											  	<option value=\"4\">4</option>
											  	<option value=\"5\">5</option>
											  </select> </th>";
										  		}	
										   ?>
										</tr>
										<tr>
										  <th>
										  	3.4	Conocimientos. Sustento Académico
											El alumno demuestra conocimientos sólidos en el área de negocios relevante.
										  </th>
										  <?php
										  		for ($i=0; $i <$cantidad ; $i++)
										  		{ 
										  				echo "<th> <select name=\"ConocimientosAlumno $claves[$i]\" required>
											  	<option value=\"1\">1</option>
											  	<option value=\"2\">2</option>
											  	<option value=\"3\">3</option>
											  	<option value=\"4\">4</option>
											  	<option value=\"5\">5</option>
											  </select> </th>";
										  		}	
										   ?>
										</tr>
										<tr>
										  <th>
										  	3.5	Defensa de Ideas. Habilidad para Responder
											Habilidad para responder preguntas. ¿Contestó claramente las preguntas de los evaluadores?
										  </th>
										  <?php
										  		for ($i=0; $i <$cantidad ; $i++)
										  		{ 
										  				echo "<th> <select name=\"DefensaAlumno $claves[$i]\" required>
											  	<option value=\"1\">1</option>
											  	<option value=\"2\">2</option>
											  	<option value=\"3\">3</option>
											  	<option value=\"4\">4</option>
											  	<option value=\"5\">5</option>
											  </select> </th>";
										  		}	
										   ?>
										</tr>
										<tr>
										  <th>
										  	3.6	Capacidad de Análisis. Habilidades Analíticas
											El alumno llega a conclusiones sólidas, relevantes y congruentes con los argumentos y el análisis presentado.
										  </th>
										  <?php
										  		for ($i=0; $i <$cantidad ; $i++)
										  		{ 
										  				echo "<th> <select name=\"CapacidadAlumno $claves[$i]\" required>
											  	<option value=\"1\">1</option>
											  	<option value=\"2\">2</option>
											  	<option value=\"3\">3</option>
											  	<option value=\"4\">4</option>
											  	<option value=\"5\">5</option>
											  </select> </th>";
										  		}	
										   ?>
										</tr>
										<tr>
										  <th>
										  	3.7	Evaluación General. Recomendación
											Recomienda la participación del alumno en el programa de verano como Embajador del ITAM ante las empresas.
										  </th>
										  <?php
										  		for ($i=0; $i <$cantidad ; $i++)
										  		{ 
										  				echo "<th> <select name=\"EvaluacionAlumno $claves[$i]\" required>
											  	<option value=\"1\">1</option>
											  	<option value=\"2\">2</option>
											  	<option value=\"3\">3</option>
											  	<option value=\"4\">4</option>
											  	<option value=\"5\">5</option>
											  </select> </th>";
										  		}	
										   ?>
										</tr>
									</table>
								</div>
							</div>
							<input class="w3-btn w3-green w3-right" type="submit" name="submit" value="Terminar">
						</form>

					<?php elseif (!isset($_POST['equipo'])): ?>
						<header class="w3-container color-itam w3-row">
							<h1 class="w3-rest w3-text-white">Elección de equipos</h1>
						</header>

						<div class="w3-container w3-white w3-row w3-padding">
							<form class="w3-container" method="POST" action="<?php echo $_SERVER[PHP_SELF]; ?>">
								<label>Elige un equipo : </label>
								<select name="equipo">
									<?php
									$j = 0; 
									foreach ($selects as $select) 
									{
										echo "<option value=\"$select\" required>$equipos[$j]</option>";
										$j++;
									} 
									?>
								</select>
								<input class="w3-btn w3-green w3-right" type="submit" name="submit" value="Elegir">
							</form>
						<?php endif ?>
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