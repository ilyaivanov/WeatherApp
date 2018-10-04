import React, { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { Navigation } from "react-native-navigation";
import CityCard from "./components/CityCard";
import Separator from "./components/Separator";
import { style } from "./const";
import { cities } from "./models";
import update from "immutability-helper";
import { findIndexById } from "./array.utils";
import { getCityDetails } from "./remote";

class CitiesPage extends Component {
  state = {
    cities
  };

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    this.state.cities.forEach(city => this.fetchCityDetails(city.id));

    Navigation.events().registerCommandListener((eventName, payload) => {
      if (eventName === "dismissModal" && payload.componentId === "AddCity") {
        this.setState({
          cities: update(this.state.cities, { $push: [payload.mergeOptions] })
        });
        this.fetchCityDetails(payload.mergeOptions.id);
      }
    });
  }

  fetchCityDetails = cityId =>
    getCityDetails(cityId).then(details => {
      const cities = update(this.state.cities, {
        [findIndexById(this.state.cities, cityId)]: {
          $merge: details
        }
      });
      this.setState({ cities });
    });

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

  navigationButtonPressed({ buttonId }) {
    if (buttonId === "addPost") {
      Navigation.showModal({
        stack: {
          children: [
            {
              component: {
                name: "weatherApp.AddCity",
                id: "AddCity"
              }
            }
          ]
        }
      });
    }
  }

  pushDetailsPage = city =>
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

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={this.state.cities}
          contentContainerStyle={styles.containers}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) => (
            <CityCard city={item} onPress={this.pushDetailsPage} />
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
    padding: 10,
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
