import './style.scss';
import * as api from './api';
import * as utils from './utils';
import render from './DOM';

let unit = 'C';
const unitChanger = document.querySelector('#unit-changer');
unitChanger.textContent = `Display in °${unit === 'C' ? 'F' : 'C'}`;

async function getWeather(city) {
  const formatedCity = utils.formatCityName(city);
  if (formatedCity) {
    const weather = await utils.handleError(api.getWeather)(formatedCity);
    render(weather, unit);
  }
}

const searchButton = document.querySelector('#search-input');
searchButton.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    getWeather(e.target.value);
    e.target.value = '';
  }
});
document.querySelector('.search-box').addEventListener('click', () => {
  getWeather(searchButton.value);
  searchButton.value = '';
});

function toggleUnits() {
  const fields = document.querySelectorAll('.T');
  unitChanger.textContent = `Display in °${unit}`;
  unit = unit === 'C' ? 'F' : 'C';
  fields.forEach((field) => {
    const kelvin = Number(field.getAttribute('data-kelvin'));
    // eslint-disable-next-line no-param-reassign
    field.textContent = `${utils.kelvinTo(kelvin, unit)}°${unit}`;
  });

  const wind = document.querySelector('#wind-speed .number');
  wind.textContent = `${utils.meterPerSecTo(wind.getAttribute('data-ms'), unit)}${unit === 'C' ? ' km/h' : ' MPH'}`;
}
const unitsButton = document.querySelector('#unit-changer');
unitsButton.addEventListener('click', toggleUnits);

getWeather('Tucuman');
