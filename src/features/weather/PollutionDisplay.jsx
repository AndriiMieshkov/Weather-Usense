import React from 'react';
import { useWeather } from './WeatherContext';
import PollutionItem from '../../components/PollutionItem';
import qualityPollution from '../../utils/qualityPollution';
import qualityBackColor from '../../utils/qualityBackColor';

const PollutionDisplay = () => {
  const { pollutionData } = useWeather();

  if (!pollutionData) return null;

  return (
    <div className="pollutionData">
      <div className="boxName">Pollution data</div>
      <div className="pollution">
        {Object.entries(pollutionData).map(([key, value]) => {
          const qualityName = qualityPollution(key, value);
          const qualityColor = qualityBackColor(qualityName);
          return (
            <PollutionItem
              key={key}
              componentKey={key === 'pm2_5' ? 'pm2.5' : key.toUpperCase()}
              componentValue={value}
              backgroundColor={qualityColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PollutionDisplay;