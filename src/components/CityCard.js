import {Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator} from "react-native";
import React from "react";
import WeatherInfo from "./WeatherInfo";



export default ({city, onPress}) => (
  <TouchableOpacity style={styles.cardContainer} onPress={() => onPress(city)}>
    <Text style={styles.cardText}>{city.name}</Text>
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
});

