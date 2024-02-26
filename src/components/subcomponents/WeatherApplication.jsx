"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { defaults } from "autoprefixer";
import Image from "next/image";

const WeatherApplication = () => {
  const [wimg, setWimg] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  console.log(weatherData);
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
    <div className="p-4 ">
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="flex flex-col gap-2 rounded w-full h-[350px] custom-radial-gradient text-white p-5">
          <p className="text-xl">Weather</p>
          <div className="w-full  flex justify-around items-center p-2">
            <Image
              src={wimg}
              alt="weather"
              className="w-20"
              width={40}
              height={40}
            />

            <p className="text-5xl font-bold">
              {Math.round(weatherData.main.temp)}
              <sup>°C</sup>
            </p>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-semibold ">{weatherData?.name}</p>
              <p className="text-center font-light">
                {weatherData?.weather[0]?.description}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-light">
                <i className="bx bxs-thermometer text-2xl "></i>
                {"  "}
                <span>
                  {weatherData?.main?.temp_max}
                  <sup>°C</sup> - {weatherData?.main?.temp_min}
                  <sup>°C</sup>
                </span>
              </p>
              <p className="font-light">
                <i className="bx bx-wind text-2xl"></i>
                {"  "}
                <span>{weatherData?.wind?.speed} km/h</span>
              </p>
            </div>
          </div>
          <div className="flex justify-around py-4">
            <div className="flex flex-col items-center  gap-2">
              <i className="bx bx-sun bx-spin text-3xl text text-white"></i>{" "}
              <p>
                {" "}
                {new Date(
                  weatherData?.sys?.sunrise * 1000
                ).toLocaleTimeString()}
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <i className="bx bxs-sun bx-spin text-3xl text text-black"></i>{" "}
              {new Date(weatherData?.sys?.sunset * 1000).toLocaleTimeString()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApplication;
