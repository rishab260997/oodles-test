import React, {useState} from 'react';
import {Text, View, Pressable, TextInput, ScrollView} from 'react-native';
import {Styles} from '../styles/Signup';

const SignupForm = ({navigation}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confPassword: '',
  });

  const handleChange = (key, value) => {
    setFormData({...formData, [key]: value});
  };

  const handleSubmit = () => {
    navigation.navigate('ThankYou')
  }
  return (
    <ScrollView>
      <View style={Styles.formContainer}>
        <Text style={Styles.inputLabel}>Name</Text>
        <TextInput
          style={Styles.input}
          value={formData.name}
          onTextInput={text => handleChange('name', text)}
        />
        <Text style={Styles.inputLabel}>Email</Text>
        <TextInput
          style={Styles.input}
          value={formData.email}
          onTextInput={text => handleChange('email', text)}
        />
        <Text style={Styles.inputLabel}>Password</Text>
        <TextInput
          style={Styles.input}
          value={formData.password}
          onChange={text => handleChange('password', text)}
        />
        <Text style={Styles.inputLabel}>Confirm Password</Text>
        <TextInput
          style={Styles.input}
          value={formData.confPassword}
          onChange={text => handleChange('confPassword', text)}
        />
      </View>
      <Pressable onPress={handleSubmit} style={Styles.button}>
        <Text style={Styles.buttonText}>Submit</Text>
      </Pressable>
    </ScrollView>
  );
};

export default SignupForm;
