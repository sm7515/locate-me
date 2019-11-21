import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FetchLocation from "./components/fetchLocation";
import UserMap from "./components/userMap";

export default function App() {

  const [userPosition, setUserPosition] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421});

  const getLocationHandler=()=>{
    console.log('pressed')
    navigator.geolocation.getCurrentPosition(
      position=>{
        setUserPosition({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        })
      },
      err=>{console.log(err)
    })
  }
  console.log(userPosition)

  return (
    <View style={styles.container}>
      <UserMap userLocation={userPosition} />
      <FetchLocation onGetLocation={getLocationHandler} style={styles.button}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    zIndex:1,
    position:'absolute',
    top:0,
    left:20
  }
});
