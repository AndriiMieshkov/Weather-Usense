import React, { useState, useEffect } from 'react';
import { WeatherProvider } from './features/weather/WeatherContext';
import TemperatureDisplay from './features/weather/TemperatureDisplay';
import ForecastDisplay from './features/weather/ForecastDisplay';
import PollutionDisplay from './features/weather/PollutionDisplay';
import SmallDataCubes from './features/weather/SmallDataCubes';
import CitiesList from './features/cities/CitiesList';
import AddCityButton from './features/cities/AddCityButton';
import getBackgroundStyle from './utils/getBackgroundStyle';
import WeatherService from './features/weather/WeatherService';
import PrecipitationMap from './features/map/PrecipitationMap';
import './styles.css';


function App() {
  const [city, setCity] = useState('');
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    const init = async () => {
      let initialCity = 'New York';
      if (navigator.geolocation) {
        try {
          const position = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(resolve, reject));
          initialCity = await WeatherService.getCityFromLatLon(position.coords.latitude, position.coords.longitude) || 'New York';
        } catch { /* empty */ }
      }
      WeatherService.fetchWeatherData(initialCity); 
    };
    init();
  }, []);

  const handleSearch = () => {
    if (city) WeatherService.fetchWeatherData(city);
  };

  return (
      <WeatherProvider>
        {({ weatherData }) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          useEffect(() => {
            if (weatherData) setBackgroundStyle(getBackgroundStyle(weatherData.weather[0].icon));
          }, [weatherData]);

          return (
            <>
              <div className="bg" style={backgroundStyle} />
              <div className="searching">
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city" />
                <button onClick={handleSearch}>Search</button>
                <AddCityButton />
              </div>
              <div className="listButton" onClick={() => setShowList(true)}>
                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {showList && <CitiesList onClose={() => setShowList(false)} />}
              <div className="main">
                <TemperatureDisplay />
                <div className="secondData">
                  <div className="leftContainer">
                    <ForecastDisplay />
                    <div className="differentData">
                      <PollutionDisplay />
                      <SmallDataCubes />
                    </div>
                  </div>
                  <div className="rightContainer">
                    <PrecipitationMap />
                    <div className="bottomContainer">
                      {weatherData && (
                        <>
                          <div className="cube">
                            <div className="boxName">Visibility</div>
                            <div className="cubeData">{(weatherData.visibility / 1000).toFixed(1)} km</div>
                          </div>
                          <div className="cube">
                            <div className="boxName">Pressure</div>
                            <div className="cubeData">{weatherData.main.pressure} hPa</div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </WeatherProvider>
  );
}

export default App;