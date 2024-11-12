import React, { useState, useEffect } from "react";
// key props is a spescial porp  for unique identification for any object 
const WeatherApp = () => {
  const [city, setCity] = useState("New York"); // Default city
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 const apiKey = "49e8a0d492f72b0ef8c0b973e4dd9930";
  useEffect(() => {
    // Function to fetch weather data
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const handleSearch = (e) => {
    e.preventDefault();
    const cityName = e.target.elements.city.value;
    setCity(cityName);
  };

  return (
    <div style={styles.container}>
      <h1>Weather App</h1>
      <form onSubmit={handleSearch} style={styles.form}>
        <input
          type="text"
          name="city"
          placeholder="Enter city name"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={styles.error}>{error}</p>}
      {weatherData && (
        <div style={styles.weatherInfo}>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  form: {
    marginBottom: "20px",
  },
  input: {
    padding: "8px",
    fontSize: "16px",
    marginRight: "10px",
  },
  button: {
    padding: "8px 16px",
    fontSize: "16px",
    cursor: "pointer",
  },
  error: {
    color: "red",
  },
  weatherInfo: {
    border: "1px solid #ddd",
    padding: "20px",
    borderRadius: "8px",
    display: "inline-block",
  },
};

export default WeatherApp;
