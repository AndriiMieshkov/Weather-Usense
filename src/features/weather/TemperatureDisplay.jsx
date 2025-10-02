import React from 'react';
import { useWeather } from './WeatherContext';

const TemperatureDisplay = () => {
  const { cityName, weatherData } = useWeather();

  if (!weatherData) return null;

  return (
    <div className="temperature">
      <p className="hight1">{Math.round(weatherData.main.temp)}°</p>
      <p className="hight2">{cityName}</p>
      <p className="hight3">{weatherData.weather[0].main}</p>
      <p className="hight4">
        Max:{Math.round(weatherData.main.temp_max)}° Min:{Math.round(weatherData.main.temp_min)}°
      </p>
    </div>
  );
};

export default TemperatureDisplay;