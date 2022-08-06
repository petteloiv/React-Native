import React from "react";
import { Dimensions, StyleSheet, Text, TextInput } from "react-native";

// props로 받아온 것 넣어주기
const Input = ({ value, onChangeText, onSubmitEditing }) => {
  return (
    <TextInput 
      style={styles.input} 
      placeholder=" + 일정을 추가하세요!" 
      maxLength={50}
      // App.js에서 props로 받아온 것 
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get('window').width - 15,
    fontSize: 20,
    backgroundColor: '#96c3eb',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    padding: 8,
    alignItems: 'center',
  },
});

export default Input;