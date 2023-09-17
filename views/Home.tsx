import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';

import

const BottomTab = createBottomTabNavigator();

const Home = () => {
    return (
        <NavigationContainer>
            <BottomTab.Navigator>
                <BottomTab.Screen
                    name="Home"
                    component={HomeScreen}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}

export default Home;