import {Navigation} from 'react-native-navigation';

import CitiesPage from './pages/CitiesPage';
import CityDetailsPage from './pages/CityDetailsPage';
import AddCityPage from "./pages/AddCityPage";

export function registerScreens() {

  Navigation.registerComponent('weatherApp.Cities', () => CitiesPage);
  Navigation.registerComponent('weatherApp.AddCity', () => AddCityPage);
  Navigation.registerComponent('weatherApp.CityDetailsPage', () => CityDetailsPage);

}
