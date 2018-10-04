import { storeSetters } from "./store";
import { getCityDetails } from "../remote";

export function fetchCityDetails(cityId) {
  getCityDetails(cityId).then(details => {
    storeSetters.updateCityDetails(details);
  });
}
