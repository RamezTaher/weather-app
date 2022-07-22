import { useState } from "react"
import { weather_key, weather_url } from "./api"
import "./App.css"
import Forecast from "./components/forecast/Forecast"
import Search from "./components/Search"
import Weather from "./components/weather/Weather"

function App() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")

    const weatherFetch = fetch(
      `${weather_url}/weather?lat=${lat}&lon=${lon}&appid=${weather_key}&units=metric`
    )

    const forecastFetch = fetch(
      `${weather_url}/forecast?lat=${lat}&lon=${lon}&appid=${weather_key}&units=metric`
    )

    Promise.all([weatherFetch, forecastFetch]).then(async (res) => {
      const weatherRes = await res[0].json()
      const forecastRes = await res[1].json()

      setWeather({ city: searchData.label, ...weatherRes })
      setForecast({ city: searchData.label, ...forecastRes })
    })
  }

  console.log(forecast)
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {weather && <Weather data={weather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  )
}

export default App
