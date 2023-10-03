import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';

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
    },
    progressBar: {
        position: 'relative',
        height: 20,
        width: 200,
        borderWidth: 3,
        borderColor: 'rgba(70, 31, 8, 0.7)',
        backgroundColor: 'rgba(280, 124, 32, 0.3)',
        borderRadius: 4,
        overflow: 'hidden',
    },
    innerBar: {
        height: '100%',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        backgroundColor: 'rgba(140, 62, 16, 0.7)',
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