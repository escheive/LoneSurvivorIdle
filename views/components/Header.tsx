import React, { useEffect, useContext } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BaseCurrencyHeader from './currencies/BaseCurrencyHeader';
import Timer from './timer/Timer';

const Header = () => {

  return (
    <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['rgba(0, 0, 0, 0.2)', 'rgba(255, 255, 255, 0.2)']}
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
        padding: 2,
        borderColor: 'rgba(229, 216, 190, 1)',
        ...Platform.select({
            android: {
                elevation: 4,
            },
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
        })
    }
})

export default Header;
