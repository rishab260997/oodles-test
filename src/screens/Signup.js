import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import SignupForm from '../components/SignupForm';
import {Styles} from '../styles/Signup';

const Signup = ({navigation}) => {
  return (
    <ScrollView>
      <View style={Styles.root}>
        <Text style={Styles.title}>Sign Up</Text>
        <SignupForm navigation={navigation} />
      </View>
    </ScrollView>
  );
};

export default Signup;
