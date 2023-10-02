import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Header from '../views/components/Header';
import GeneratorsScreen from '../views/screens/GeneratorsScreen';
import WastelandNavigator from './WastelandNavigator';

const BottomTab = createBottomTabNavigator();

const Navigation = () => {

    return (
        <View style={styles.navigationContainer}>
            <NavigationContainer>
                <Header />
                <BottomTab.Navigator
                    screenOptions={{ headerShown: false }}
                >
                    <BottomTab.Screen
                        name="Generators"
                        component={GeneratorsScreen}
                    />
                    <BottomTab.Screen
                        name="Wasteland"
                        component={WastelandNavigator}
                    />
                </BottomTab.Navigator>
            </NavigationContainer>
        </View>
    )
}

const styles = StyleSheet.create({
    navigationContainer: {
        flex: 1,
        backgroundColor: 'rgba(44, 62, 80, 0.9)',
    }
})

export default Navigation;