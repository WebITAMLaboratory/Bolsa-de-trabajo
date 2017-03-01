
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

  var num=0;
  var idiomaYnivel = [];
  var idiomas;
 

  $(document).ready(function(){


    /*lOG OUT PROCESS*/
    btnLogOut.addEventListener("click", function(){
      firebase.auth().signOut().then(function()
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

      llenaAlumno(nom,cU,tel,car,semestre,interes, interes2, interes3,idiomas);
    });

});

  function idiomas(){

     var selectUso = document.querySelectorAll("select");
  var largoUso = selectUso.length-1;
  for (var i =0 ; i <largoUso; i++) {        
        var varIdioma =document.getElementById("lbNivel"+i).innerText;
        var varNivel =document.getElementById("requiredNivel"+i);
        var textNivel= varNivel.options[varNivel.selectedIndex].text;        
        idiomaYnivel.push(varIdioma.substr(8, 20)+": " + textNivel);
      }
      var arrayLength = idiomaYnivel.length;
        idiomas=idiomaYnivel.join();     
  }

  function prueba(){

  } 


  function displayIdioma() {
      var strIdioma = $("#selectAlumIdiomas :selected").text();
      var btn = document.createTextNode(strIdioma);
      var btn2 ="";
      if (btn!=btn2) {
        
        function more(length, chars) {
          var result = '';
          for (var i = length; i > 0; --i) 
            result += chars[Math.round(Math.random())];
            return result;
        }

        var id = num++

        var btn2 = btn

        //CREA PLACEHOLDER
        var node = document.createElement("SELECT");               
        var att = document.createAttribute("class");       
        att.value = "w3-select";
        node.setAttributeNode(att);
        var att = document.createAttribute("data-placeholder");       
        att.value = "Choose a Level...";
        node.setAttributeNode(att);
        var att = document.createAttribute("id");       
        att.value = "requiredNivel" + id;
        var requieredNivel = "requiredNivel" + id;
        node.setAttributeNode(att);                            
        document.getElementById("txtIdiomaNivel").appendChild(node);

        //Crea options
        var option1 = document.createElement("Option");        
        var att1 = document.createAttribute("class");       
        att1.value = "valorOption1";
        option1.setAttributeNode(att1);
        option1.text = "Basico";
        var x = document.getElementById(requieredNivel);
        x.add(option1);

        var option2 = document.createElement("Option");
        var att2 = document.createAttribute("class");       
        att2.value = "valorOption2";
        option2.setAttributeNode(att2);
        option2.text = "Intermedio";
        x.add(option2);

        var option3 = document.createElement("Option");
        var att3 = document.createAttribute("class");       
        att3.value = "valorOption3";
        option3.setAttributeNode(att3);
        option3.text = "Avanzado";
        x.add(option3);


        var node = document.createElement("LABEL");               
        var att = document.createAttribute("class");       
        att.value = "w3-label w3-validate";
        node.setAttributeNode(att);
        var att = document.createAttribute("id");
        att.value = "lbNivel" + id;
        var nivel = "lbNivel" + id;
        node.setAttributeNode(att);
        
        document.getElementById("txtIdiomaNivel").appendChild(node);    
        document.getElementById(nivel).innerHTML = "Nivel de " + strIdioma;
        document.getElementById("requiredNivel" + id).required = true;

        }
      }