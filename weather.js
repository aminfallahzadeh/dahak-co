// weather app
const btn = document.getElementById("search-btn");
const input = document.getElementById("input-city");

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handleRepsponse();
  }
});

btn.addEventListener("click", (event) => {
  event.preventDefault();
  handleRepsponse();
});

function handleRepsponse() {
  const apiKey = "ece3d774838b09a815d295b2c22b2c7e";
  const lang = "fa";

  const img = document.getElementById("img");

  const city = document.getElementById("input-city").value;
  const resCity = document.querySelector(".res-city");
  const resTemp = document.querySelector(".res-temp");
  const resWeather = document.querySelector(".res-weather");

  if (city === "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=${lang}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      resCity.innerHTML = `${data.name}`;
      resTemp.innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`;
      resWeather.innerHTML = `${data.weather[0].description}`;

      switch (data.weather[0].description) {
        case "کمی ابری":
          img.src = "img/cloud-light.png";
          img.animate(
            [
              { opacity: 0, transform: "translateY(-8rem)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              duration: 1000,
              easing: "ease-in-out",
            }
          );
          break;
      }
    });
}
