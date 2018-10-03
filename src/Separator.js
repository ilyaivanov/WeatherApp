import React from "react";
import {StyleSheet, View} from "react-native";

export default () => <View style={styles.separator}/>

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#b1b1b1',
  },
});
