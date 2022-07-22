import React from "react"
import "./weather.css"

const Weather = ({ data }) => {
  console.log(data)
  return (
    <div className="weather-card">
      <div className="header">
        <div>
          <p className="city-name">{data.city}</p>
          <div className="weather-desc">{data.weather[0].description}</div>
        </div>
        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="Weather-icon"
          className="weather-img"
        />
      </div>
      <div className="footer">
        <p className="temp">{Math.round(data.main.temp)}°C</p>
        <div className="infos">
          <div className="param-row">
            <span>Details</span>
          </div>
          <div className="param-row">
            <span>Fells Like</span>
            <span>{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="param-row">
            <span>wind</span>
            <span>{data.wind.speed} m/s</span>
          </div>
          <div className="param-row">
            <span>Himidity</span>
            <span>{data.main.humidity}%</span>
          </div>
          <div className="param-row">
            <span>Pressure</span>
            <span>{data.main.pressure} Pa</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
