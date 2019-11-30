import React from 'react';
import {Text, StyleSheet} from "react-native";
import MapView from 'react-native-maps';
import MapPolyline from "react-native-maps/lib/components/MapPolyline";
const Map = ()=>{
    let points = [];
    for (let i =0; i <20; i++ ){
        points.push({
            latitude:23.8103 + i * 0.001,
            longitude:90.4125 + i * 0.001
        });
    }
    return(
        <MapView
            style={styles.map}
            initialRegion={{
                    latitude:23.8103,
                    longitude:90.4125,
                    latitudeDelta:0.01,
                    longitudeDelta:0.01
                }}>
            <MapPolyline coordinates={points}/>
        </MapView>
    );
};
const styles = StyleSheet.create({
    map:{
        height:300
    }
});
export default Map;