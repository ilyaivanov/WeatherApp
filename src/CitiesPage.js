import React, {Component} from "react";
import {FlatList, StyleSheet} from "react-native";
import {View} from "react-native-ui-lib";
import {Navigation} from "react-native-navigation";
import CityCard from "./components/CityCard";
import Separator from "./components/Separator";
import {style} from "./const";
import {cities, mapCityDetails} from "./models";

class CitiesPage extends Component {
  state = {
    cities
  };

  constructor(props) {
    super(props);
    this.pushScreen = this.pushScreen.bind(this);
    Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    fetch(
      `https://www.metaweather.com/api/location/${this.state.cities[0].id}/`
    )
      .then(response => response.json())
      .then(details => {
        this.setState({cities: [mapCityDetails(details)]});
      });
  }

  static get options() {
    return {
      topBar: {
        rightButtons: [
          {
            id: "addPost",
            text: "Add"
          }
        ]
      }
    };
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === "addPost") {
      Navigation.showModal({
        stack: {
          children: [
            {
              component: {
                name: "weatherApp.AddCity"
              }
            }
          ]
        }
      });
    }
  }

  // navigator: PropTypes.object,
  // componentId: PropTypes.string

  pushScreen(city) {
    Navigation.push(this.props.componentId, {
      component: {
        name: "weatherApp.CityDetailsPage",
        passProps: {
          city
        },
        options: {
          topBar: {
            title: {
              text: city.name
            }
          }
        }
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={this.state.cities}
          contentContainerStyle={styles.containers}
          ItemSeparatorComponent={() => <Separator/>}
          renderItem={({item}) => (
            <CityCard city={item} onPress={this.pushScreen}/>
          )}
        />
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: style.backgroundColor
  },
  containers: {
    padding: 20,
    flex: 1,
    justifyContent: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 12
  }
});

export default CitiesPage;
