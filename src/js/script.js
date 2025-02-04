const apiKey = "05b1fab71c5065221e832b32c1d7c650";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const campoInput = document.querySelector(".search input");
const btnBuscar = document.querySelector(".search button");
const climaIcon = document.querySelector(".clima-icon");

async function verificarClima(cidade) {
  const response = await fetch(apiUrl + cidade + `&appid=${apiKey}`);

  if (response.status !== 200) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".clima").style.display = "none";
  } else {
    document.querySelector(".error").style.display = "none";
    let data = await response.json();

    console.log(data);

    document.querySelector(".cidade").innerHTML = data.name;

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";

    document.querySelector(".humidade").innerHTML = data.main.humidity + "%";
    document.querySelector(".vento").innerHTML = data.wind.speed + " Km/h";

    if (data.weather[0].main == "Clouds") {
      climaIcon.src = "./public/imgs/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      climaIcon.src = "./public/imgs/clear.png";
    } else if (data.weather[0].main == "Rain") {
      climaIcon.src = "./public/imgs/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      climaIcon.src = "./public/imgs/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      climaIcon.src = "./public/imgs/mist.png";
    }

    document.querySelector(".clima").style.display = "block";
  }
}

btnBuscar.addEventListener("click", () => {
  verificarClima(campoInput.value);
});
