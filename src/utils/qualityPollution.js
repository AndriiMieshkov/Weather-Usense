const qualityPollution = (key, value) => {
  switch (key) {
    case 'so2':
      if (value < 20) return 'Good';
      if (value < 80) return 'Fair';
      if (value < 250) return 'Moderate';
      if (value < 350) return 'Poor';
      return 'Very Poor';
    
    case 'no2':
      if (value < 40) return 'Good';
      if (value < 70) return 'Fair';
      if (value < 150) return 'Moderate';
      if (value < 200) return 'Poor';
      return 'Very Poor';
    
    case 'pm10':
      if (value < 20) return 'Good';
      if (value < 50) return 'Fair';
      if (value < 100) return 'Moderate';
      if (value < 200) return 'Poor';
      return 'Very Poor';
    
    case 'pm2_5':
      if (value < 10) return 'Good';
      if (value < 25) return 'Fair';
      if (value < 50) return 'Moderate';
      if (value < 75) return 'Poor';
      return 'Very Poor';
    
    case 'o3':
      if (value < 60) return 'Good';
      if (value < 100) return 'Fair';
      if (value < 140) return 'Moderate';
      if (value < 180) return 'Poor';
      return 'Very Poor';
    
    case 'co':
      if (value < 4400) return 'Good';
      if (value < 9400) return 'Fair';
      if (value < 12400) return 'Moderate';
      if (value < 15400) return 'Poor';
      return 'Very Poor';
    
    default:
      return 'Unknown';
  }
}

export default qualityPollution;