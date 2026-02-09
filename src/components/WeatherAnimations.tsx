import React from "react";
import "../styles/weather-animations.css";

interface WeatherAnimationsProps {
  weatherCondition?: string;
}

const WeatherAnimations: React.FC<WeatherAnimationsProps> = ({ weatherCondition }) => {
  const condition = weatherCondition?.toLowerCase() || "";

  if (condition.includes("clear") || condition.includes("sun")) {
    return (
      <div className="weather-animation-container">
        <div className="sun-animation">
          <div className="sun"></div>
          <div className="sun-rays"></div>
        </div>
      </div>
    );
  }

  if (condition.includes("rain") || condition.includes("drizzle")) {
    return (
      <div className="weather-animation-container">
        <div className="rain-animation">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="raindrop" style={{ left: `${(i * 5) % 100}%`, animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
      </div>
    );
  }

  if (condition.includes("cloud") || condition.includes("overcast")) {
    return (
      <div className="weather-animation-container">
        <div className="cloud-animation">
          <div className="cloud cloud-1"></div>
          <div className="cloud cloud-2"></div>
          <div className="cloud cloud-3"></div>
        </div>
      </div>
    );
  }

  if (condition.includes("snow")) {
    return (
      <div className="weather-animation-container">
        <div className="snow-animation">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="snowflake" style={{ left: `${(i * 3.33) % 100}%`, animationDelay: `${i * 0.1}s` }}>❄</div>
          ))}
        </div>
      </div>
    );
  }

  if (condition.includes("thunder") || condition.includes("storm")) {
    return (
      <div className="weather-animation-container">
        <div className="storm-animation">
          <div className="lightning"></div>
          {[...Array(25)].map((_, i) => (
            <div key={i} className="raindrop heavy" style={{ left: `${(i * 4) % 100}%`, animationDelay: `${i * 0.08}s` }}></div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default WeatherAnimations;
