import React, {Component} from "react";
import {Button, StyleSheet, View} from "react-native";
import {connect} from "remx";
import {Navigation} from "react-native-navigation";
import {style} from "../const";
import {storeGetters, storeSetters} from "../state/store";
import {fetchCityDetails} from "../state/actions";

class CitiesPage extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    this.props.cities.forEach(city => fetchCityDetails(city.id));

    Navigation.events().registerCommandListener((eventName, payload) => {
      if (eventName === "dismissModal" && payload.componentId === "AddCity") {
        storeSetters.addCity(payload.mergeOptions);
        fetchCityDetails(payload.mergeOptions.id);
      }
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

  showModals = () => {
    Navigation.showModal({
      stack: {
        children: [{
          component: {
            name: 'example.ModalScreen',
            options: {
              topBar: {
                background:{
                  color:'red'
                },
                title: {
                  text: 'Modal42'
                },
              }
            }
          }
        }]
      }
    })

    ;
    // setTimeout(() => {
    //   Navigation.dismissModal('someId');
    // }, 2000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Show two modals" onPress={this.showModals}/>
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

const mapStateToProps = () => ({
  cities: storeGetters.getCities()
});

export default connect(mapStateToProps)(CitiesPage);
