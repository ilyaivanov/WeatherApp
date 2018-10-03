import {Image, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator} from "react-native";
import React from "react";

const weatherTypes = {
  'Snow': 'sn',
  'Sleet': 'sl',
  'Hail': 'h',
  'Thunderstorm': 't',
  'Heavy Rain': 'hr',
  'Light Rain': 'lr',
  'Showers': 's',
  'Heavy Cloud': 'hc',
  'Light Cloud': 'lc',
  'Clear': 'c',
};

export default ({city}) => (
  <TouchableOpacity style={styles.cardContainer}>
    <Text style={styles.cardText}>{city.name}</Text>
    {
      city.isLoading ?
        <View style={{paddingRight: 20}}>
          <ActivityIndicator size="large"/>
        </View> :
        <View>
          <View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 27, color: '#424242', fontWeight: 'bold', paddingRight: 5}}>{city.degree}°</Text>
            <Image source={{uri: `https://www.metaweather.com/static/img/weather/png/${weatherTypes[city.type]}.png`}}
                   style={{height: 40, width: 40}}/>
          </View>
          <Text style={{fontSize: 14, marginTop: 10, color: '#424242', textAlign: 'center'}}>{city.type}</Text>
        </View>
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

