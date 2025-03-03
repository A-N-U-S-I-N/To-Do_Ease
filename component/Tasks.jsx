import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'
import Deletebtn from './Deletebtn';

export default function Tasks({ taskData, handleDelete, isComplete, handleCheck, taskColor}) {

    return (
        <GestureHandlerRootView style={{ flex: 1 }} >
            <Swipeable renderRightActions={() => (<Deletebtn handleDelete={handleDelete} />)} >
                <View style={[styles.container, isComplete ? styles.completed : null,{backgroundColor: taskColor}]} >
                    {!isComplete && (<TouchableOpacity onPress={handleCheck}>
                        <View style={styles.checkBtn}>
                            <Icon name="check" size={24} color='white' />
                        </View>
                    </TouchableOpacity>)}
                    <Text style={[{flexShrink : 1}, isComplete ? styles.completedText : {color: "#212121"}]} >{taskData}</Text>
                </View>
            </Swipeable>
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: "#f2f3f4",
        borderWidth: 1,
        flex : 1,
        margin: 10,
        borderRadius: 20,
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 0,
        padding : 10,
    },
    checkBtn: {
        borderColor: "#f2f3f4",
        borderWidth: 1,
        width: 40,
        height: 40,
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20,
        backgroundColor: "#008000"
    },
    completed : {
        justifyContent : "center"
    },
    completedText : {
        opacity : 0.4,
        textDecorationLine : "line-through",
        margin : 10
    },
})