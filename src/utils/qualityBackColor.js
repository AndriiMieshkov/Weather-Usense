const qualityBackColor = (qualityName) => { 
  switch (qualityName) {
    case 'Good':
      return 'rgba(26, 176, 31, 0.5)';
    case 'Fair':
      return 'rgba(171, 176, 26, 0.5)';
    case 'Moderate':
      return 'rgba(176, 126, 26, 0.5)';
    case 'Poor':
      return 'rgba(176, 26, 26, 0.5)';
    case 'Very Poor':
      return 'rgba(89, 26, 176, 0.5)';
    default:
      return 'rgba(200, 200, 200, 0.5)';
  }
}

export default qualityBackColor;