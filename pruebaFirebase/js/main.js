
// Initialize Firebase
var config = {
	apiKey: "AIzaSyBxrNMp2TQU8y72jkRRGLSdJq2-2N3jNRw",
	authDomain: "prueba-proyecto-39eb7.firebaseapp.com",
	databaseURL: "https://prueba-proyecto-39eb7.firebaseio.com",
	storageBucket: "prueba-proyecto-39eb7.appspot.com",
	messagingSenderId: "356288809556"
};
firebase.initializeApp(config);
/*
var config = {
    apiKey: "AIzaSyAUByn-6VOe_6htTVEUyNZi9MRdTHg-Ew8",
    authDomain: "bolsadetrabajoitamdb.firebaseapp.com",
    databaseURL: "https://bolsadetrabajoitamdb.firebaseio.com",
    storageBucket: "bolsadetrabajoitamdb.appspot.com",
    messagingSenderId: "427953157462"
  };
  */

  $(document).ready(function(){
    /*lOG OUT PROCESS*/
    btnLogOut.addEventListener("click", function(){
      firebase.auth().signOut().then(function() {
        console.log("Sign-out successful");

      }, function(error) {
        console.log("An error happened.");
        alert(error.message);
      });
    });


    

      const btnFormulario = document.getElementById("btnFormulario");

    //text
    const txtAlumNom = document.getElementById("txtAlumNom");
    const txtAlumCU = document.getElementById("txtAlumCU");
    const txtAlumTel = document.getElementById("txtAlumTel");
    const txtAlumCarrera = document.getElementById("txtAlumCarrera");
    const txtAlumSem = document.getElementById("txtAlumSem");

    const txtAlumInteres1 = document.getElementById("txtAlumInteres1");
    const txtAlumInteres2 = document.getElementById("txtAlumInteres2");
    const txtAlumInteres3 = document.getElementById("txtAlumInteres3");

    btnFormulario.addEventListener("click",function(){
      const nom = txtAlumNom.value;
      const cU = txtAlumCU.value;
      const tel = txtAlumTel.value;
      const car = txtAlumCarrera.value;
      const semestre = txtAlumSem.value;
      const interes = txtAlumInteres1.value;
      const interes2 = txtAlumInteres2.value;
      const interes3 = txtAlumInteres3.value;

      llenaAlumno(nom,cU,tel,car,semestre,interes, interes2, interes3);
    });
});

  function displayIdioma() {
      var strIdioma = $("#selectAlumIdiomas :selected").text();
      var btn = document.createTextNode(" de " + strIdioma);
      var btn2 ="";
      if (btn!=btn2) {
        var btn2 = btn


        var node = document.createElement("INPUT");               
        var att = document.createAttribute("class");       
        att.value = "w3-input";
        node.setAttributeNode(att);
        var att = document.createAttribute("type");       
        att.value = "text";
        node.setAttributeNode(att);
        var att = document.createAttribute("id");       
        att.value = "requiredNivel";
        node.setAttributeNode(att);
        var textnode = document.createTextNode(btn);        
        node.appendChild(textnode);                             
        document.getElementById("txtIdiomaNivel").appendChild(node);

        var node = document.createElement("LABEL");               
        var att = document.createAttribute("class");       
        att.value = "w3-label w3-validate";
        node.setAttributeNode(att);
        var att = document.createAttribute("id");  

        function randomString(length, chars) {
          var result = '';
          for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
            return result;
        }

          var id = randomString(3, '0123456789');

          att.value = "lbNivel" + id;
          var nivel = "lbNivel" + id;
          node.setAttributeNode(att);
          var textnode = document.createTextNode(btn);
          node.appendChild(textnode); 
          document.getElementById("txtIdiomaNivel").appendChild(node);    
          document.getElementById("txtIdiomaNivel").appendChild(btn);
          document.getElementById(nivel).innerHTML = "Nivel";
          document.getElementById("requiredNivel").required = true; 
        }
      }