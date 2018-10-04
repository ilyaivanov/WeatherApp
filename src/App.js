import React, {Component} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text, Button} from 'react-native-ui-lib';
import {Navigation} from 'react-native-navigation';
import CityCard from "./components/CityCard";
import Separator from "./Separator";


class App extends Component {

  constructor(props) {
    super(props);
    this.pushScreen = this.pushScreen.bind(this);
    Navigation.events().bindComponent(this);
  }

  static get options() {
    return {
      topBar: {
        rightButtons: [
          {
            id: 'addPost',
            text: 'Add'
          }
        ]
      }
    };
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'addPost') {
      Navigation.showModal({
        stack: {
          children: [{
            component: {
              name: 'blog.AddPost',
            }
          }]
        }
      });
    }
  }

  state = {
    loading: false
  }

  // navigator: PropTypes.object,
  // componentId: PropTypes.string

  pushScreen(city) {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'reactNativeInit.Screen1',
        options: {
          topBar: {
            title: {
              text: city.name,
            }
          }
        }
      }
    });
  }

  render() {
    const cities = [
      {name: "Vilnius", id: 'ki', degree: '23', type: 'Heavy Cloud'},
      {name: "Tel Aviv", id: 'tl', isLoading: true},
      {name: "Kiev", id: 'vi', degree: '18', type: 'Snow'},
    ];

    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={cities}
          contentContainerStyle={styles.containers}
          ItemSeparatorComponent={() => <Separator/>}
          renderItem={({item}) => <CityCard city={item} onPress={this.pushScreen}/>}
        />
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF', //'#f5f5f5'
  },
  containers: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 12,
  },
});

export default App;
