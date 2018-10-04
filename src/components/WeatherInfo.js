import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const weatherTypes = {
  Snow: "sn",
  Sleet: "sl",
  Hail: "h",
  Thunderstorm: "t",
  "Heavy Rain": "hr",
  "Light Rain": "lr",
  Showers: "s",
  "Heavy Cloud": "hc",
  "Light Cloud": "lc",
  Clear: "c"
};

const getIconUrl = type =>
  `https://www.metaweather.com/static/img/weather/png/${type}.png`;

export default ({ city }) => (
  <View>
    <View style={styles.topRowContainer}>
      <Text style={styles.degrees}>{city.degree}°</Text>
      <Image
        source={{ uri: getIconUrl(weatherTypes[city.type]) }}
        style={styles.icon}
      />
    </View>
    <Text style={styles.weatherTypeText}>{city.type}</Text>
  </View>
);

const styles = StyleSheet.create({
  topRowContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between"
  },
  degrees: {
    fontSize: 27,
    color: "#424242",
    fontWeight: "bold",
    paddingRight: 5
  },
  icon: {
    height: 40,
    width: 40
  },
  weatherTypeText: {
    fontSize: 14,
    marginTop: 10,
    color: "#424242",
    textAlign: "center"
  }
});
