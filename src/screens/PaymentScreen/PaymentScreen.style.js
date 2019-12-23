import {StyleSheet} from 'react-native';
import {colors} from '../../constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  expirySection: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
  },
  labelContainer: {
    flexDirection: 'row',
    width: '90%',
    marginBottom: 5,
    alignSelf: 'center',
  },
  required: {
    color: colors.errorColor,
  },
});

export default styles;
