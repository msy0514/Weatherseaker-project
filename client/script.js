// 진영이가 작성한 검색 엔진을 모듈화하여 가져옴
import { translateName } from './searchengine.js';

// API 키
const API_KEY = 'c6bdc90e5154c27e8256ca36fbc2553e'; 

// 검색 창과 검색 버튼의 DOM
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');


// 비동기적으로 Fetch API Request
const request = async (url) => {
    const res = await fetch(url);
    return res.ok ? res.json() : Promise.reject({error: 500});
}

// 날씨 정보를 가져오면 날씨 정보를 보여주는 카드에 정보 보여주기
const updateWeatherCard = (res, container) => {
    const weatherCard = document.createElement('div');
    weatherCard.classList.add('weather-card');

    // 날씨 아이콘
    const weatherMain = document.createElement('img');
    weatherMain.classList.add('weather-main');
    weatherMain.src = `http://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`

    // 날씨 상세정보 - 기온, 습도 등
    const weatherInfo = document.createElement('p');
    weatherInfo.innerHTML = `<strong>${res.name}</strong><br><strong>기온🌡</strong> ${(res.main.temp - 273.15).toFixed(1)}℃ || <strong>습도💧</strong> ${res.main.humidity}%`;
    
    // 
    weatherCard.appendChild(weatherMain);
    weatherCard.appendChild(weatherInfo);

    container.insertBefore(weatherCard, container.firstChild);
    if(container.childElementCount >= 3){
        container.removeChild(container.lastChild);
    }
}

// Fetch한 API 값을 얻어 UI에 전달
const getWeatherInfo = async (area, container) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${API_KEY}`
        const res = await request(url);
        updateWeatherCard(res, container);
    } catch (err) {
        console.log(err);
    }
}

// Search 버튼을 클릭하거나 Enter 키를 누르면 검색 실행
const searchWeather = (e) => {
    e.preventDefault();
    const area = translateName(searchInput.value);
    const container = document.querySelector('.weather-container');
    getWeatherInfo(area, container);
    searchInput.value = '';
}

searchBtn.addEventListener('click', searchWeather);
document.addEventListener('keypress', (e) => { if (e.key === 'Enter') searchWeather(e) })