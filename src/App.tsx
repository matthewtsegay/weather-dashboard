import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Weather from "./components/Weather";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather/:city" element={<Weather />} />
        </Routes>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
