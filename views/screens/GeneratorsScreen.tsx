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
    const generatorKeys = Object.keys(generators);

    return (
        <View style={styles.container}>
            <ScrollView>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(229, 216, 190, 1)',
    },
})

export default GeneratorsScreen;