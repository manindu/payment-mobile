import React from 'react';
import {View, TextInput, Image} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import valid from 'card-validator';
import PropTypes from 'prop-types';
import {getCardInputMask, getCardLogo} from '../../helpers';
import styles from './CardInput.style';

const CardInput = ({
  id,
  label,
  placeholder,
  onChange,
  onBlur,
  value,
  type,
  error,
  required,
}) => {
  const numberValidation = valid.number(value);
  return (
    <View style={styles.cardInputContainer}>
      <View style={styles.labelContainer}>
        <TextInput style={styles.inputLabel}>{label}</TextInput>
        {required && <View style={styles.required}>*</View>}
      </View>
      <TextInputMask
        id={id}
        style={error ? [styles.input, styles.errorInput] : styles.input}
        title="text"
        mask={getCardInputMask(value)}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
      />
      {numberValidation.card && (
        <Image
          style={styles.cardImage}
          source={getCardLogo(numberValidation.card.type)}
        />
      )}
    </View>
  );
};

CardInput.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
};

CardInput.defaultProps = {
  label: 'Input',
  placeholder: 'XXXX XXXX XXXX XXXX',
  type: 'text',
  error: '',
  required: true,
};

export default CardInput;
