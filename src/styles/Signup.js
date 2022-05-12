import {StyleSheet} from 'react-native';
import { colors } from './colors';

export const Styles = StyleSheet.create({
  root: {
    backgroundColor: colors.background,
    paddingHorizontal: 10,
    paddingVertical: 50,
  },
  title: {
    color: colors.primary,
    fontSize: 36,
    textAlign: 'center',
    fontWeight: '700',
  },
  formContainer: {
    marginVertical: 50,
  },
  inputContainer: {
      marginVertical: 10,
  },
  inputLabel: {
    color: colors.primary,
    fontSize: 16,
    marginHorizontal: 5
  },
  input: {
    borderColor: colors.secondary,
    borderWidth: 2,
    borderRadius: 50,
    marginBottom: 5,
    paddingHorizontal: 20,
    fontSize: 18,
    paddingVertical: 5,
    color: colors.primary,
  },
  button: {
    backgroundColor: colors.primary,
    maxWidth: 150,
    alignSelf: 'center',
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 20,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '800',
  },
  error: {
      color: colors.danger
  }
});
