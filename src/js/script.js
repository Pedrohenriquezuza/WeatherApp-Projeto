const apiKey = "05b1fab71c5065221e832b32c1d7c650";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const campoInput = document.querySelector(".search input");
const btnBuscar = document.querySelector(".search button");

async function verificarClima(cidade) {
  const response = await fetch(apiUrl + cidade + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);

  document.querySelector(".cidade").innerHTML = data.name;

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";

  document.querySelector(".humidade").innerHTML = data.main.humidity + "%";
  document.querySelector(".vento").innerHTML = data.wind.speed + " Km/h";
}

btnBuscar.addEventListener("click", () => {
  verificarClima(campoInput.value);
});
