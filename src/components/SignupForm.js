import React, {useState} from 'react';
import {Text, View, Pressable, TextInput, ScrollView} from 'react-native';
import {colors} from '../styles/colors';
import {Styles} from '../styles/Signup';

const SignupForm = ({navigation}) => {
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confPassword: false,
  });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confPassword: '',
  });

  const handleChange = (key, value) => {
    setFormData({...formData, [key]: value});
  };

  const handleSubmit = () => {
    navigation.navigate('ThankYou');
  };
  return (
    <ScrollView>
      <View style={Styles.formContainer}>
        <View style={Styles.inputContainer}>
          <Text style={Styles.inputLabel}>First Name</Text>
          <TextInput
            placeholder="First Name"
            placeholderTextColor={colors.secondary}
            style={Styles.input}
            value={formData.firstName}
            onTextInput={text => handleChange('firstName', text)}
          />
          {error.firstName && (
            <Text style={Styles.error}>{error.firstName}</Text>
          )}
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.inputLabel}>Last Name</Text>
          <TextInput
            placeholder="Last Name"
            placeholderTextColor={colors.secondary}
            style={Styles.input}
            value={formData.lastName}
            onTextInput={text => handleChange('lastName', text)}
          />
          {error.lastName && <Text style={Styles.error}>{error.lastName}</Text>}
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.inputLabel}>Email</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor={colors.secondary}
            style={Styles.input}
            value={formData.email}
            textContentType="emailAddress"
            onTextInput={text => handleChange('email', text)}
          />
          {error.email && <Text style={Styles.error}>{error.email}</Text>}
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.inputLabel}>Password</Text>
          <TextInput
            placeholder="Password"
            placeholderTextColor={colors.secondary}
            style={Styles.input}
            value={formData.password}
            secureTextEntry
            textContentType="password"
            onChange={text => handleChange('password', text)}
          />
          {error.password && <Text style={Styles.error}>{error.password}</Text>}
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.inputLabel}>Confirm Password</Text>
          <TextInput
            placeholder="Confirm password"
            placeholderTextColor={colors.secondary}
            style={Styles.input}
            value={formData.confPassword}
            textContentType="password"
            secureTextEntry
            onChange={text => handleChange('confPassword', text)}
          />
          {error.confPassword && (
            <Text style={Styles.error}>{error.confPassword}</Text>
          )}
        </View>
      </View>
      <Pressable onPress={handleSubmit} style={Styles.button}>
        <Text style={Styles.buttonText}>Submit</Text>
      </Pressable>
    </ScrollView>
  );
};

export default SignupForm;
