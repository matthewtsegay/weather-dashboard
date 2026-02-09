# Weather App - Modern UI

A beautiful, modern weather application built with React, TypeScript, and Redux Toolkit.

## Features

- 🌤️ Real-time weather data for any city
- 🎨 Modern UI with gradient backgrounds based on weather conditions
- 🌙 Dark/Light mode support
- ✨ Smooth weather animations (sun, rain, clouds, snow, storms)
- 📱 Fully responsive design
- 🎯 Clean, premium interface

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Get Your API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Get your API key from the dashboard

### 3. Configure Environment Variables

Create a `.env` file in the `weather-dashboard` folder:

```env
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

**Important:** Replace `your_api_key_here` with your actual API key from OpenWeatherMap.

### 4. Start the Development Server

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Troubleshooting

### Error: "Invalid API key" or "401 Unauthorized"

- Make sure you created a `.env` file in the `weather-dashboard` folder
- Verify your API key is correct
- Restart the development server after adding/changing the `.env` file
- Check that the variable name is exactly: `REACT_APP_WEATHER_API_KEY`

### Error: "City not found"

- Check the spelling of the city name
- Try using the city name in English
- Some cities may require country code (e.g., "London, UK")

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
