import { View, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Tasks from './Tasks'

export default function Todolist({tododata, handleDelete, handleCheck, taskColor}) {
  return (
    <View style={styles.mainContainer} >
      <FlatList data={tododata} renderItem={({item}) => (<Tasks taskData={item.data} handleDelete={() => handleDelete(item.id)} isComplete={item.isComplete} handleCheck={() => handleCheck(item.id)} taskColor={taskColor}/>)}  />
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer : {
        flex: 1,
    },
    listItem: {
        padding: 10,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 5
      },
})