import React from 'react';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import valid from 'card-validator';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import styles from './PaymentScreen.style';
import {Loading, Input, Button, CardInput} from '../../components';
import {submitPayment} from '../../state/actions/paymentActions';

const PaymentScreen = ({submitPaymentDetails, payment}) => {
  const onSubmit = values => {
    submitPaymentDetails({
      name: values.name,
      month: values.month,
      year: values.year,
      cardNumber: values.cardNumber,
      cvv: values.cvv,
    });
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      month: '',
      year: '',
      cvv: '',
      cardNumber: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .matches(/^[a-zA-Z\s]*$/, {
          message: 'Name should include letters',
          excludeEmptyString: true,
        })
        .strict(true)
        .required(),
      month: Yup.number()
        .integer()
        .min(1)
        .max(12)
        .required(),
      year: Yup.number()
        .integer()
        .moreThan(new Date().getFullYear() - 1)
        .required(),
      cvv: Yup.number()
        .positive()
        .integer()
        .test(
          'len',
          'Must be 3 or 4 digits',
          val =>
            val && (val.toString().length === 3 || val.toString().length === 4),
        )
        .required(),
      cardNumber: Yup.string()
        .test('test-number', 'Credit Card number is invalid', value => {
          const isValidNumber = valid.number(value).isValid;
          return isValidNumber;
        })
        .required(),
    }),
    onSubmit,
  });

  if (payment.processing) {
    return <Loading />;
  }

  const {
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    isValid,
    handleSubmit,
  } = formik;

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled>
        <Input
          id="name"
          label="Name on Card"
          onChange={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
          error={touched.name && errors.name && errors.name.toString()}
        />
        <CardInput
          id="cardNumber"
          label="Card Number"
          onChange={handleChange('cardNumber')}
          onBlur={handleBlur('cardNumber')}
          value={values.cardNumber}
          error={
            touched.cardNumber &&
            errors.cardNumber &&
            errors.cardNumber.toString()
          }
        />
        <View style={styles.labelContainer}>
          <Text style={styles.inputLabel}>Expiry Date</Text>
          <Text style={styles.required}>*</Text>
        </View>
        <View style={styles.expirySection}>
          <Input
            id="month"
            label=""
            onChange={handleChange('month')}
            onBlur={handleBlur('month')}
            value={values.month}
            error={touched.month && errors.month && errors.month.toString()}
            style={{width: '45%'}}
            placeholder="10"
            keyboardType="numeric"
          />
          <Input
            id="year"
            label=""
            onChange={handleChange('year')}
            onBlur={handleBlur('year')}
            value={values.year}
            error={touched.year && errors.year && errors.year.toString()}
            style={{width: '45%'}}
            placeholder={(new Date().getFullYear() + 1).toString()}
            keyboardType="numeric"
          />
        </View>
        <Input
          id="cvv"
          label="CVV"
          onChange={handleChange('cvv')}
          onBlur={handleBlur('cvv')}
          value={values.cvv}
          error={touched.cvv && errors.cvv && errors.cvv.toString()}
          placeholder="454"
          keyboardType="numeric"
        />
        <Button disabled={!isValid} onClick={handleSubmit} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

PaymentScreen.propTypes = {
  submitPaymentDetails: PropTypes.func.isRequired,
  payment: PropTypes.shape({processing: PropTypes.bool}).isRequired,
};

const mapStateToProps = state => ({
  payment: state.payment,
});

export default connect(mapStateToProps, {
  submitPaymentDetails: submitPayment,
})(PaymentScreen);
