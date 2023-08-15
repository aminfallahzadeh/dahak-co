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

  const responsContainer = document.querySelector(
    ".other__weather--response-item"
  );

  const city = document.getElementById("input-city").value;
  const resCity = document.querySelector(".res-city");
  const resTemp = document.querySelector(".res-temp");
  const resWeather = document.querySelector(".res-weather");
  const resHumidity = document.querySelector(".res-humidity");
  const resWindSpeed = document.querySelector(".res-windspeed");

  if (!city) {
    resCity.innerHTML = `نام شهر : <span class="error">شهر مورد نظر یافت نشد !</span>`;
    resTemp.innerHTML = "دما : - -";
    resWeather.innerHTML = "آب و هوا : - -";
    resHumidity.innerHTML = "رطوبت : - -";
    resWindSpeed.innerHTML = "سرعت باد : - -";
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=${lang}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.name) {
        console.log(data);
        resCity.innerHTML = `نام شهر : <span class="response">${data.name}</span>`;
        resTemp.innerHTML = `دما : <span class="response">${parseInt(
          data.main.temp
        )} درجه سانتیگراد </span>`;
        resHumidity.innerHTML = `رطوبت : <span class="response">${data.main.humidity}</span>`;
        resWeather.innerHTML = `آب و هوا : <span class="response">${data.weather[0].description}</span>`;
        resWindSpeed.innerHTML = `سرعت باد : <span class="response">${data.wind.speed}</span>`;

        responsContainer.style.flex = "2 0 15%";

        switch (data.weather[0].main) {
          case "Clouds":
            img.src = "img/clouds.png";
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

          case "Clear":
            img.src = "img/clear.png";
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
          case "Rain":
            img.src = "img/rain.png";
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
          case "Snow":
            img.src = "img/snow.png";
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
          case "Haze":
            img.src = "img/haze.png";
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
      } else {
        resCity.innerHTML = `نام شهر : <span class="error">شهر مورد نظر یافت نشد !</span>`;
        resTemp.innerHTML = "دما : - -";
        resWeather.innerHTML = "آب و هوا : - -";
        resHumidity.innerHTML = "رطوبت : - -";
        resWindSpeed.innerHTML = "سرعت باد : - -";
        return;
      }
    });
}
