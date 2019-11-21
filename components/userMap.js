import React from 'react';
import {View,StyleSheet} from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker, Overlay } from 'react-native-maps'; 

export default function UserMap({ userLocation}) {
    const LatLng = {
        latitude: 10,
        longitude: 20,
    }

    return(
        <View style={styles.mapContainer}>
            <MapView 
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                region={userLocation}>
                <Marker coordinate={userLocation} draggable/>
            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    mapContainer:{
        width:'100%',
        height: '100%',
        position:'relative',
    },
    map:{
        width:'100%',
        height:'100%'
    }
})