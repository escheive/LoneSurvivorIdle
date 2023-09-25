import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GeneratorsScreen from '../views/screens/GeneratorsScreen';

const BottomTab = createBottomTabNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
            <BottomTab.Navigator>
                <BottomTab.Screen
                    name="Generators"
                    component={GeneratorsScreen}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    )

}

export default Navigation;