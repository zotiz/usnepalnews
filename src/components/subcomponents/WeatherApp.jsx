"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { defaults } from "autoprefixer";
import Image from "next/image";

const WeatherApp = () => {
  const [wimg, setWimg] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const [loading, setLoading] = useState(true);

  const apiKey = "5fa31ccc9e0a67ba97a8ff74f4a8f10c";
  useEffect(() => {
    switch (weatherData?.weather?.icon) {
      case "01d" || "01n":
        setWimg("/weatherImg/clear.png");
        break;
      case "03d" || "03n":
        setWimg("/weatherImg/cloud.png");
        break;
      case "10d" || "10n":
        setWimg("/weatherImg/drizzle.png");
        break;
      case "09d" || "09n":
        setWimg("/weatherImg/rain.png");
        break;
      case "50d" || "50n":
        setWimg("/weatherImg/humidity.png");
        break;
      case "13d" || "13n":
        setWimg("/weatherImg/snow.png");
        break;
      default:
        setWimg("/weatherImg/cloud.png");
    }
  }, []);
  useEffect(() => {
    const getWeatherByLocation = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
            );
            setWeatherData(response.data);
            setLoading(false);
          });
        } else {
          console.error("Geolocation is not supported by your browser.");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    getWeatherByLocation();
  }, [apiKey]);

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="flex items-center gap-2">
          <Image
            src={wimg}
            alt="weather"
            className="w-8"
            width={40}
            height={40}
          />
          <p className="text-[13px]">{weatherData?.name}</p>
          <p className="text-[16px]">
            {Math.round(weatherData.main.temp)}
            <sup>°C</sup>
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
