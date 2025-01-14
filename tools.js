import AsyncStorage from "@react-native-async-storage/async-storage"

export async function setStorage(key, item) {
    try {
        await AsyncStorage.setItem(key, item)
    } catch (error) {
        console.error(error)
    }
}

export async function getItem(key) {
    try {
        const value = await AsyncStorage.getItem(key)
        if(value !== null){
            console.log("Item received")
            return value
        }
        else{
            console.log("Failed")
            return false
        }
    } catch (error) {
        console.error(error)
        return false
    }
    
}
export async function clearStorage() {
    await AsyncStorage.clear()
}