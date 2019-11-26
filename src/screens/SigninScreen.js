import React,{ useContext } from 'react';
import { View, StyleSheet} from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/Navlink";
import {Context as AuthContext} from "../context/AuthContext";

const SigninScreen = ()=>{
    const {state, signin} = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign In to Your account"
                submitButtonText="Sign In"
                errorMessage={state.errorMessage}
                onSubmit={signin}
            />
            <NavLink
                routeName='Signup'
                text="Dont have  an account? Sign up instead"
            />
        </View>
        );
};

SigninScreen.navigationOptions = ()=>{
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
export  default SigninScreen;