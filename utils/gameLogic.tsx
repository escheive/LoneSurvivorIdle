import { incrementCurrency } from '../store/reducers/currencySlice';
import { incrementGenerator } from '../store/reducers/generatorsSlice';
import { formatNumber } from './helperFunctions';

export const handleGeneratorIncrements = (generators, updatedGeneratorsRef, craftingProjectKeys, updatedCraftingProjectsRef, dispatch) => {
    for (let i=0; i < generators.length; i++) {
        const applicableCraftingProjectKey = craftingProjectKeys[i];
        const applicableCraftingProject = updatedCraftingProjectsRef.current[applicableCraftingProjectKey];

        const totalGeneratorProduction = generators[i].totalQuantity * Math.max(1.1 ** applicableCraftingProject.totalCrafted, 1);
        
        if (updatedGeneratorsRef.current[i].totalQuantity > 0) {
            if (generators[i].id === 0) {
                dispatch(incrementCurrency({ currencyType: 'money', value: totalGeneratorProduction }))
            } else {
                dispatch(incrementGenerator({ generatorId: i - 1, value: totalGeneratorProduction }))
            }
        }
    };
};

export const calculateOfflineGains = (generators, updatedGeneratorsRef, craftingProjectKeys, updatedCraftingProjectsRef, dispatch, increments) => {
    const totalOfflineGains = [];
    for (let i=0; i < generators.length; i++) {
        const applicableCraftingProjectKey = craftingProjectKeys[i];
        const applicableCraftingProject = updatedCraftingProjectsRef.current[applicableCraftingProjectKey];

        const totalGeneratorProduction = increments * generators[i].totalQuantity * Math.max(1.1 ** applicableCraftingProject.totalCrafted, 1);

        totalOfflineGains.push({
            name: generators[i].name,
            gains: formatNumber(totalGeneratorProduction)
        });

        if (updatedGeneratorsRef.current[i].totalQuantity > 0) {
            if (generators[i].id === 0) {
                dispatch(incrementCurrency({ currencyType: 'money', value: totalGeneratorProduction }))
            } else {
                dispatch(incrementGenerator({ generatorId: i - 1, value: totalGeneratorProduction }))
            }
        }
    };
    return totalOfflineGains;
};