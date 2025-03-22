import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Weather from "./components/Weather";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather/:city" element={<Weather />} />
        </Routes>
    </Provider>
  );
};

export default App;
