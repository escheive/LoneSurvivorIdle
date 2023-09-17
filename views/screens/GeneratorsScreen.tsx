import React, { useMemo } from 'react';
import { ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';

import Generator from '../components/Generator';
import { generatorCosts } from '../../data/formulas/generatorFormulas';

const GeneratorsScreen = () => {
    const generators = useSelector(state => state.generatorsReducer);
    const generatorsKeys = useMemo(() => Object.keys(generators), [generators]);

    return (
        <ScrollView>
            <Text>Home</Text>
            {generatorsKeys.map((key) => (
                <Generator
                    key={key}
                    generatorKey={key}
                    generatorCostFormula={generatorCosts[key]}
                />
            ))}
        </ScrollView>
    )
}

export default GeneratorsScreen;