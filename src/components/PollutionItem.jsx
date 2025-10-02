import React from 'react';

const PollutionItem = ({ componentKey, componentValue, backgroundColor }) => (
  <div className="pollutionItem" style={{ backgroundColor }}>
    <div className="componentKey">{componentKey}</div>
    <div className="componentValue">{componentValue}</div>
  </div>
);

export default PollutionItem;