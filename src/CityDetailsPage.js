import React, { PureComponent } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "react-native-ui-lib";
import Separator from "./components/Separator";
import WeatherInfo from "./components/WeatherInfo";
import { style } from "./const";

class CityDetailsPage extends PureComponent {
  render() {
    const { city } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.date}
          data={city.history}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) => <Day dayInfo={item} />}
        />
      </View>
    );
  }
}

const Day = ({ dayInfo }) => (
  <View style={styles.date}>
    <View>
      <Text>{dayInfo.date}</Text>
    </View>
    <WeatherInfo city={dayInfo} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.backgroundColor,
    flex: 1
  },
  date: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10
  }
});

export default CityDetailsPage;
