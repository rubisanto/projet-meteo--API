// let ville = “herblay”

//const url = '[https://api.openweathermap.org/data/2.5/weather?q=](https://api.openweathermap.org/data/2.5/weather?q=)' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

let villeChoisie;
if ("geolocation" in navigator) {
  navigator.geolocation.watchPosition(
    (coordonnees) => {
      const url =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        coordonnees.coords.latitude +
        "&lon=" +
        coordonnees.coords.longitude +
        "&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric";

      axios.get(url).then((requete) => {
        console.log(requete);
        let reponse = requete.data;
        // console.log(reponse);
        let temperature = reponse.main.temp;
        let ville = reponse.name;
        // console.log(temperature);
        //console.log(ville)
        document.querySelector("#temperature_label").textContent = temperature;
        document.querySelector("#ville").textContent = ville;
      });
    },
    erreur,
    options
  );
} else {
  villeChoisie = "Paris";
  recevoirTemperature(villeChoisie);
}

let changerVille = document.querySelector("#changer");

changerVille.addEventListener("click", () => {
  villeChoisie = prompt("De quelle ville voulez-vous connaitre la météo ? ");
  recevoirTemperature(villeChoisie);
});

function erreur() {
  villeChoisie = "Paris";
  recevoirTemperature(villeChoisie);
}

var options = {
  enableHighAccuracy: true,
};

function recevoirTemperature(ville) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ville +
    "&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric";

  axios.get(url).then((requete) => {
    console.log(requete);
    let reponse = requete.data;
    // console.log(reponse);
    let temperature = reponse.main.temp;
    let ville = reponse.name;
    // console.log(temperature);
    //console.log(ville)
    document.querySelector("#temperature_label").textContent = temperature;
    document.querySelector("#ville").textContent = ville;
  });
}
