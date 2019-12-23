import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import style from './Button.style';

const Button = ({onClick, disabled}) => (
  <TouchableOpacity
    onPress={onClick}
    style={disabled ? [style.button, style.disabled] : style.button}
    disabled={disabled}>
    <Text style={style.buttonText}>Proceed</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
