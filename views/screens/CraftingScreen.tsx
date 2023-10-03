import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useAppSelector } from '../../utils/hooks';

import { selectCrafting } from '../../store/reducers/craftingSlice';

import ScreenWithBackButton from '../components/ScreenWithBackButton';
import CraftingProject from '../components/CraftingProject';

import { craftingCosts } from '../../data/formulas/costFormulas';

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
                        craftingProjects={craftingProjects}
                        craftingProjectKey={project}
                        projectCost={craftingCosts[project]}
                    />
                ))}
            </ScrollView>
        </ScreenWithBackButton>
    )
}

export default CraftingScreen;