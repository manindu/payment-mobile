import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './Loading.style';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

export default Loading;
