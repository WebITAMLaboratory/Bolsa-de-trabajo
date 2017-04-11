<?php
   include("../php/Config.php");
   session_start();
   		// remove all session variables
    	session_unset();
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form 
      $username = htmlspecialchars($_POST['username']);
      $pwd = htmlspecialchars($_POST['pwd']);
      $error = array();
		
      if(!empty($username) && !empty($pwd))
      {
      	$myusername = $username;
      	$mypassword = $pwd;
      	$sql = "SELECT idJuez FROM Encuesta_Juez WHERE Usuario = '$myusername' and Pwd = '$mypassword'";
      	echo $sql;
      	$result = mysqli_query($db,$sql);
      	$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      	$id = $row['idJuez'];

      	$count = mysqli_num_rows($result);

      // If result matched $myusername and $mypassword, table row must be 1 row

      	if($count == 1) 
      	{
      		$_SESSION['login_user'] = $id;

      		header("location: encuesta.php");
      	}else 
      	{
      		$error['general'] = "Usuario o password invalidos.";
      	}
      	
      }
      else
      {
      	$error['username'] = 'Ingresa un usuario valido';
      	$error['pwd'] = 'Ingresa un password valido';
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
				
				<h1 class="w3-rest w3-text-white">Login Encuesta</h1>
				</header>

				<div class="w3-container w3-white w3-row w3-padding">
					<form class="w3-container" method="POST" action="<?php echo $_SERVER[PHP_SELF]; ?>">
						<?php if(isset($error['general'])): ?>
							<p class="w3-text-red"><?php echo $error['general'] ?></p>
						<?php endif; ?>
						<?php if(isset($error['username'])): ?>
							<p class="w3-text-red"><?php echo $error['username'] ?></p>
						<?php endif; ?>
						<label>Username :</label>
						<input class="w3-input" type="text" name="username" required>
						<?php if(isset($error['pwd'])): ?>
							<p class="w3-text-red"><?php echo $error['pwd'] ?></p>
						<?php endif; ?>
						<label>Password :</label>
						<input class="w3-input" type="password" name="pwd" required>

						<input class="w3-btn w3-green w3-right" type="submit" name="submit" value="Login">
					</form>
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