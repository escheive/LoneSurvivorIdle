import React, { useMemo } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';

import Generator from '../components/Generator';
import Header from '../components/Header';
import { generatorCosts } from '../../data/formulas/generatorFormulas';

const GeneratorsScreen = () => {
    const generators = useSelector(state => state.generatorsReducer);
    const generatorsKeys = useMemo(() => Object.keys(generators), [generators]);

    return (
        <View>
            <Header />
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
        </View>
    )
}

export default GeneratorsScreen;