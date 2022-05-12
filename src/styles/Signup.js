import {StyleSheet} from 'react-native';
import { colors } from './colors';

export const Styles = StyleSheet.create({
  root: {
    backgroundColor: colors.background,
    flex: 1,
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
  inputLabel: {
    color: colors.primary,
    fontSize: 24,
    marginBottom: 0,
    marginTop: 10,
  },
  input: {
    borderColor: colors.secoondary,
    borderWidth: 2,
    borderRadius: 50,
    marginBottom: 20,
    fontSize: 24,
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
});
