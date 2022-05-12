import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

const Thankyou = ({navigation}) => {
    const handlePress = () => {
        console.log("asdfghjkl")
        navigation.navigate("Signup")
    }
  return (
    <View style={styles.root}>
        <Pressable style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>⬅</Text>
        </Pressable>
      <View style={styles.container}>
        <Text style={styles.title}>Thank you</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
  },
  button: {
      marginVertical: 50,
      marginHorizontal: 20,
  },
  buttonText: {
      fontSize: 36,
  }
});

export default Thankyou;
