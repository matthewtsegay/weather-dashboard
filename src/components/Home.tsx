import React, { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchPopularWeather } from "../redux/weatherSlice";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WeatherAnimations from "./WeatherAnimations";
import WeatherIcon from "./WeatherIcon";
import "../styles/home.css";

// Sample cities data removed in favor of real API data

const Home: React.FC = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      navigate(`/weather/${city.trim()}`);
    }
  };

  const dispatch = useDispatch<AppDispatch>();
  const { popularCities, popularLoading } = useSelector((state: RootState) => state.weather as any);

  // Fetch popular cities on mount
  useEffect(() => {
    const cities = ["London", "New York", "Tokyo", "Paris", "Sydney", "Dubai"];
    dispatch(fetchPopularWeather(cities));
  }, [dispatch]);

  const handleCityClick = (cityName: string) => {
    navigate(`/weather/${cityName}`);
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        {/* Watercolor Cloud Decorations */}
        <div className="cloud-decorations">
          <div className="cloud cloud-1">☁️</div>
          <div className="cloud cloud-2">☁️</div>
          <div className="cloud cloud-3">☁️</div>
          <div className="cloud cloud-4">⛅</div>
          <div className="cloud cloud-5">☁️</div>
          <div className="cloud cloud-6">☁️</div>
        </div>

        <WeatherAnimations weatherCondition="clear" />
        <div className="home-content">
          {/* Compact Search Card */}
          <div className="home-card">
            <h1 className="home-title">Weather Forecast</h1>
            <p className="home-subtitle">Discover weather conditions for any city</p>

            <form onSubmit={handleSubmit} className="search-form">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Enter city name..."
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="search-input"
                  aria-label="City name"
                />
                <button
                  type="submit"
                  className="search-button"
                  disabled={!city.trim()}
                  aria-label="Search weather"
                >
                  <span>🔍</span>
                  <span>Search</span>
                </button>
              </div>
            </form>
          </div>

          {/* Popular Cities - Outside the card */}
          <div className="sample-cities">
            <h2 className="sample-cities-title">Popular Cities</h2>

            {popularLoading ? (
              <div className="cities-grid">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="city-card skeleton-card">
                    <div className="skeleton-icon"></div>
                    <div className="skeleton-text"></div>
                    <div className="skeleton-text-sm"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="cities-grid">
                {popularCities.map((city: any, index: number) => (
                  <div
                    key={city.name}
                    className="city-card"
                    onClick={() => handleCityClick(city.name)}
                    role="button"
                    tabIndex={0}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleCityClick(city.name);
                      }
                    }}
                  >
                    <WeatherIcon code={city.weather[0].icon} className="weather-icon-lg" />
                    <h3 className="city-name">{city.name}</h3>
                    <p className="city-temp">{Math.round(city.main.temp)}°C</p>
                    <p className="city-condition">
                      {city.weather[0].main}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
