import {getters, setters, state} from "remx";
import update from "immutability-helper";
import {findIndexById} from "../array.utils";

const initialState = {
  cities: [
    {
      name: "San Francisco",
      id: "2487956",
      isLoading: true
    }
  ]
};

//ugly, but suite the need of deep cloning. I don't know any other way to reset store
const citiesState = state(JSON.parse(JSON.stringify(initialState)));

export const storeGetters = getters({
  getCities() {
    return citiesState.cities;
  }
});

export const storeSetters = setters({
  reset() {
    citiesState.cities = initialState.cities;
  }
  ,
  addCity(city) {
    citiesState.cities = update(citiesState.cities, {$push: [city]});
  },

  updateCityDetails(details) {
    citiesState.cities = update(citiesState.cities, {
      [findIndexById(citiesState.cities, details.id)]: {
        $merge: details
      }
    });
  }
});
