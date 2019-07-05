var app = {
  init: function() {
    // ...
   
  }
};

document.addEventListener('DOMContentLoaded', app.init);

// COMMENT UTILISER L'ATTRIBUT DATA

 /*
 coôté html : <nav class="select-model" data-pomme="pomme"></nav>   --- > On ajoute une info à un élément html donc data-nomdel'info="contenu de l'info"
let nav = document.getElementsByClassName("select-model");   --- > On appelle l'élément HTML concerné par sa class ou son ID
    nav[0].dataset.test = "Mon test"; --- > si par sa class, on doit préciser le n° de la nav quand on veut console.log ou ajouter une info car ça renvoit une liste
    console.log(nav[0].dataset);      --- > affiche toutes les données renseignées
let let nav = document.getElementsByID("select-model");
    nav.dataset.test = "Mon test";
    console.log(nav.datatest.test);
*/

// COMMENT UTILISER SET INTERVAL - CLEAR INTERVAL ET SET ATTRIBUTE

/*

var hauteur = 0;    --- > On déclare une variable de base;

function test() {   --- > On définit une fonction
  hauteur += 5;     --- > ON incrémente la variable déclarée plus haut
  var div = document.getElementById('invader');  --- > On appelle l'élément HTML ciblé par cette fonction
  div.setAttribute("style", "height:" + hauteur + "px");  --- > On lui attribut un type d'attribut (ici style) et ce qu'il contient (ici height)
  console.log(hauteur); 
  if(hauteur == 500) {   --- > On définit une condition qui va stopper le setInterval une fois que c'est true
    clearInterval(timer);   --- > On utilise clearInterval sur la variable sur laquelle on a définit le setInterval
  }
  
}
var timer = window.setInterval(test, 100);  --- > on déclare une variable et on lui attribut un setInterval avec la fonction concernée et la valeur temps

*/

// COMMENT UTILISER SET TIMEOUT

/*
-SET TIMEOUT prend 2 paramètres : une fonction et une valeur temps
-SET TIMEOUT déclenche une fonction après une période x donnée
Exemple 1 :                     ---> Affiche un alert "Hello" après 3 secondes
setTimeout (funtion(){
  alert("Hello");
}, 3000);

Exemple 2 :                    --- > Affiche un alert "Hello" après 3 secondes, une fois qu'on a cliqué sur le bouton 'Test';
<button id="test">Test</button>
Let monBT = document.getElementById('test');
monBT.addEventListener('click', function() {
  setTimeout(function() {
    alert="Hello";
  }, 3000)
});
*/