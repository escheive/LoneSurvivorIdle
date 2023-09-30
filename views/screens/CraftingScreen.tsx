import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useAppSelector } from '../../utils/hooks';

import { selectCrafting } from '../../store/reducers/craftingSlice';

import ScreenWithBackButton from '../components/ScreenWithBackButton';
import CraftingProject from '../components/CraftingProject';

const CraftingScreen = () => {
    const craftingProjects = useAppSelector(selectCrafting);
    const craftingProjectsKeys = Object.keys(craftingProjects);

    return (
        <ScreenWithBackButton>
            <ScrollView>
                <Text>CraftingScreen</Text>
                {craftingProjectsKeys.map((project) => (
                    <CraftingProject
                        key={project}
                        craftingProjectKey={project}
                    />
                ))}
            </ScrollView>
        </ScreenWithBackButton>
    )
}

export default CraftingScreen;