import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Themebtn from './Themebtn'

export default function Navigation({themeData, themeChange, taskColor}) {
  return (
    <View style={styles.mainContainer}>
      <Image source={require("../assets/white-logo.png")} style={styles.logo} />
      <Themebtn themeData={themeData} themeChange={themeChange} taskColor={taskColor}/>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer : {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    
  },
  logo : {
    width : 160,
    height: 80,
    // borderColor: "black",
    //     borderWidth: 1,
  }
})