import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import CityCard from "./src/CityCard";

export default class App extends Component {
  render() {
    const cities = [
      {name: "Vilnius", id: 'ki', degree: '23', type: 'Heavy Cloud'},
      {name: "Tel Aviv", id: 'tl', isLoading: true},
      {name: "Kiev", id: 'vi', degree: '18', type: 'Snow'},
    ]
    return (
      <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={cities}
          contentContainerStyle={styles.container}
          ItemSeparatorComponent={() => <View style={styles.separator}/>}
          renderItem={({item}) => <CityCard city={item}/>}
          Li
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#b1b1b1',
  }
});
