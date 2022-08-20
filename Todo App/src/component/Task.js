// 할일 -> props로 전달됨 

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Dimensions } from "react-native";


const Task = ({ task, deleteTask }) => {
  // 전달이 안되고 있다 ... item 어디감
  console.log(task)
  console.log('error')
  
  return (
    <View style={styles.container}>
      <TouchableOpacity>
              <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{fontSize: 20, flex: 1}}>{task}</Text>

      <TouchableOpacity>
              <MaterialCommunityIcons name="square-edit-outline" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity>
              <MaterialCommunityIcons 
        name="delete-outline" size={24} color="black"
        onPressOut={deleteTask}  
      />
      </TouchableOpacity>

    </View>
  );
}; 

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 15,
    marginLeft: 7,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default Task;