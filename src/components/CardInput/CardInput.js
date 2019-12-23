import React from 'react';
import {View, Text, Image} from 'react-native';
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
        <Text style={styles.inputLabel}>{label}</Text>
        {required && <Text style={styles.required}>*</Text>}
      </View>
      <TextInputMask
        id={id}
        style={error ? [styles.input, styles.errorInput] : styles.input}
        title="text"
        type="credit-card"
        options={{
          obfuscated: false,
          mask: getCardInputMask(value),
        }}
        placeholder={placeholder}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
      />
      {numberValidation.card && (
        <Image
          style={styles.cardImage}
          source={getCardLogo(numberValidation.card.type)}
          resizeMode="contain"
        />
      )}
    </View>
  );
};

CardInput.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
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
