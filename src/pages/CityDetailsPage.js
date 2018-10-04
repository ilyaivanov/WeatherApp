import React, { PureComponent } from "react";
import { FlatList, StyleSheet } from "react-native";
import { Text, View } from "react-native-ui-lib";
import Separator from "../components/Separator";
import { style } from "../const";
import CityCard from "../components/CityCard";

class CityDetailsPage extends PureComponent {
  render() {
    const { city } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.listContainer}
          keyExtractor={item => item.date}
          data={city.history}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) => (
            <CityCard city={{ ...item, name: item.dayOfWeek, parent: item.date}} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: style.backgroundColor,
    flex: 1
  },
  listContainer: {
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default CityDetailsPage;
