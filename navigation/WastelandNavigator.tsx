import { createStackNavigator } from '@react-navigation/stack';

import WastelandHome from '../views/screens/WastelandHome';
import CraftingScreen from '../views/screens/CraftingScreen';
import MissionsScreen from '../views/screens/MissionsScreen';

const Stack = createStackNavigator();

const WastelandNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Home"
                component={WastelandHome}
            />
            <Stack.Screen
                name="Crafting"
                component={CraftingScreen}
            />
            <Stack.Screen
                name="Missions"
                component={MissionsScreen}
            />
        </Stack.Navigator>
    )
}

export default WastelandNavigator;