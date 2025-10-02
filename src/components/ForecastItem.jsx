import React from 'react';

const ForecastItem = ({ time, icon, temperature }) => (
  <div className="forecastItem">
    <div className="forecastTime">{time}</div>
    <img src={icon} alt="Weather Icon" className="forecastIcon" />
    <div className="forecastTemperature">{temperature}°</div>
  </div>
);

export default ForecastItem;