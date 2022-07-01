/* eslint-disable no-param-reassign */
import * as utils from './utils';
import * as api from './api';

const generateCards = () => {
  const cards = document.querySelectorAll('.extended>.card');
  cards.forEach((card) => {
    card.appendChild(document.createElement('div')).classList.add('day');
    card.appendChild(document.createElement('div')).classList.add('max-temp', 'T');
    card.appendChild(document.createElement('div')).classList.add('min-temp', 'T');
    const icon = card.appendChild(document.createElement('div'));
    icon.classList.add('iconify');
  });
};
generateCards();

function manageTheme({ dt, sunrise, sunset }) {
  // const img = document.querySelector('img');
  if (dt <= sunrise || dt >= sunset) {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
  }
}

function render(data, unit) {
  document.querySelector('#weather-description').textContent = data.current.weather[0].description;
  document.querySelector('#city').textContent = `${data.cityName}, ${data.country}`;
  document.querySelector('#date').textContent = (new Date(data.current.dt * 1000)).toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
  document.querySelector('#temp').textContent = `${utils.kelvinTo(data.current.temp, unit)}°${unit}`;
  document.querySelector('#temp').setAttribute('data-kelvin', data.current.temp);
  document.querySelector('#feels-like .number').textContent = `${utils.kelvinTo(data.current.feels_like, unit)}°${unit}`;
  document.querySelector('#feels-like .number').setAttribute('data-kelvin', data.current.feels_like);
  document.querySelector('#humidity .number').textContent = `${data.current.humidity} %`;
  document.querySelector('#chance-of-rain .number').textContent = `${Math.floor(data.daily[0].pop)} %`;
  document.querySelector('#wind-speed .number').textContent = `${utils.meterPerSecTo(data.current.wind_speed, unit)}${unit === 'C' ? ' km/h' : ' MPH'} `;
  document.querySelector('#wind-speed .number').setAttribute('data-ms', data.current.wind_speed);

  document.querySelectorAll('.card>.day').forEach((day, i) => {
    day.textContent = (new Date(data.daily[i].dt * 1000)).toLocaleDateString(undefined, { weekday: 'long' });
  });
  document.querySelectorAll('.card>.max-temp').forEach((maxTemp, i) => {
    maxTemp.textContent = `${utils.kelvinTo(data.daily[i].temp.max, unit)}°${unit} `;
    maxTemp.setAttribute('data-kelvin', data.daily[i].temp.max);
  });
  document.querySelectorAll('.card>.min-temp').forEach((minTemp, i) => {
    minTemp.textContent = `${utils.kelvinTo(data.daily[i].temp.min, unit)}°${unit} `;
    minTemp.setAttribute('data-kelvin', data.daily[i].temp.min);
  });

  document.querySelectorAll('.card .iconify').forEach((img, i) => {
    img.style.backgroundImage = `url(${api.getIconURL(data.daily[i].weather[0].icon)})`;
    img.style.height = '50px';
    img.style.width = '50px';
    img.style.backgroundSize = 'cover';
  });
  manageTheme(data.current);
}

export default render;
