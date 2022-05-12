import React from 'react';
import {Text, ScrollView} from 'react-native'
import SignupForm from '../components/SignupForm';
import { Styles } from '../styles/Signup';

const Signup = ({navigation}) => {
    return(
        <ScrollView style={Styles.root}>
            <Text style={Styles.title}>
                Sign Up
            </Text>
            <SignupForm navigation={navigation} />
        </ScrollView>
    )
}

export default Signup;