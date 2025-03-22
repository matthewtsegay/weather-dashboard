import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchWeather } from "../redux/weatherSlice";
import { Container, Card, Spinner, Alert } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/weather.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Weather: React.FC = () => {
  const { city } = useParams<{ city: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector((state: RootState) => state.weather as {
    data: { name: string; main: { temp: number; humidity: number }; wind: { speed: number }; weather: { icon: string }[] } | null;
    loading: boolean;
    error: string | null;
  });
  
  const [inputError, setInputError] = useState<string | null>(null);

  useEffect(() => {
    if (city) {
      dispatch(fetchWeather(city));
      setInputError(null); // Reset error message when new city is entered
    } else {
      setInputError("Please enter a valid city name.");
    }
  }, [dispatch, city]);

  return (
    <>
      <Navbar />
      <div className="bg-custom" style={{ minHeight: "100vh" }}>
        <Container className="mt-5 d-flex justify-content-center">
          <Link
            to="/"
            className="text-lg fontWeight-bold text-dark hover:text-yellow-300 transition duration-300 mb-3"
          >
            Logout
          </Link>
          {inputError && !loading && <Alert variant="danger">{inputError}</Alert>}
          
          {loading && <Spinner animation="border" />}

          {data && (
            <Card
              className="text-center bg-transparent"
              style={{ width: "250px", padding: "20px" }}
            >
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>Temperature: {data.main.temp}°C</Card.Text>
                <Card.Text>Humidity: {data.main.humidity}%</Card.Text>
                <Card.Text>Wind Speed: {data.wind.speed} m/s</Card.Text>
                <Card.Img
                  src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                  alt="Weather Icon"
                  style={{ width: "80px", height: "auto", opacity: 0.7 }}
                />
              </Card.Body>
            </Card>
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Weather;