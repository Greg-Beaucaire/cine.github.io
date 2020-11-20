"use strict";

// définir votre clé d'accès à l'API de OMDb
let APIkey = "8e261328";
// création d'une fonction `dbSearch`
let dbSearch = async function(movieTitle) {
  try { 
    let url = `https://www.omdbapi.com/?apikey=${APIkey}&t=${movieTitle}&plot=short`;
    let response = await fetch(url, { cache: "no-cache" });
    let json = await response.json();
    if (json.Response != "False") {
      document.querySelector(".resultat").innerHTML =
       `<h1 class="titre">${json.Title}</h1>`
       +`<img src="${json.Poster}" alt="affiche du film">`
       +`<ul>`
       +`<li><b>Réalisateur</b> : ${json.Director}</li>`
       +`<li><b>Année de sortie</b> : ${json.Year}</li>`
       +`<li><b>Durée</b> : ${json.Runtime}</li>`
       +`<li><b>Avec</b> : ${json.Actors}</li>`
       +`<li><b>Genre</b> : ${json.Genre}</li>`
       +`<li><b>Intrigue</b> : ${json.Plot}</li>`
       +`</ul>`;
    } else {
      document.querySelector(".resultat").innerHTML =
      `<p>Désolé mais je n'ai pas de résultat pour cette recherche (${json.Error})</p>`;
    }
  } catch (error) {
    alert(`Aïe!\nZut!\nUne erreur (diabolique, forcément) est survenue :\n${error}`);
  }
}

// écoute l'envoi du formulaire
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // bloque l'envoi par défaut
  dbSearch(event.target[0].value); // récupère la valeur du premier élément et la transmet à notre fonction `dbSearch`
});



function themeSwitch() {
  if (formInput) {
  document.getElementById("pageStyle").setAttribute("href","style2.css");
  } else {
    document.getElementById("pageStyle").setAttribute("href","style.css");
  }
};

let form = document.getElementById("myForm");
let formInput = false;

form.addEventListener("input", function () {
    formInput = true;
});