import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function Deletebtn({handleDelete}) {
    return (
        <TouchableOpacity onPress={handleDelete}>
            <View style={styles.deleteBtn}>
                <Icon name='trash' size={30} color='#f2f3f4' />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    deleteBtn: {
        borderColor: "#f2f3f4",
        borderWidth: 1,
        width: 60,
        height: 60,
        borderRadius: "50%",
        marginVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
        backgroundColor: "#d11a2a"
    },
})