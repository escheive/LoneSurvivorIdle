import React, { useEffect, useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BaseCurrencyHeader from './currencies/BaseCurrencyHeader';
import Timer from './timer/Timer';

const Header = () => {

  return (
    <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['rgba(140, 62, 16, 0)', 'rgba(140, 62, 16, 0.7)', 'rgba(140, 62, 16, 0)']}
        style={styles.headerContainer}
    >
      <BaseCurrencyHeader />
      <Timer />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    headerContainer: {
        borderWidth: 3,
        borderColor: 'rgba(97, 110, 91, 0.8)',
    }
})

export default Header;
