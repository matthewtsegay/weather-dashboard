export interface WeatherGradient {
  gradient: string;
  primaryColor: string;
  secondaryColor: string;
}

export const getWeatherGradient = (weatherCode?: string, isDark: boolean = false): WeatherGradient => {
  // OpenWeatherMap weather condition codes mapping
  const code = weatherCode?.toLowerCase() || "";
  
  if (isDark) {
    // Dark mode gradients
    if (code.includes("clear") || code.includes("sun")) {
      return {
        gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%)",
        primaryColor: "#2a5298",
        secondaryColor: "#1e3c72",
      };
    }
    if (code.includes("cloud")) {
      return {
        gradient: "linear-gradient(135deg, #2c3e50 0%, #4a5568 50%, #2c3e50 100%)",
        primaryColor: "#4a5568",
        secondaryColor: "#2c3e50",
      };
    }
    if (code.includes("rain") || code.includes("drizzle")) {
      return {
        gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        primaryColor: "#16213e",
        secondaryColor: "#0f3460",
      };
    }
    if (code.includes("snow")) {
      return {
        gradient: "linear-gradient(135deg, #2d3436 0%, #636e72 50%, #2d3436 100%)",
        primaryColor: "#636e72",
        secondaryColor: "#2d3436",
      };
    }
    if (code.includes("thunder") || code.includes("storm")) {
      return {
        gradient: "linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #0c0c0c 100%)",
        primaryColor: "#1a1a2e",
        secondaryColor: "#0c0c0c",
      };
    }
    if (code.includes("mist") || code.includes("fog") || code.includes("haze")) {
      return {
        gradient: "linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%)",
        primaryColor: "#34495e",
        secondaryColor: "#2c3e50",
      };
    }
    // Default dark gradient
    return {
      gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #1e3c72 100%)",
      primaryColor: "#2a5298",
      secondaryColor: "#1e3c72",
    };
  } else {
    // Light mode gradients
    if (code.includes("clear") || code.includes("sun")) {
      return {
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        primaryColor: "#667eea",
        secondaryColor: "#f093fb",
      };
    }
    if (code.includes("cloud")) {
      return {
        gradient: "linear-gradient(135deg, #bdc3c7 0%, #95a5a6 50%, #7f8c8d 100%)",
        primaryColor: "#95a5a6",
        secondaryColor: "#7f8c8d",
      };
    }
    if (code.includes("rain") || code.includes("drizzle")) {
      return {
        gradient: "linear-gradient(135deg, #74b9ff 0%, #0984e3 50%, #2d3436 100%)",
        primaryColor: "#0984e3",
        secondaryColor: "#2d3436",
      };
    }
    if (code.includes("snow")) {
      return {
        gradient: "linear-gradient(135deg, #dfe6e9 0%, #b2bec3 50%, #636e72 100%)",
        primaryColor: "#b2bec3",
        secondaryColor: "#636e72",
      };
    }
    if (code.includes("thunder") || code.includes("storm")) {
      return {
        gradient: "linear-gradient(135deg, #2d3436 0%, #636e72 50%, #2d3436 100%)",
        primaryColor: "#636e72",
        secondaryColor: "#2d3436",
      };
    }
    if (code.includes("mist") || code.includes("fog") || code.includes("haze")) {
      return {
        gradient: "linear-gradient(135deg, #dfe6e9 0%, #b2bec3 50%, #95a5a6 100%)",
        primaryColor: "#b2bec3",
        secondaryColor: "#95a5a6",
      };
    }
    // Default light gradient
    return {
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
      primaryColor: "#667eea",
      secondaryColor: "#f093fb",
    };
  }
};
