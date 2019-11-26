import React,{useContext}from 'react';
import {View, StyleSheet, TouchableOpacity} from "react-native";
import {Text} from "react-native-elements";
import Spacer from "../components/Spacer";
import {Context as AuthContext}  from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/Navlink";

const SignupScreen = ({navigation}) => {
    const {state, signup} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign Up for Tracker"
                submitButtonText="Sign Up"
                errorMessage={state.errorMessage}
                onSubmit={signup}
            />
            <NavLink
                routeName='Signin'
                text="Already have  an account? Sign in instead"
            />
        </View>
    );
};
SignupScreen.navigationOptions = ()=>{
    return {
        header:null
    }
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:250

    }
});
export default SignupScreen;