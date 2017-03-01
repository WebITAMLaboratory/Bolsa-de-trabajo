
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

      function displayCarrera() {
        if(document.getElementById('licenciatura').checked) {
          var node = document.createElement("SELECT");               
          var att = document.createAttribute("class");       
          att.value = "w3-select";
          node.setAttributeNode(att);
          var att = document.createAttribute("data-placeholder");       
          att.value = "Choose a Career...";
          node.setAttributeNode(att);
          var att = document.createAttribute("id");       
          att.value = "Career";
          var Career = "Career";
          node.setAttributeNode(att);                            
          document.getElementById("Carrera").appendChild(node);

          //Crea options
          var option01 = document.createElement("Option");        
          var att01 = document.createAttribute("class");       
          att01.value = "valorOption01";
          option01.setAttributeNode(att01);
          option01.text = "Administracion";
          var x = document.getElementById(Career);
          x.add(option01);

          var option02 = document.createElement("Option");
          var att02 = document.createAttribute("class");       
          att02.value = "valorOption02";
          option02.setAttributeNode(att02);
          option02.text = "Contaduría Pública y Estrategia Financiera";
          x.add(option02);

          var option03 = document.createElement("Option");
          var att03 = document.createAttribute("class");       
          att03.value = "valorOption03";
          option03.setAttributeNode(att03);
          option03.text = "Dirección Financiera";
          x.add(option03);

          var option04 = document.createElement("Option");
          var att04 = document.createAttribute("class");       
          att04.value = "valorOption04";
          option04.setAttributeNode(att04);
          option04.text = "Ingeniería en Negocios";
          x.add(option04);

          var option05 = document.createElement("Option");
          var att05 = document.createAttribute("class");       
          att05.value = "valorOption05";
          option05.setAttributeNode(att05);
          option05.text = "Ingeniería en Computación";
          x.add(option05);

          var option06 = document.createElement("Option");
          var att06 = document.createAttribute("class");       
          att06.value = "valorOption06";
          option06.setAttributeNode(att06);
          option06.text = "Ingeniería Industrial";
          x.add(option06);

          var option07 = document.createElement("Option");
          var att07 = document.createAttribute("class");       
          att07.value = "valorOption07";
          option07.setAttributeNode(att07);
          option07.text = "Ingeniería en Mecatrónica";
          x.add(option07);

          var option08 = document.createElement("Option");
          var att08 = document.createAttribute("class");       
          att08.value = "valorOption08";
          option08.setAttributeNode(att08);
          option08.text = "Ingeniería en Telecomunicaciones";
          x.add(option08);


        }else if(document.getElementById('planConjunto').checked) {
          
          var node = document.createElement("SELECT");               
          var att = document.createAttribute("class");       
          att.value = "w3-select";
          node.setAttributeNode(att);
          var att = document.createAttribute("data-placeholder");       
          att.value = "Choose a Joint plan...";
          node.setAttributeNode(att);
          var att = document.createAttribute("id");       
          att.value = "JointPlan";
          var JointPlan = "JointPlan";
          node.setAttributeNode(att);                            
          document.getElementById("Carrera").appendChild(node);

          //Crea options
          var option1 = document.createElement("Option");        
          var att1 = document.createAttribute("class");       
          att1.value = "valorOption1";
          option1.setAttributeNode(att1);
          option1.text = "Administracion y Actuaría";
          var x = document.getElementById(JointPlan);
          x.add(option1);

          var option2 = document.createElement("Option");
          var att2 = document.createAttribute("class");       
          att2.value = "valorOption2";
          option2.setAttributeNode(att2);
          option2.text = "Actuaría y Dirección Financiera";
          x.add(option2);

          var option3 = document.createElement("Option");
          var att3 = document.createAttribute("class");       
          att3.value = "valorOption3";
          option3.setAttributeNode(att3);
          option3.text = "Actuaría y Matemáticas Aplicadas";
          x.add(option3);

          var option4 = document.createElement("Option");
          var att4 = document.createAttribute("class");       
          att4.value = "valorOption4";
          option4.setAttributeNode(att4);
          option4.text = "Administracion y Contaduría Pública y Estrategia Financiera";
          x.add(option4);

          var option5 = document.createElement("Option");
          var att5 = document.createAttribute("class");       
          att5.value = "valorOption5";
          option5.setAttributeNode(att5);
          option5.text = "Administracion Dirección Financiera";
          x.add(option5);

          var option6 = document.createElement("Option");
          var att6 = document.createAttribute("class");       
          att6.value = "valorOption6";
          option6.setAttributeNode(att6);
          option6.text = "Administracion y Relaciones Internacionales";
          x.add(option6);

          var option7 = document.createElement("Option");
          var att7 = document.createAttribute("class");       
          att7.value = "valorOption7";
          option7.setAttributeNode(att7);
          option7.text = "Administracion e Ingeniería en Computación";
          x.add(option7);

          var option8 = document.createElement("Option");
          var att8 = document.createAttribute("class");       
          att8.value = "valorOption8";
          option8.setAttributeNode(att8);
          option8.text = "Administracion e Ingeniería Industrial";
          x.add(option8);

          var option9 = document.createElement("Option");
          var att9 = document.createAttribute("class");       
          att9.value = "valorOption9";
          option9.setAttributeNode(att9);
          option9.text = "Contaduría Pública y Actuaría";
          x.add(option9);

          var option10 = document.createElement("Option");
          var att10 = document.createAttribute("class");       
          att10.value = "valorOption10";
          option10.setAttributeNode(att10);
          option10.text = "Contaduría y Derecho";
          x.add(option10);

          var option11 = document.createElement("Option");
          var att11 = document.createAttribute("class");       
          att11.value = "valorOption11";
          option11.setAttributeNode(att11);
          option11.text = "Contaduría Pública y Dirección Financiera";
          x.add(option11);

          var option12 = document.createElement("Option");
          var att12 = document.createAttribute("class");       
          att12.value = "valorOption12";
          option12.setAttributeNode(att12);
          option12.text = "Contaduría Pública e Ingeniería Industrial";
          x.add(option12);

          var option13 = document.createElement("Option");
          var att13 = document.createAttribute("class");       
          att13.value = "valorOption13";
          option13.setAttributeNode(att13);
          option13.text = "Derecho y Ciencia Política";
          x.add(option13);

          var option14 = document.createElement("Option");
          var att14 = document.createAttribute("class");       
          att14.value = "valorOption14";
          option14.setAttributeNode(att14);
          option14.text = "Derecho Y Relaciones Internacionales";
          x.add(option14);

          var option15 = document.createElement("Option");
          var att15 = document.createAttribute("class");       
          att15.value = "valorOption15";
          option15.setAttributeNode(att15);
          option15.text = "Economía y Administracion";
          x.add(option15);

          var option16 = document.createElement("Option");
          var att16 = document.createAttribute("class");       
          att16.value = "valorOption16";
          option16.setAttributeNode(att16);
          option16.text = "Economía y Ciencia Política";
          x.add(option16);

          var option17 = document.createElement("Option");
          var att17 = document.createAttribute("class");       
          att17.value = "valorOption17";
          option17.setAttributeNode(att17);
          option17.text = "Economía y Derecho";
          x.add(option17);

          var option18 = document.createElement("Option");
          var att18 = document.createAttribute("class");       
          att18.value = "valorOption18";
          option18.setAttributeNode(att18);
          option18.text = "Economía y Dirección Financiera";
          x.add(option18);

          var option19 = document.createElement("Option");
          var att19 = document.createAttribute("class");       
          att19.value = "valorOption19";
          option19.setAttributeNode(att19);
          option19.text = "Economía y Matemáticas Aplicadas";
          x.add(option19);

          var option20 = document.createElement("Option");
          var att20 = document.createAttribute("class");       
          att20.value = "valorOption20";
          option20.setAttributeNode(att20);
          option20.text = "Economía y Relaciones Internacionales";
          x.add(option20);

          var option21 = document.createElement("Option");
          var att21 = document.createAttribute("class");       
          att21.value = "valorOption21";
          option21.setAttributeNode(att21);
          option21.text = "Economía e Ingeniería en Negocios";
          x.add(option21);

          var option22 = document.createElement("Option");
          var att22 = document.createAttribute("class");       
          att22.value = "valorOption22";
          option22.setAttributeNode(att22);
          option22.text = "Relaciones Internacionales y Ciencia Política";
          x.add(option22);

          var option23 = document.createElement("Option");
          var att23 = document.createAttribute("class");       
          att23.value = "valorOption23";
          option23.setAttributeNode(att23);
          option23.text = "Ingeniería en Computación y Matemáticas Aplicadas";
          x.add(option23);

          var option24 = document.createElement("Option");
          var att24 = document.createAttribute("class");       
          att24.value = "valorOption24";
          option24.setAttributeNode(att24);
          option24.text = "Ingeniería en Computación e Ingeniería Industrial";
          x.add(option24);

          var option25 = document.createElement("Option");
          var att25 = document.createAttribute("class");       
          att25.value = "valorOption25";
          option25.setAttributeNode(att25);
          option25.text = "Ingeniería en Mecatrónica e Ingeniería en Computación";
          x.add(option25);

          var option26 = document.createElement("Option");
          var att26 = document.createAttribute("class");       
          att26.value = "valorOption26";
          option26.setAttributeNode(att26);
          option26.text = "Ingeniería Mecatrónica e Ingeniería Industrial";
          x.add(option26);

          var option27 = document.createElement("Option");
          var att27 = document.createAttribute("class");       
          att27.value = "valorOption27";
          option27.setAttributeNode(att27);
          option27.text = "Ingeniería en Negocios y Administracion";
          x.add(option27);

          var option28 = document.createElement("Option");
          var att28 = document.createAttribute("class");       
          att28.value = "valorOption28";
          option28.setAttributeNode(att28);
          option28.text = "Ingeniería en Negocios y Dirección Financiera";
          x.add(option28);

          var option29 = document.createElement("Option");
          var att29 = document.createAttribute("class");       
          att29.value = "valorOption29";
          option29.setAttributeNode(att29);
          option29.text = "Ingeniería Negocios e Ingeniería en Computación";
          x.add(option29);

          var option30 = document.createElement("Option");
          var att30 = document.createAttribute("class");       
          att30.value = "valorOption30";
          option30.setAttributeNode(att30);
          option30.text = "Ingeniería en Negocios e Ingeniería Industrial";
          x.add(option30);

          var option31 = document.createElement("Option");
          var att31 = document.createAttribute("class");       
          att31.value = "valorOption31";
          option31.setAttributeNode(att31);
          option31.text = "Ingeniería en Negocios e Ingeniería en Telecomunicaciones";
          x.add(option31);

          var option32 = document.createElement("Option");
          var att32 = document.createAttribute("class");       
          att32.value = "valorOption32";
          option32.setAttributeNode(att32);
          option32.text = "Ingeniería en Telecomunicaciones e Ingeniería en Computación";
          x.add(option32);

          var option33 = document.createElement("Option");
          var att33 = document.createAttribute("class");       
          att33.value = "valorOption33";
          option33.setAttributeNode(att33);
          option33.text = "Ingeniería en Telecomunicaciones e Ingeniería en  Mecatrónica";
          x.add(option33);

          var option34 = document.createElement("Option");
          var att34 = document.createAttribute("class");       
          att34.value = "valorOption34";
          option34.setAttributeNode(att34);
          option34.text = "Ingeniería en Telecomunicaciones y Matemáticas Aplicadas";
          x.add(option34);
        }
      }