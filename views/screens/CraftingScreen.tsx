import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useAppSelector } from '../../utils/hooks';

import { selectCrafting } from '../../store/reducers/craftingSlice';

import ScreenWithBackButton from '../components/ScreenWithBackButton';

const CraftingScreen = () => {
    return (
        <ScreenWithBackButton>
            <ScrollView>
                <Text>CraftingScreen</Text>
                <View>

                </View>
            </ScrollView>
        </ScreenWithBackButton>
    )
}

export default CraftingScreen;