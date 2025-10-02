import React from 'react';
import { useWeather } from '../weather/WeatherContext';

const AddCityButton = () => {
  const { cityName, weatherData, lat, lon, timeZone } = useWeather();

  const handleAddCity = () => {
    if (!weatherData) return;

    const existingData = JSON.parse(localStorage.getItem('weatherData') || '[]');
    const dataExists = existingData.some((item) => item.lat === lat && item.lon === lon);
    if (dataExists) return;

    const newCity = {
      name: cityName,
      time: timeZone,
      weather: weatherData.weather[0].main,
      temp: Math.round(weatherData.main.temp) + '°',
      maxMin: `Max:${Math.round(weatherData.main.temp_max)}° Min:${Math.round(weatherData.main.temp_min)}°`,
      lat,
      lon,
    };

    const updatedData = [...existingData, newCity];
    localStorage.setItem('weatherData', JSON.stringify(updatedData));
  };

  return (
    <div className="adding" onClick={handleAddCity}>
        <svg width="15px" viewBox="0 0 24 24" fill="none">
          <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      Add
    </div>
  );
};

export default AddCityButton;