import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY; // Store in .env file

// Demo data for when API key is missing
const getDemoWeatherData = (city: string) => {
  const demoData = {
    name: city.charAt(0).toUpperCase() + city.slice(1),
    main: {
      temp: Math.floor(Math.random() * 15) + 15, // 15-30°C
      feels_like: Math.floor(Math.random() * 15) + 15,
      humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
      pressure: Math.floor(Math.random() * 50) + 1000, // 1000-1050 hPa
    },
    wind: {
      speed: (Math.random() * 5 + 2).toFixed(1), // 2-7 m/s
      deg: Math.floor(Math.random() * 360),
    },
    weather: [
      {
        icon: "01d",
        main: "Clear",
        description: "clear sky",
      },
    ],
    sys: {
      sunrise: Date.now() / 1000 - 3600,
      sunset: Date.now() / 1000 + 36000,
    },
  };

  // Randomize weather condition for demo
  const conditions = ["Clear", "Clouds", "Rain", "Snow"];
  const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
  const icons: { [key: string]: string } = {
    Clear: "01d",
    Clouds: "03d",
    Rain: "10d",
    Snow: "13d",
  };
  const descriptions: { [key: string]: string } = {
    Clear: "clear sky",
    Clouds: "scattered clouds",
    Rain: "light rain",
    Snow: "light snow",
  };

  demoData.weather[0] = {
    icon: icons[randomCondition],
    main: randomCondition,
    description: descriptions[randomCondition],
  };

  return demoData;
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string, { rejectWithValue }) => {
    try {
      if (!API_KEY) {
        // Return demo data instead of error when API key is missing
        console.warn("⚠️ API key missing - Using demo data. Get your free API key from https://openweathermap.org/api");
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        return getDemoWeatherData(city);
      }

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      return response.data;
    } catch (error: any) {
      if (error.response) {
        // Handle different HTTP status codes
        const status = error.response.status;
        const message = error.response.data?.message || error.message;

        if (status === 401) {
          // If API key is invalid, use demo data
          console.warn("⚠️ Invalid API key - Using demo data. Please check your REACT_APP_WEATHER_API_KEY in the .env file.");
          await new Promise(resolve => setTimeout(resolve, 800));
          return getDemoWeatherData(city);
        } else if (status === 404) {
          return rejectWithValue(`City "${city}" not found. Please check the spelling and try again.`);
        } else if (status === 429) {
          return rejectWithValue("Too many requests. Please wait a moment and try again.");
        } else {
          return rejectWithValue(`Error: ${message || "Failed to fetch weather data"}`);
        }
      } else if (error.request) {
        return rejectWithValue("Network error. Please check your internet connection.");
      } else {
        return rejectWithValue("An unexpected error occurred. Please try again.");
      }
    }
  }
);

// Types for the state
interface WeatherState {
  data: any | null;
  loading: boolean;
  error: string | null;
  popularCities: any[];
  popularLoading: boolean;
}

export const fetchPopularWeather = createAsyncThunk(
  "weather/fetchPopularWeather",
  async (cities: string[], { rejectWithValue }) => {
    try {
      if (!API_KEY) {
        // Return demo data if no key
        return cities.map(city => getDemoWeatherData(city));
      }

      const requests = cities.map(city =>
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      );

      const responses = await Promise.all(requests);
      return responses.map(response => response.data);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    loading: false,
    error: null,
    popularCities: [],
    popularLoading: false
  } as WeatherState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Current City Weather
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === 'string'
          ? action.payload
          : action.error.message ?? "Failed to fetch weather data";
      })
      // Popular Cities Weather
      .addCase(fetchPopularWeather.pending, (state) => {
        state.popularLoading = true;
      })
      .addCase(fetchPopularWeather.fulfilled, (state, action) => {
        state.popularLoading = false;
        state.popularCities = action.payload;
      })
      .addCase(fetchPopularWeather.rejected, (state) => {
        state.popularLoading = false;
      });
  },
});

export const { clearError } = weatherSlice.actions;

export default weatherSlice.reducer;
