import React, { useEffect, useContext } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';

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
        padding: 2,
        borderColor: 'rgba(229, 216, 190, 1)',
        ...Platform.select({
            android: {
                elevation: 3,
            },
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
                shadowRadius: 4,
            },
            web: {
              boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.3)'
            },
        })
    }
})

export default Header;
