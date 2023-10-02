import React, { useEffect, useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import BaseCurrencyHeader from './currencies/BaseCurrencyHeader';
import Timer from './timer/Timer';

const Header = () => {

  return (
    <View style={styles.headerContainer}>
      <BaseCurrencyHeader />
      <Timer />
    </View>
  );
};

const styles = StyleSheet.create({
    headerContainer: {
        borderWidth: 2,
        borderColor: 'rgba(160, 160, 160, 1.0)',
        backgroundColor: 'rgba(44, 62, 80, 0.9)',
    }
})

export default Header;
