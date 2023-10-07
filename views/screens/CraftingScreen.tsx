import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useAppSelector } from '../../utils/hooks';

import { selectCrafting } from '../../store/reducers/craftingSlice';

import ScreenWithBackButton from '../components/ScreenWithBackButton';
import CraftingProject from '../components/CraftingProject';

import { craftingCosts } from '../../data/formulas/costFormulas';

const CraftingScreen = () => {
    const craftingProjects = useAppSelector(selectCrafting);

    return (
        <ScreenWithBackButton>
            <ScrollView>
                {craftingProjects.map((project) => (
                    <CraftingProject
                        key={project.id}
                        craftingProjectId={project.id}
                        projectCost={craftingCosts[project.id]}
                    />
                ))}
            </ScrollView>
        </ScreenWithBackButton>
    )
}

export default CraftingScreen;