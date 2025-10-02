const apiKey = import.meta.env.VITE_API_KEY;
const weatherApiUrl = "https://api.openweathermap.org/";

let setters = {};

const setSetters = (newSetters) => {
  setters = newSetters;
};

const checkCache = (cityName) => {
  const cached = localStorage.getItem(`weatherCache_${cityName.toLowerCase()}`);
  if (cached) {
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp < 10 * 60 * 1000) {
      return data;
    }
  }
  return null;
};

const saveCache = (cityName, data) => {
  localStorage.setItem(`weatherCache_${cityName.toLowerCase()}`, JSON.stringify({ data, timestamp: Date.now() }));
};

const fetchWeatherData = async (cityName) => {
  if (!cityName) return;

  const cachedData = checkCache(cityName);
  if (cachedData) {
    setters.setCityName(cityName);
    setters.setWeatherData(cachedData.weather);
    setters.setForecastData(cachedData.forecast.list);
    setters.setPollutionData(cachedData.pollution.list[0].components);
    setters.setLat(cachedData.lat);
    setters.setLon(cachedData.lon);
    setters.setTimeZone(cachedData.weather.timezone);
    return;
  }

  const geoApiUrl = `${weatherApiUrl}geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;
  
  try {
    const geoResponse = await fetch(geoApiUrl);
    if (!geoResponse.ok) {
      throw new Error('Network response was not ok');
    }
    const geoData = await geoResponse.json();

    cityName = geoData[0].name;
    const latitude = geoData[0].lat;
    const longitude = geoData[0].lon;

    const weatherUrl = `${weatherApiUrl}data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    const weatherResponse = await fetch(weatherUrl);
    if (!weatherResponse.ok) {
      throw new Error('Network response was not ok');
    }
    const weather = await weatherResponse.json();

    const forecastUrl = `${weatherApiUrl}data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    const forecastResponse = await fetch(forecastUrl);
    if (!forecastResponse.ok) {
      throw new Error('Network response was not ok');
    }
    const forecast = await forecastResponse.json();

    const pollutionUrl = `${weatherApiUrl}data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    const pollutionResponse = await fetch(pollutionUrl);
    if (!pollutionResponse.ok) {
      throw new Error('Network response was not ok');
    }
    const pollution = await pollutionResponse.json();

    saveCache(cityName, {weather, forecast, pollution, lat: latitude, lon: longitude });

    setters.setCityName(cityName);
    setters.setWeatherData(weather);
    setters.setForecastData(forecast.list);
    setters.setPollutionData(pollution.list[0].components);
    setters.setLat(latitude);
    setters.setLon(longitude);
    setters.setTimeZone(weather.timezone);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};

const getCityFromLatLon = async (latitude, longitude) => {
  const timeout = 8000;

  if (typeof latitude !== 'number' || typeof longitude !== 'number' ||
      Number.isNaN(latitude) || Number.isNaN(longitude)) {
    throw new TypeError('latitude and longitude must be numbers');
  }

  const params = new URLSearchParams({
    format: 'jsonv2',    
    lat: String(latitude),
    lon: String(longitude),
    addressdetails: '1',     // include address components
    zoom: '10'               // zoom level: 10 is typically city/region
  });

  const url = `https://nominatim.openstreetmap.org/reverse?${params.toString()}`;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
      signal: controller.signal
    });
    clearTimeout(id);

    if (!res.ok) {
      return null;
    }

    const data = await res.json();
    const addr = data.address || {};

    const city =
      addr.city ||
      addr.town ||
      addr.village ||
      addr.municipality ||
      addr.county || 
      null;

    if (city) return city;

    if (data.display_name) {
      return data.display_name.split(',')[0].trim();
    }

    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
};


export default { fetchWeatherData, getCityFromLatLon, setSetters };