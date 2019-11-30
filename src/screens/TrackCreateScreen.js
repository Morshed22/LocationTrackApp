import React from 'react';
import { StyleSheet, Text} from "react-native";
import {SafeAreaView} from 'react-navigation'
import Map from "../components/Map";

const TrackCreateScreen = ()=>{
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text>Create a Track</Text>
            <Map/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

});
export  default TrackCreateScreen;