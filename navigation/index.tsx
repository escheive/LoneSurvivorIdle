import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Header from '../views/components/Header';
import GeneratorsScreen from '../views/screens/GeneratorsScreen';
import WastelandNavigator from './WastelandNavigator';

const BottomTab = createBottomTabNavigator();

const Navigation = () => {

    return (
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
    )

}

export default Navigation;