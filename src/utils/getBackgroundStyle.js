const getBackgroundStyle = (icon) => {
  let backgroundImage = 'linear-gradient(115deg, #63a4ff 10%, #227076 80%)';
  switch (icon) {
    case '01d':
      backgroundImage = 'linear-gradient(115deg, #63a4ff 10%, #227076 80%)';
      break;
    case '01n':
      backgroundImage = 'url("images/clear_n.jpeg")';
      break;
    case '02d':
      backgroundImage = 'url("images/few_clouds_d.jpeg")';
      break;
    case '02n':
      backgroundImage = 'url("images/few_clouds_n.jpeg")';
      break;
    case '03d':
      backgroundImage = 'url("images/clouds_d.jpeg")';
      break;
    case '03n':
      backgroundImage = 'url("images/clouds_n.jpeg")';
      break;
    case '04d':
      backgroundImage = 'url("images/broken_d.jpeg")';
      break;
    case '04n':
      backgroundImage = 'url("images/broken_d.jpeg")';
      break;
    case '09d':
      backgroundImage = 'url("images/drizzle_d.webp")';
      break;
    case '09n':
      backgroundImage = 'url("images/drizzle_n.jpeg")';
      break;
    case '10d':
      backgroundImage = 'url("images/rain_d.jpeg")';
      break;
    case '10n':
      backgroundImage = 'url("images/rain_n.png")';
      break;
    case '11d':
      backgroundImage = 'url("images/thunder_d.jpeg")';
      break;
    case '11n':
      backgroundImage = 'url("images/thunder_n.jpeg")';
      break;
    case '13d':
      backgroundImage = 'url("images/snow_d.jpeg")';
      break;
    case '13n':
      backgroundImage = 'url("images/snow_n.jpeg")';
      break;
    case '50d':
      backgroundImage = 'url("images/mist_d.jpeg")';
      break;
    case '50n':
      backgroundImage = 'url("images/mist_n.jpeg")';
      break;
    default:
      backgroundImage = 'linear-gradient(115deg, #63a4ff 10%, #227076 80%)';
  }
  return {
    backgroundImage,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
};

export default getBackgroundStyle;