import React from "react";
import { Text, StyleSheet } from "react-native";


// title을 props로 받아온다~!

const Title = ({ title }) => {
  return <Text style={styles.title}>{ title }</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: '600',
    color: 'black',
    margin: 30,
  },
});

export default Title;