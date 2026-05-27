const button = document.querySelector('button');
const input = document.querySelector('input');
const tempCard = document.querySelector('.temp-card')
const cityp = document.querySelector('.city');
const temp = document.querySelector('.temp');
const wc = document.querySelector('.weather-conditions');
const image = document.querySelector('img');
const tempBox = document.querySelector('.temp-box');
const error = document.querySelector('.error');

button.addEventListener('click', function() {
  if (input.value.length === 0) {
    return;
  }
  getData(input.value);
 
});

input.addEventListener('keydown', function(event) {
    if (input.value.length === 0) {
    return;
  }
  
  if (event.key === 'Enter') {
    getData(input.value);
  }
})



async function getData(city) {

  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cdf483543dc16cf874bd24a9bd0e6920&units=imperial`);

  const data = await response.json();
  

  if (data.cod === "404") {
    tempCard.style.display = 'none';
    error.innerHTML = 'City Not Found';
    return;
  } else {
      error.innerHTML = '';
  }
  


  tempCard.style.display = 'flex';

  cityp.innerHTML = `${city}`;

  temp.innerHTML = `${Math.round(data.main.temp)} °F`;

  wc.innerHTML = `${data.weather[0].description.toUpperCase()}`;

  image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  
}