import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GeneratorsScreen from './screens/GeneratorsScreen';

const BottomTab = createBottomTabNavigator();

const Home = () => {
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