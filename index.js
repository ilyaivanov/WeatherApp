import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'weatherApp.Cities',
              options: {
                topBar: {
                  title: {
                    text: "Cities",
                  }
                }
              }
            }
          }
        ],
      },
    }
  });
});

