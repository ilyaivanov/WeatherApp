import {Navigation} from 'react-native-navigation';

import CitiesPage from './CitiesPage';
import CityDetailsPage from './CityDetailsPage';
import AddCityPage from "./AddCityPage";

export function registerScreens() {

  Navigation.registerComponent('weatherApp.Cities', () => CitiesPage);
  Navigation.registerComponent('weatherApp.AddCity', () => AddCityPage);
  Navigation.registerComponent('weatherApp.CityDetailsPage', () => CityDetailsPage);

}
