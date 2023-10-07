import { incrementCurrency } from '../store/reducers/currencySlice';
import { incrementGenerator } from '../store/reducers/generatorsSlice';
import { formatNumber } from './helperFunctions';

export const handleGeneratorIncrements = (updatedGeneratorsRef, updatedCraftingProjectsRef, dispatch) => {
    let generator;
    let applicableCraftingProject;

    for (let i=0; i < updatedGeneratorsRef.current.length; i++) {
        generator = updatedGeneratorsRef.current[i];
        applicableCraftingProject = updatedCraftingProjectsRef.current[i];

        const totalGeneratorProduction = generator.totalQuantity * Math.max(1.1 ** applicableCraftingProject.totalCrafted, 1);

        if (generator.totalQuantity > 0) {
            if (generator.id === 0) {
                dispatch(incrementCurrency({ currencyType: 'money', value: totalGeneratorProduction }))
            } else {
                dispatch(incrementGenerator({ generatorId: i - 1, value: totalGeneratorProduction }))
            }
        }
    };
};

export const calculateOfflineGains = (updatedGeneratorsRef, updatedCraftingProjectsRef, dispatch, increments) => {
    const totalOfflineGains = [];
    let generator;
    let applicableCraftingProject;

    for (let i=0; i < updatedGeneratorsRef.current.length; i++) {
        generator = updatedGeneratorsRef.current[i];
        applicableCraftingProject = updatedCraftingProjectsRef.current[i];

        const totalGeneratorProduction = increments * generator.totalQuantity * Math.max(1.1 ** applicableCraftingProject.totalCrafted, 1);

        totalOfflineGains.push({
            name: generator.name,
            gains: formatNumber(totalGeneratorProduction)
        });

        if (generator.totalQuantity > 0) {
            if (generator.id === 0) {
                dispatch(incrementCurrency({ currencyType: 'money', value: totalGeneratorProduction }))
            } else {
                dispatch(incrementGenerator({ generatorId: i - 1, value: totalGeneratorProduction }))
            }
        }
    };
    return totalOfflineGains;
};