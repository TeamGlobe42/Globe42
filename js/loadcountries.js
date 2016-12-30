
// Script pour completer la balise select. Les pays sont chargé depuis restcountries.eu  //
// _____________________________________________________________________________________ //

document.addEventListener("DOMContentLoaded", function (event) {

    // Requete HTTP
    function loadXMLDoc() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            enFrancais(this);
          }
      };
      xhttp.open("GET", "https://restcountries.eu/rest/v2/all?fields=translations", true);
      xhttp.send();
    }

    // Ajout des pays en tant qu'options du select
    function enFrancais(pays){
      var i = 0;
      var response = "";
      var paysJson = JSON.parse(pays.responseText); // Parse la reponse en Json
      var selector = document.getElementById('Nationalité'); // Selectionne le select voulu
      for (x in paysJson) {
          //console.log(paysJson[x].translations.fr);
          if (paysJson[x].translations.fr != undefined) // Certains (petits) pays n'ont pas les traductions
          selector.options[selector.length] = new Option(paysJson[x].translations.fr,paysJson[x].translations.fr);
      }
    }

    //Appel de la fonction
    loadXMLDoc();

  }
);
