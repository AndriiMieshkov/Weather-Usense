import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useWeather } from '../weather/WeatherContext';

const precipitationLayer = `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${import.meta.env.VITE_API_KEY}`;
const maptilerLayer = `https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.png?key=${import.meta.env.VITE_MAP_API_KEY}`;

const RecenterMap = ({ lat, lon }) => {
  const map = useMap();

  useEffect(() => {
    if (lat && lon) {
      map.setView([lat, lon], map.getZoom()); 
    }
  }, [lat, lon, map]);

  return null;
};

const PrecipitationMap = () => {
  const { lat, lon } = useWeather();

  if (!lat || !lon) {
    return <div>Loading map…</div>;
  }

  return (
    <div className="topContainer">
      <div className="boxName">Precipitation map</div>
      <div className="weatherMap">
        <MapContainer
          center={[lat, lon]}
          zoom={10}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a>'
            url={maptilerLayer}
          />
          <TileLayer
            url={precipitationLayer}
            opacity={0.6}
          />

          <RecenterMap lat={lat} lon={lon} />
        </MapContainer>
      </div>
    </div>
  );
};

export default PrecipitationMap;
