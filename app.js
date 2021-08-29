const searchWather = () => {
  const input = document.getElementById("input");
  const inputText = input.value;
  input.value = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=566c9f5697f2c9a5ac9249fb45992dcf&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayWeather(data));
};
const displayWeather = (data) => {
  const countryName = document.getElementById("countryName");
  countryName.innerText = data.name;
  const countryTemp = document.getElementById("countryTemp");
  const countryTempText = data.main;
  countryTemp.innerText = countryTempText.temp;
  const countryMain = document.getElementById("countryMain");
  const countryMainText = data.weather[0];
  countryMain.innerText = countryMainText.main;
};
