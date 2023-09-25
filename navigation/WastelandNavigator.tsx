import { createStackNavigator } from '@react-navigation/stack';

import CraftingScreen from '../views/screens/CraftingScreen';

const Stack = createStackNavigator();

const WastelandNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Crafting"
                component={CraftingScreen}
            />
        </Stack.Navigator>
    )
}

export default WastelandNavigator;