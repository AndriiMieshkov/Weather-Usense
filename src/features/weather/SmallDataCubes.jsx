import React from 'react';
import { useWeather } from './WeatherContext';
import Cube from '../../components/Cube';
import formatTime from '../../utils/formatTime';
import calculateCardinalDirection from '../../utils/calculateDirection';

const SmallDataCubes = () => {
  const { weatherData } = useWeather();
  if (!weatherData) return null;

  return (
    <div className="smallDatas">
      <Cube name="Cloudiness" data={`${weatherData.clouds.all}%`} />
      <Cube name="Sunset" data={formatTime(weatherData.sys.sunset)} bottomData={`Sunrise: ${formatTime(weatherData.sys.sunrise)}`} />
      <Cube name="Wind" data={`${weatherData.wind.speed} mps`} bottomData={calculateCardinalDirection(weatherData.wind.deg)} />
      <Cube name="Precipitation" data={`${weatherData.rain?.['1h'] || weatherData.snow?.['1h'] || 0} mm`} />
      <Cube name="Feels like" data={`${Math.round(weatherData.main.feels_like)}°`} />
      <Cube name="Humidity" data={`${weatherData.main.humidity}%`} />
    </div>
  );
};

export default SmallDataCubes;