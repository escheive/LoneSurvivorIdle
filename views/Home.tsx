import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';

import { resetGenerators } from '../store/reducers/generatorsReducer';

import GeneratorsScreen from './screens/GeneratorsScreen';

const BottomTab = createBottomTabNavigator();

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
//         dispatch(resetGenerators());
    })
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

export default Home;