function test(){
let req = new XMLHttpRequest();
let city = document.getElementById("inputcity").value;
console.log(city);
req.open('GET', `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=1a3c1ed26009429f1fad3649d3073088`, false);
req.send(null);
if (req.status === 200) {
let meteo = req.responseText;
let info = JSON.parse(meteo);
console.log(info); //=> pour vérifier dans la console s'il a bien chargé les infos de l'API
let temperature = info.main.temp;
let ville = info.name;
document.getElementById("displaytemp").innerHTML = "====> Il fait " + temperature + "°C à " + ville +"!"
  } else {
console.log("Status de la réponse: %d (%s)", req.status, req.statusText);
  }
}
