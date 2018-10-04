import {mapCityDetails} from "./models";

export const findCities = term => {
  console.log("Making an HTTP request to search cities: " + term);
  return fetch('https://www.metaweather.com/api/location/search/?query=' + term)
    .then(r => r.json())
    .then(cities => {
      console.log(cities)
      return cities.map(mapCityDetails)
    });
};
