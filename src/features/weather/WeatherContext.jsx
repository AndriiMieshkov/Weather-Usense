import React, { createContext, useState, useContext } from 'react';
import WeatherService from './WeatherService';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [cityName, setCityName] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [pollutionData, setPollutionData] = useState(null);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [timeZone, setTimeZone] = useState(0);

  WeatherService.setSetters({ setCityName, setWeatherData, setForecastData, setPollutionData, setLat, setLon, setTimeZone });

  return (
    <WeatherContext.Provider value={{ cityName, weatherData, forecastData, pollutionData, lat, lon, timeZone }}>
      {typeof children === 'function' ? children({ cityName, weatherData, forecastData, pollutionData, lat, lon, timeZone }) : children}
    </WeatherContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useWeather = () => useContext(WeatherContext);