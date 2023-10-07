import React, { useMemo } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../utils/hooks';
import { selectGenerators } from '../../store/reducers/generatorsSlice';

import Generator from '../components/Generator';
import Header from '../components/Header';
import { generatorCosts } from '../../data/formulas/costFormulas';

const GeneratorsScreen = () => {
    const generators = useAppSelector(selectGenerators);

    return (
        <View style={styles.container}>
            <ScrollView>
                {generators.map((generator) => {

                    return (
                        <Generator
                            key={generator.id}
                            generatorId={generator.id}
                            generatorCost={generatorCosts[generator.id]}
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(44, 62, 80, 0.9)',
    },
})

export default GeneratorsScreen;