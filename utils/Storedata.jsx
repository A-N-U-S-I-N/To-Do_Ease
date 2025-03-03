import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeData = async(key, value) => {
    try{
        await AsyncStorage.setItem(key, JSON.stringify(value));
    }
    catch(error){
        console.log("Error storing data", error);
    };
}

export const getData = async(key) => {
    try{

        const stringifiedValue = await AsyncStorage.getItem(key);
        return stringifiedValue !== null ? JSON.parse(stringifiedValue) : null;
        
    }
    catch(error){
        console.log("Error getting data", error);
    };
}