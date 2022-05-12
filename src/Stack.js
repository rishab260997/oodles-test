import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Signup from './screens/Signup';
import Thankyou from './screens/Thankyou';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ThankYou" component={Thankyou} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
