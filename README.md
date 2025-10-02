# Weather App

This is a **React-based Weather Application** built with Vite, designed to provide real-time weather information for cities worldwide. The app allows users to search for a city's weather, save favorite cities to a list, and cache weather data for faster access. It integrates with the **OpenWeatherMap API** for weather data and **Nominatim** for reverse geocoding. The app also features a dynamic weather map powered by **MapTiler** and **React-Leaflet**.

## Features

- **Search City Weather**: Enter a city name to fetch current weather, forecast, and air pollution data.
- **Save Cities**: Add cities to a favorites list stored in `localStorage` for quick access.
- **Caching**: Weather data is cached for 10 minutes to reduce API calls and improve performance.
- **Dynamic Backgrounds**: Background changes based on current weather conditions (e.g., sunny, rainy, snowy).
- **Weather Map**: Displays an interactive map with precipitation overlays using MapTiler and React-Leaflet.
- **Air Quality**: Shows air pollution levels with color-coded quality indicators.
- **Forecast**: Provides a 5-day weather forecast with 3-hour intervals.
- **Geolocation**: Automatically fetches the user's location on load (with permission) using Nominatim for city lookup.

## Tech Stack

- **React**: Frontend library for building the user interface.
- **Vite**: Fast build tool with Hot Module Replacement (HMR) for development.
- **MapTiler SDK**: For rendering interactive weather maps.
- **React-Leaflet**: For displaying maps with precipitation overlays.
- **OpenWeatherMap API**: Provides weather, forecast, and air pollution data.
- **Nominatim**: Used for reverse geocoding to get city names from coordinates.
- **ESLint**: Ensures code quality with linting rules.
- **LocalStorage**: Stores favorite cities and cached weather data.

## Dependencies

```json
{
  "dependencies": {
    "@maptiler/sdk": "^3.8.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-leaflet": "^5.0.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "vite": "^7.1.7"
  }
}
```

## Getting Started

1. **Clone the Repository**:
   ```bash:disable-run
   git clone <repository-url>
   cd weather-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your OpenWeatherMap API key and MapTiler API key:
   ```env
   VITE_API_KEY=your_openweathermap_api_key
   VITE_MAP_API_KEY=your_maptiler_api_key
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```

6. **Preview the Production Build**:
   ```bash
   npm run preview
   ```

## Core Functionality

### Weather Data Fetching
- The app fetches weather data using the OpenWeatherMap API by first resolving the city to coordinates via the Geocoding API.
- Weather, forecast, and air pollution data are retrieved and cached in `localStorage` for 10 minutes to reduce API calls.
- The app displays:
  - Current temperature, weather condition, min/max temperatures, and feels-like temperature.
  - Additional metrics: cloudiness, sunrise/sunset times, wind speed/direction, precipitation, humidity, visibility, and pressure.
  - A 5-day forecast with 3-hour intervals.
  - Air pollution levels (e.g., SO2, NO2, PM10, PM2.5, O3, CO) with quality indicators.

### City List Management
- Users can add cities to a favorites list, stored in `localStorage`.
- Each saved city displays its name, current weather, temperature, and min/max temperatures.
- Cities can be removed from the list, and clicking a city fetches its latest weather data.

### Caching
- Weather data is cached using `localStorage` with a 10-minute expiration to optimize performance.
- Cache keys are based on city names (lowercase) to ensure consistency.

### Dynamic UI
- Background images or gradients change based on weather conditions (e.g., clear day, rainy night) using a `changeBackgroundColor` logic adapted for React.
- Air pollution levels are color-coded based on quality (Good, Fair, Moderate, Poor, Very Poor).
- Wind direction is calculated as cardinal directions (N, NE, E, etc.) from degrees.

### Weather Map
- An interactive map is rendered using **MapTiler** and **React-Leaflet**, centered on the city's coordinates.
- Precipitation overlays are fetched from OpenWeatherMap's tile server.

### Geolocation
- On load, the app attempts to get the user's location via `navigator.geolocation`.
- The coordinates are reverse-geocoded using Nominatim to fetch the city name, defaulting to "New York" if geolocation fails or is denied.

## ESLint Configuration
The project uses ESLint for code quality. To expand the configuration for production (e.g., with TypeScript), refer to the [TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) and integrate [`typescript-eslint`](https://typescript-eslint.io).

## React Compiler
The React Compiler is not enabled by default due to performance impacts. To enable it, follow the [React Compiler documentation](https://react.dev/learn/react-compiler/installation).

## Notes
- Ensure you have a valid OpenWeatherMap API key in your `.env` file.
- The app uses Nominatim for reverse geocoding, which has usage policies (e.g., rate limits). Ensure compliance for production use.
- MapTiler requires an API key for production; configure it in your environment variables if needed.
- The app is optimized for both desktop and mobile devices, with responsive design considerations.

## License
This project is private and intended for personal or internal use. Contact the repository owner for licensing details.
```

