import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function TodoTaskAdder({task, setTask, handleAdd, btnColor, taskColor}) {
  return (
    <View style={styles.adderSection}>
      <TextInput style={[styles.taskAdder,{backgroundColor: taskColor}]} placeholder='Add new task . . . . .' value={task} onChangeText={(text) => setTask(text)}/>
      <TouchableOpacity onPress={handleAdd}>
        <View style={[styles.addBtn,{backgroundColor: btnColor}]}>
          <Icon name="plus" size={27} color='#f2f3f4' />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  adderSection: {
    flexDirection: 'row',
    height: 70,
    padding: 10,
  },
  taskAdder: {
    padding: 15,
    borderColor: '#f2f3f4',
    borderWidth: 1,
    flex: 1,
    borderRadius: 20,
    marginRight: 10,
  },
  addBtn: {
    width: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: '#f2f3f4',
    borderWidth: 1,
    borderRadius: '50%',
  }
})