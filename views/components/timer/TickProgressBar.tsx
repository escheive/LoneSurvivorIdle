import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  interpolate
} from 'react-native-reanimated';

const TickProgressBar = ({ progress }) => {

    const animatedStyles = useAnimatedStyle(() => ({
      width: `${interpolate(progress, [0,1], [0,100])}%`,
    }));

    return (
        <View style={styles.container}>
          <View style={styles.progressBar}>
              <Animated.View style={[styles.innerBar, animatedStyles]} />
              <View style={styles.incomeContainer}>
                <Text style={styles.incomeText}>1</Text>
              </View>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    progressBar: {
        position: 'relative',
        height: 20,
        width: 200,
        borderWidth: 3,
        borderColor: 'rgba(201, 67, 61, 0.7)',
        borderRadius: 4,
        overflow: 'hidden',
    },
    innerBar: {
        height: '100%',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        backgroundColor: 'rgba(201, 67, 61, 0.7)',
    },
    incomeContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    incomeText: {
      fontSize: 16,
    },
});

export default TickProgressBar;