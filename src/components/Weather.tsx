import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchWeather } from "../redux/weatherSlice";
import { useTheme } from "../context/ThemeContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WeatherAnimations from "./WeatherAnimations";
import { getWeatherGradient } from "../utils/weatherGradients";
import "../styles/weather.css";

interface WeatherData {
  name: string;
  main: { 
    temp: number; 
    humidity: number; 
    feels_like: number;
    pressure: number;
  };
  wind: { speed: number; deg: number };
  weather: Array<{ 
    icon: string; 
    main: string;
    description: string;
  }>;
  sys: {
    sunrise: number;
    sunset: number;
  };
}

const Weather: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { theme } = useTheme();
  const { data, loading, error } = useSelector((state: RootState) => state.weather as {
    data: WeatherData | null;
    loading: boolean;
    error: string | null;
  });
  
  const [inputError, setInputError] = useState<string | null>(null);

  useEffect(() => {
    if (city) {
      dispatch(fetchWeather(city));
      setInputError(null);
    } else {
      setInputError("Please enter a valid city name.");
    }
  }, [dispatch, city]);

  const weatherCondition = data?.weather[0]?.main || "";
  const gradient = getWeatherGradient(weatherCondition, theme === "dark");

  return (
    <>
      <Navbar />
      <div 
        className="weather-container"
        style={{ background: gradient.gradient }}
      >
        <WeatherAnimations weatherCondition={weatherCondition} />
        
        <div className="weather-content">
          {loading && (
            <div className="loading-container">
              <div className="modern-spinner"></div>
              <p className="loading-text">Loading weather data...</p>
            </div>
          )}

          {error && !loading && (
            <div className="error-card">
              <div className="error-icon">⚠️</div>
              <h2>Oops! Something went wrong</h2>
              <p className="error-message">{error}</p>
              {error.includes("API key") && (
                <div className="error-instructions">
                  <p><strong>How to fix:</strong></p>
                  <ol>
                    <li>Create a <code>.env</code> file in the <code>weather-dashboard</code> folder</li>
                    <li>Add: <code>REACT_APP_WEATHER_API_KEY=your_api_key_here</code></li>
                    <li>Get your free API key from <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">openweathermap.org</a></li>
                    <li>Restart the development server</li>
                  </ol>
                </div>
              )}
              <Link to="/" className="back-button">
                Try Again
              </Link>
            </div>
          )}

          {inputError && !loading && !error && (
            <div className="error-card">
              <div className="error-icon">📍</div>
              <p>{inputError}</p>
              <Link to="/" className="back-button">
                Go Back
              </Link>
            </div>
          )}

          {data && !loading && (
            <>
              <Link to="/" className="back-link" aria-label="Back to home">
                ← Back to Search
              </Link>
              
              {!process.env.REACT_APP_WEATHER_API_KEY && (
                <div className="demo-banner">
                  <span>🎭 Demo Mode</span> - Get your free API key from{" "}
                  <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">
                    openweathermap.org
                  </a>
                </div>
              )}
              
              <div className="weather-card">
                <div className="weather-header">
                  <h1 className="city-name">{data.name}</h1>
                  <p className="weather-description">
                    {data.weather[0]?.description?.charAt(0).toUpperCase() + data.weather[0]?.description?.slice(1)}
                  </p>
                </div>

                <div className="weather-main">
                  <div className="temperature-section">
                    <div className="temperature">
                      {Math.round(data.main.temp)}°
                    </div>
                    <div className="temperature-unit">C</div>
                  </div>
                  <img
                    src={`https://openweathermap.org/img/w/${data.weather[0]?.icon}.png`}
                    alt={data.weather[0]?.description || "Weather icon"}
                    className="weather-icon-large"
                  />
                </div>

                <div className="weather-details">
                  <div className="detail-item">
                    <div className="detail-icon">💧</div>
                    <div className="detail-content">
                      <div className="detail-label">Humidity</div>
                      <div className="detail-value">{data.main.humidity}%</div>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon">💨</div>
                    <div className="detail-content">
                      <div className="detail-label">Wind Speed</div>
                      <div className="detail-value">{data.wind.speed} m/s</div>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon">🌡️</div>
                    <div className="detail-content">
                      <div className="detail-label">Feels Like</div>
                      <div className="detail-value">{Math.round(data.main.feels_like)}°C</div>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon">📊</div>
                    <div className="detail-content">
                      <div className="detail-label">Pressure</div>
                      <div className="detail-value">{data.main.pressure} hPa</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Weather;