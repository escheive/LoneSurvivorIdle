import React, { useMemo } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../utils/hooks';
import { selectGenerators } from '../../store/reducers/generatorsSlice';

import Generator from '../components/Generator';
import Header from '../components/Header';
import { generatorCosts } from '../../data/formulas/generatorFormulas';
import { generatorsObject } from '../../data/generators';

const GeneratorsScreen = () => {
    const generators = useAppSelector(selectGenerators);
    const generatorKeys = Object.keys(generators);

    return (
        <View>
            <Header />
            <ScrollView>
                <Text>Home</Text>
                {generatorKeys.map((key) => {

                    return (
                        <Generator
                            key={key}
                            generatorKey={key}
                            generatorCost={generatorCosts[key]}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default GeneratorsScreen;