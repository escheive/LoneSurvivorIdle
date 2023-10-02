import React, { useEffect, useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BaseCurrencyHeader from './currencies/BaseCurrencyHeader';
import Timer from './timer/Timer';

const Header = () => {

  return (
    <LinearGradient colors={['rgba(229, 216, 190, 0.8)', 'rgba(97, 110, 91, 0.8)']} style={styles.headerContainer}>
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
