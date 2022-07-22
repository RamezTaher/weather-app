import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import "./forecast.css"

const Forecast = ({ data }) => {
  const Days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]
  const day = new Date().getDay()
  const arrangedDays = Days.slice(day, Days.length).concat(Days.slice(0, day))
  return (
    <>
      <div className="title">Daily</div>

      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    className="weather-icon"
                    alt="weather"
                  />
                  <span className="day">{arrangedDays[index]}</span>
                  <span className="desc">{item.weather[0].description}</span>
                  <span className="min-max-temp">
                    {Math.round(item.main.temp_max)} /{" "}
                    {Math.round(item.main.temp_min)}°C
                  </span>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="grid">
                <div className="grid-item">
                  <span>Pressure:</span>
                  <span>{item.main.pressure}</span>
                </div>
                <div className="grid-item">
                  <span>Humidity:</span>
                  <span>{item.main.humidy}</span>
                </div>
                <div className="grid-item">
                  <span>Clouds:</span>
                  <span>{item.clouds.all} unit</span>
                </div>
                <div className="grid-item">
                  <span>Wind Speed:</span>
                  <span>{item.wind.speed}</span>
                </div>
                <div className="grid-item">
                  <span>Sea Level:</span>
                  <span>{item.main.sea_level}</span>
                </div>
                <div className="grid-item">
                  <span>Feel Like:</span>
                  <span>{item.main.feels_like}</span>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}

export default Forecast
