import React from 'react';

const CityItem = ({ city, isLast, onClick, onRemove }) => {
  const adjustedTimestamp = Date.now() + (city.time * 1000);
  const adjustedTime = new Date(adjustedTimestamp).toLocaleTimeString('en-US', {
    timeZone: 'UTC',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="cityItem" style={{ borderBottom: isLast ? 'none' : '2px solid grey' }}>
      <div className="leftPart" onClick={onClick}>
        <h2>{city.name}</h2>
        <h3>{adjustedTime}</h3>
        <h4>{city.weather}</h4>
      </div>
      <div className="rightPart">
        <h1>{city.temp}</h1>
        <h4>{city.maxMin}</h4>
      </div>
      <div className="remove" onClick={onRemove}>
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
          <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

export default CityItem;