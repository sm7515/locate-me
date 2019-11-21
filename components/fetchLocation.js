import  React  from "react";
import { SafeAreaView, View, Text, TextInput, Button, Alert, StyleSheet, ActivityIndicator } from 'react-native';

export default function FetchLocation(props) {
    return(
        <SafeAreaView>
            <View>
                <Button title="locate me" onPress={props.onGetLocation}></Button>
            </View>
        </SafeAreaView>
    )
}