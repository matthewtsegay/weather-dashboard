import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/home1.css"; 
import "bootstrap/dist/css/bootstrap.min.css";

const Home: React.FC = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="bg-custom"> 
        <Container className="mt-0 text-center">
          <h2>Weather Condition</h2>
          <Form>
            <Form.Group controlId="city">
              <Form.Control
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </Form.Group>
            <Button
              className="mt-3"
              onClick={() => navigate(`/weather/${city}`)}
              variant="primary"
            >
              Search
            </Button>
          </Form>
        </Container>
      </div>
      <Footer />
    </>
  );
};

const Weather: React.FC = () => <div className="p-4 text-center">Check the latest weather updates here.</div>;

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weather/:city" element={<Weather />} />
    </Routes>
  );
};

export default App;
