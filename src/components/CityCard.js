import {ActivityIndicator, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import WeatherInfo from "./WeatherInfo";

export default ({city, onPress}) => (
  <TouchableOpacity style={styles.cardContainer} onPress={() => onPress(city)}>
    <View>
      <Text style={styles.cardText}>{city.name}</Text>
      <Text style={styles.country}>{city.parent}</Text>
    </View>
    {
      city.isLoading ?
        <View style={{paddingRight: 20}}>
          <ActivityIndicator size="large"/>
        </View> :
        <WeatherInfo city={city}/>
    }
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  cardContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cardText: {
    fontSize: 25,
    color: '#424242'
  },
  country:{
    fontSize: 12,
    color: '#5b5b5b'
  }
});

