import React from 'react';
import { useWeather } from './WeatherContext';
import ForecastItem from '../../components/ForecastItem';
import formatTime from '../../utils/formatTime';

const ForecastDisplay = () => {
  const { forecastData } = useWeather();

  return (
    <div className="dayForecastData">
      <div className="dayForecast">
        {forecastData.map((forecast, index) => (
          <ForecastItem
            key={index}
            time={formatTime(forecast.dt)}
            icon={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
            temperature={Math.round(forecast.main.temp)}
          />
        ))}
      </div>
    </div>
  );
};

export default ForecastDisplay;