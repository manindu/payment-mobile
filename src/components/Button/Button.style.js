import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const style = StyleSheet.create({
  button: {
    borderColor: colors.controlBorderColor,
    width: '90%',
    height: 40,
    backgroundColor: colors.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  disabled: {
    backgroundColor: colors.controlBorderColor,
  },
});

export default style;
