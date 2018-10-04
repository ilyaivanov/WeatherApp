import React, { PureComponent } from "react";
import { FlatList } from "react-native";
import { Text, TouchableOpacity, View } from "react-native-ui-lib";
import { Navigation } from "react-native-navigation";
import { SearchBar } from "react-native-elements";
import Separator from "./components/Separator";
import { findCities } from "./remote";
import debounce from "lodash/debounce";

class AddPost extends PureComponent {
  state = {
    searchResults: []
  };

  constructor(props) {
    super(props);

    Navigation.events().bindComponent(this);
  }

  static get options() {
    return {
      topBar: {
        title: {
          text: "Add City"
        },
        leftButtons: [
          {
            id: "cancelBtn",
            text: "Back"
          }
        ]
      }
    };
  }

  navigationButtonPressed({ buttonId }) {
    if (buttonId === "cancelBtn") {
      Navigation.dismissModal(this.props.componentId);
    } else if (buttonId === "saveBtn") {
      alert("saveBtn");
    }
  }

  hide = (city) =>
    Navigation.dismissModal(this.props.componentId, city);

  search = debounce(term => {
    if (term) {
      findCities(term).then(cities => this.setState({ searchResults: cities, term:term }));
    } else {
      this.setState({ searchResults: [] });
    }
  }, 500);

  render() {
    return (
      <View style={{ backgroundColor: "#F5FCFF", flex: 1 }}>
        <SearchBar
          round
          clearIcon={{ color: "grey" }}
          onChangeText={this.search}
          // onClear={this.someMethod}
          lightTheme
          placeholder="Start typing name of the city.."
        />
        <FlatList
          data={this.state.searchResults}
          contentContainerStyle={{ paddingLeft: 10, paddingRight: 10 }}
          keyExtractor={item => item.name}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) => <Result onPress={() => this.hide(item)} title={item.name} term={this.state.term} />}
        />
      </View>
    );
  }
}

const getHighlightedText = (text, higlight) => {
  let parts = text.split(new RegExp(`(${higlight})`, "gi"));
  return (
    <Text>
      {" "}
      {parts.map((part, i) => (
        <Text
          key={i}
          style={
            part.toLowerCase() === higlight.toLowerCase()
              ? { fontWeight: "bold" }
              : {}
          }
        >
          {part}
        </Text>
      ))}{" "}
    </Text>
  );
};

const Result = ({ title, onPress, term }) => (
  <TouchableOpacity
    style={{
      flex: 1,
      flexDirection: "row",
      height: 35,
      justifyContent: "space-between",
      alignItems: "center"
    }}
    onPress={onPress}
  >
    <Text style={{ fontSize: 16 }}>{getHighlightedText(title, term)}</Text>
    <Text style={{ fontSize: 16 }}>></Text>
  </TouchableOpacity>
);

export default AddPost;
