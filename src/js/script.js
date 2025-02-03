const apiKey = "05b1fab71c5065221e832b32c1d7c650";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function verificarClima() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);

  document.querySelector(".cidade").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + '°C';
  document.querySelector(".humidade").innerHTML = data.main.humidity + '%';
  document.querySelector(".vento").innerHTML = data.wind.speed + ' Km/h';
}

verificarClima();
