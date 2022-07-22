import React, { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import { geoData, geo_data_url } from "../api"

const Search = ({ onSearchChange }) => {
  const [searchText, setSearchText] = useState(null)

  const handleOnChange = (searchData) => {
    setSearchText(searchData)
    onSearchChange(searchData)
  }

  const loadOptions = (inputData) => {
    return fetch(
      `${geo_data_url}/cities?minPopulation=100000&namePrefix=${inputData}`,
      geoData
    )
      .then((res) => res.json())
      .then((res) => {
        return {
          options: res.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }
          }),
        }
      })
  }

  return (
    <div>
      <AsyncPaginate
        placeholder="Enter The City"
        debounceTimeout={500}
        value={searchText}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  )
}

export default Search
