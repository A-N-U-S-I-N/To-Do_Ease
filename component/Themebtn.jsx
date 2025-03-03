import { View, StyleSheet, TouchableOpacity, Modal, FlatList, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import ModalItem from './ModalItem';
import { BlurView } from 'expo-blur';

export default function Themebtn({ themeData, themeChange, taskColor }) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const modalPress = (id) => {
        setIsModalVisible(!isModalVisible);
        themeChange(id);
    }

    return (
        <View style={styles.btnArea}>
            <BlurView
                style={styles.blurBtn}
                intensity={50} 
                tint="light"
                experimentalBlurMethod="dimezisBlurView"
            >
                <View style={styles.innerContent}>
                    <View style={[styles.theme, { backgroundColor: taskColor }]}></View>
                    <TouchableOpacity onPress={() => setIsModalVisible(!isModalVisible)}>
                        <View style={styles.themePicker}>
                            <Icon name="caret-down" size={16} color="#f2f3f4" />
                        </View>
                    </TouchableOpacity>
                </View>
            </BlurView>

            <Modal visible={isModalVisible} animationType='fade'>
                <TouchableWithoutFeedback onPress={() => setIsModalVisible(!isModalVisible)}>
                <BlurView
                    style={styles.blurContainer}
                    intensity={50} 
                    tint="light"
                    experimentalBlurMethod="dimezisBlurView"
                >
                    <FlatList
                        data={themeData}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <ModalItem value={item.name} modalPress={() => (modalPress(item.id))} taskColor={item.taskColor} bgImage={item.bgImage} />
                        )}
                        contentContainerStyle={styles.modalContainer}
                    />
                </BlurView>
                </TouchableWithoutFeedback>
            </Modal>
        </View>

    )
}

const styles = StyleSheet.create({
    btnArea: {
        borderColor: "#f2f3f4",
        borderWidth: 1,
        borderRadius: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: 65,
        height: 40
    },
    blurBtn: {
        flex: 1,
        borderRadius: 20,
        overflow: 'hidden', 
    },
    innerContent: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: 5,
    },
    theme: {
        width: 30,
        height: 30,
        borderColor: "#f2f3f4",
        borderWidth: 1,
        borderRadius: "50%",
    },
    themePicker: {
        width: 20,
        height: 20,
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center"
    },
    blurContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        rowGap: 15,
    },
});
