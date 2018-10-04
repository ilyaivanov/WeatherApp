import React, { PureComponent } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "react-native-ui-lib";
import moment from "moment";
import Separator from "./components/Separator";
import WeatherInfo from "./components/WeatherInfo";
import { style } from "./const";

class CityDetailsPage extends PureComponent {
  render() {
    const {city} = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item + ""}
          data={[1, 2, 3]}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) => <Day city={city} />}
        />
      </View>
    );
  }
}

const Day = ({city}) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10
    }}
  >
    <View>
      <Text>{moment("12-25-1995", "MM-DD-YYYY").format("MMMM Do")}</Text>
    </View>
    <WeatherInfo
      city={{ name: "Vilnius", id: "ki", degree: city.degree, type: "Heavy Cloud" }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.backgroundColor,
    flex: 1
  }
});

export default CityDetailsPage;
