import React, { useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';

import { resetGenerators } from '../store/reducers/generatorsReducer';
import { resetCurrency, setCurrency } from '../store/reducers/currencyReducer';

import GeneratorsScreen from './screens/GeneratorsScreen';
import Timer from './components/timer/Timer';

const BottomTab = createBottomTabNavigator();

const Home = () => {
    const dispatch = useDispatch();
//     dispatch(setCurrency('money', 10))
//             dispatch(setCurrency('prestigePoints', 10))

    useEffect(() => {
//         dispatch(resetGenerators());
//         dispatch(resetCurrency('money'))

    }, [])

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