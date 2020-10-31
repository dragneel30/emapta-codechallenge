
import { Linking, Platform, ToastAndroid, AlertIOS } from "react-native";


export const DISPLAYS = Object.freeze({

    content: 'Content:',
    description: 'Description:'

})

export const showRedirectError = (msg) => {

    Platform.OS === 'ios' ?
            AlertIOS.alert(msg) : ToastAndroid.show(msg, ToastAndroid.LONG)

}