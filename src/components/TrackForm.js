import React, {useContext} from 'react';
import {View, StyleSheet} from "react-native";
import {Text, Input, Button} from "react-native-elements";
import Spacer from "./Spacer";
import {Context as LocationContext} from '../context/LocationContext';

const TrackForm = () => {
    const {state:{name, recording, locations}, startRecording, stopRecording, changeName } = useContext(LocationContext);
    console.log(locations.length);
    return (
        <>
            <Spacer>
                <Input placeholder="Enter Name"/>
            </Spacer>
            { recording ? <Button title='Stop' onPress={stopRecording}/> : <Button title="Start Recording" onPress={startRecording}/>}

        </>
    );
};
export default TrackForm;