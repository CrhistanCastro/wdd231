const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const description = document.querySelector('#description');



const lat = "51.01529927158975"
const long = "10.194711272349592"
const theKey = "41e49e1b595c9d3e96046ef337c2655a";

const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${theKey}&units=metric`;
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayResults(data) {
    description.innerHTML = data.weather[0].description;
    currentTemp.innerHTML = `${data.main.temp}&deg C`;
    const wIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', wIcon);
    weatherIcon.setAttribute('alt', data.weather[0].description)
}
