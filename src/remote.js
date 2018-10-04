import { mapCityDetails } from "./models";
import update from "immutability-helper";
import { findIndexById } from "./array.utils";

export const findCities = term => {
  console.log("Making an HTTP request to search cities: " + term);
  return fetch("https://www.metaweather.com/api/location/search/?query=" + term)
    .then(r => r.json())
    .then(cities => {
      console.log(cities);
      return cities.map(mapCityDetails);
    });
};

export const getCityDetails = cityId => {
  console.log("Making an HTTP request to search city details: " + cityId);
  return fetch(`https://www.metaweather.com/api/location/${cityId}/`)
    .then(response => response.json())
    .then(mapCityDetails);
};
