import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import Title from './component/Title';
import { useState } from 'react';
import Input from './component/Input';
import { images } from '../images';
import IconButtons from './component/IconButton';

export default function App() {

  // useState 사용하여 상태 변수, 세터 함수 생성 
  const [ newTask, setNewTask ] = useState('');

  // addTask => 완료 버튼 누르면 입력된 내용 확인하고 Input 초기화
  const _addTask = () => {
    // alert로 입력된 내용 더한다고 알려주기
    alert(`add : ${newTask}`);
    // input 초기화 
    setNewTask('');
  }; 

  // handleTextChange => input에서 값 변할때마다 
  // newTask에 저장 
  const _handleTextChange = (text) => {
    setNewTask(text);
  }; 

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* title = title로 넘겨주는 값 */}
      <Title title="Todo List"></Title>
      <Input 
        value={newTask}
        onChangeText={_handleTextChange}
        onSubmitEditing={_addTask}
      />
      <Button 
        title="enter"
        onPress={() => {
          _addTask();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});