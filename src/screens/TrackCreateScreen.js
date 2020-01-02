import '../_mockLocation'
import React, {useContext, useCallback} from 'react';
import { StyleSheet, Text} from "react-native";
import {SafeAreaView, withNavigationFocus} from 'react-navigation'
import Map from "../components/Map";
import {Context as LocationContext } from '../context/LocationContext'
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import {FontAwesome} from '@expo/vector-icons';

const TrackCreateScreen = ({isFocused})=>{
    const {state:{recording}, addLocation} = useContext(LocationContext);
    const callBack = useCallback(location =>{
        addLocation(location, recording);
    },[recording]);
    const [err] = useLocation(isFocused || recording, callBack);

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={{fontSize:48}}>Create a Track</Text>
            <Map/>
            {err? <Text>Please enable location services</Text>:null}
            <TrackForm/>
        </SafeAreaView>
    )
};
TrackCreateScreen.navigationOptions = {
    title:'Add Tracks',
    tabBarIcon:<FontAwesome name="plus" size={20}/>
};
const styles = StyleSheet.create({

});
export  default  withNavigationFocus(TrackCreateScreen);