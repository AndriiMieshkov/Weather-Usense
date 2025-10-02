import React from 'react';

const Cube = ({ name, data, bottomData }) => (
  <div className="cube">
    <div className="boxName">{name}</div>
    <div className="cubeData">{data}</div>
    {bottomData && <div className="bottomCubeData">{bottomData}</div>}
  </div>
);

export default Cube;