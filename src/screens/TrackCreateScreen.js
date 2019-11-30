//import '../_mockLocation'
import React, {useContext, useEffect, useState} from 'react';
import { StyleSheet, Text} from "react-native";
import {SafeAreaView} from 'react-navigation'
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from "expo-location";
import Map from "../components/Map";
import {Context as LocationContext } from '../context/LocationContext'

const TrackCreateScreen = ()=>{
    const {addLocation} = useContext(LocationContext);
    const [err, setErr] = useState(null);
    const startWatching = async ()=>{
        try{
            await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy:Accuracy.BestForNavigation,
                timeInterval:1000,
                distanceInterval:0.1
            },(location)=>{
               addLocation(location)
            } );
        }catch (e) {
            setErr(e);
        }
    };
    useEffect(()=>{
        startWatching();
    },[]);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={{fontSize:48}}>Create a Track</Text>
            <Map/>
            {err? <Text>Please enable location services</Text>:null}
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

});
export  default TrackCreateScreen;