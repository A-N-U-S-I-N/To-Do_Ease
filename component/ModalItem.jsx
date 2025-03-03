import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

export default function ModalItem({ value, modalPress, taskColor, bgImage }) {
    return (
        <TouchableOpacity onPress={modalPress}>
            <ImageBackground source={bgImage} style={styles.backgroundContainer} imageStyle={styles.backgroundImage} >
                <View style={styles.itemContainer} >
                    <View style={[styles.theme, { backgroundColor: taskColor }]}></View>
                    <View style={styles.textContainer}>
                        <Text style={styles.modalText}>{value}</Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        height: 55,
        borderColor: "#f2f3f4",
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 20,
        width: 300,
        paddingHorizontal: 30,
    },
    theme: {
        width: 30,
        height: 30,
        borderColor: "#f2f3f4",
        borderWidth: 1,
        borderRadius: "50%",
    },
    modalText: {
        fontSize: 20,
        color: "#f2f3f4",
        textShadowColor: 'grey', 
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1, 
    },
    textContainer: {
        flex: 1,
        marginLeft: 20,
        alignItems: "center"
    },
    backgroundImage: {
        resizeMode: "cover",
        borderRadius: 19
    },
    backgroundContainer: {
        borderRadius: 19
    }
})