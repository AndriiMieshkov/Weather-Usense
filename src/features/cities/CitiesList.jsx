import React, { useState, useEffect } from 'react';
import CityItem from '../../components/CityItem';
import WeatherService from '../weather/WeatherService';

const CitiesList = ({ onClose }) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const storedCities = JSON.parse(localStorage.getItem('weatherData') || '[]');
    setCities(storedCities);
  }, []);

  const handleRemoveCity = (index) => {
    const updatedCities = [...cities];
    updatedCities.splice(index, 1);
    setCities(updatedCities);
    localStorage.setItem('weatherData', JSON.stringify(updatedCities));
  };

  const handleCityClick = (cityName) => {
    WeatherService.fetchWeatherData(cityName);
  };

  return (
    <div className="list">
      <button
        type="button"
        className="escape"
        onClick={onClose}
        aria-label="Close list"
        title="Close"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
          <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="items">
        {cities.map((item, index) => (
          <CityItem
            key={index}
            city={item}
            isLast={index === cities.length - 1}
            onClick={() => handleCityClick(item.name)}
            onRemove={() => handleRemoveCity(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CitiesList;