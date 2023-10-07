import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Banner = ({message}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.bannerText}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,50,50, 0.9)',
    zIndex: 999,
  },
  bannerText: {
    color: 'white',
    paddingVertical: 15,
  }
})

export default Banner;