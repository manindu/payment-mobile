import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginBottom: 20,
  },
  spacing: {
    height: 21,
  },
  errorInput: {
    borderWidth: 2,
    borderColor: colors.errorColor,
  },
  input: {
    width: '100%',
    borderColor: colors.controlBorderColor,
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
  inputLabel: {},
  labelContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  required: {
    color: colors.errorColor,
  },
});

export default styles;
