import React, {PureComponent} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import Separator from "./Separator";
import WeatherInfo from "./components/WeatherInfo";
import moment from "moment";

class Screen1 extends PureComponent {

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item+''}
          data={[1,2,3]}
          ItemSeparatorComponent={() => <Separator/>}
          renderItem={({item}) => <Day/>}
        />
      </View>
    );
  }
}

const Day = () => (
  <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
    <View>
      <Text>{moment("12-25-1995", "MM-DD-YYYY").format('MMMM Do')}</Text>
    </View>
    <WeatherInfo city={{name: "Vilnius", id: 'ki', degree: '23', type: 'Heavy Cloud'}}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
  }
});

export default Screen1;
