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

  const handleValidate = () => {
    let exp =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    let errorObj = {
      firstName: false,
      lastName: false,
      email: false,
      password: false,
      confPassword: false,
    };
    let isValidated = false;
    if (!formData.firstName.length) {
      console.log(formData.firstName.length, 'FIRSTNAME');
      errorObj.firstName = 'Please enter your first name';
    }
    if (!formData.lastName.length) {
      errorObj.lastName = 'Please enter your last name';
    }
    if (!exp.test(String(formData.email).toLowerCase())) {
      errorObj.email = 'Please enter a valid email';
    }

    const passwordInputValue = formData.password.trim();
    //for password
    const uppercaseRegExp = /(?=.*?[A-Z])/;
    const lowercaseRegExp = /(?=.*?[a-z])/;
    const digitsRegExp = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp = /.{8,}/;
    const passwordLength = passwordInputValue.length;
    const uppercasePassword = uppercaseRegExp.test(passwordInputValue);
    const lowercasePassword = lowercaseRegExp.test(passwordInputValue);
    const digitsPassword = digitsRegExp.test(passwordInputValue);
    const specialCharPassword = specialCharRegExp.test(passwordInputValue);
    const minLengthPassword = minLengthRegExp.test(passwordInputValue);
    let errMsg = '';
    if (passwordLength === 0) {
      errMsg = 'Password is empty';
    } else if (!uppercasePassword) {
      errMsg = 'At least one Uppercase';
    } else if (!lowercasePassword) {
      errMsg = 'At least one Lowercase';
    } else if (!digitsPassword) {
      errMsg = 'At least one digit';
    } else if (!specialCharPassword) {
      errMsg = 'At least one Special Characters';
    } else if (!minLengthPassword) {
      errMsg = 'At least minumum 8 characters';
    } else {
      errMsg = '';
    }
    if (errMsg.length) {
      errorObj.password = errMsg;
    }
    // for confirm password
    if (formData.confPassword.length > 0) {
      if (formData.confPassword !== formData.password) {
        errorObj.confPassword = 'Confirm password is not matched';
      } else {
        errorObj.confPassword = false;
      }
    } else {
        errorObj.confPassword = "Please confirm your password"
    }
    Object.values(errorObj).forEach(val => {
        console.log(val)
      if (val && val.length) {
        isValidated = false;
        return
      } else {
          isValidated = true
      }
    });
    setError(errorObj);
    return isValidated;
  };

  console.log(error, '::ERROR');

  const handleSubmit = () => {
    let isValidated = handleValidate();
    console.log(isValidated,'isValidated')
    if (isValidated) {
      navigation.navigate('ThankYou');
    }
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
            onChangeText={text => handleChange('firstName', text)}
          />
          <Text style={Styles.error}>{error.firstName && error.firstName}</Text>
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.inputLabel}>Last Name</Text>
          <TextInput
            placeholder="Last Name"
            placeholderTextColor={colors.secondary}
            style={Styles.input}
            value={formData.lastName}
            onChangeText={text => handleChange('lastName', text)}
          />
          <Text style={Styles.error}>{error.lastName && error.lastName}</Text>
        </View>
        <View style={Styles.inputContainer}>
          <Text style={Styles.inputLabel}>Email</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor={colors.secondary}
            style={Styles.input}
            value={formData.email}
            textContentType="emailAddress"
            onChangeText={text => handleChange('email', text)}
          />
          <Text style={Styles.error}>{error.email && error.email}</Text>
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
            onChangeText={text => handleChange('password', text)}
          />
          <Text style={Styles.error}>{error.password && error.password}</Text>
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
            onChangeText={text => handleChange('confPassword', text)}
          />
          <Text style={Styles.error}>
            {error.confPassword && error.confPassword}
          </Text>
        </View>
      </View>
      <Pressable onPress={handleSubmit} style={Styles.button}>
        <Text style={Styles.buttonText}>Submit</Text>
      </Pressable>
    </ScrollView>
  );
};

export default SignupForm;
