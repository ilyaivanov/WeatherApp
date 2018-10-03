import {Navigation} from 'react-native-navigation';

import App from './App';
import Screen1 from './Screen1';
import AddCityPage from "./AddCityPage";

export function registerScreens() {

  Navigation.registerComponent('reactNativeInit.App', () => App);
  Navigation.registerComponent('blog.AddPost', () => AddCityPage);
  Navigation.registerComponent('reactNativeInit.Screen1', () => Screen1);

}
