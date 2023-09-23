import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing
} from 'react-native-reanimated';

const TickProgressBar = ({ progress }) => {

    const animatedStyles = useAnimatedStyle(() => ({
      width: `${progress * 100}%`,
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
        borderColor: 'tan',
        borderRadius: 4,
        borderWidth: 2,
        overflow: 'hidden',
    },
    innerBar: {
        height: '100%',
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        backgroundColor: 'tan',
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