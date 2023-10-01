import { incrementCurrency } from '../store/reducers/currencySlice';
import { incrementGenerator } from '../store/reducers/generatorsSlice';
import { formatNumber } from './helperFunctions';

export const handleGeneratorIncrements = (generatorKeys, updatedGeneratorsRef, craftingProjectKeys, updatedCraftingProjectsRef, dispatch) => {
    for (let i=0; i < generatorKeys.length; i++) {
        const currentGeneratorKey = generatorKeys[i]
        const previousGeneratorKey = generatorKeys[i - 1];
        const currentGenerator = updatedGeneratorsRef.current[currentGeneratorKey];
        const previousGenerator = updatedGeneratorsRef.current[previousGeneratorKey];
        const applicableCraftingProjectKey = craftingProjectKeys[i];
        const applicableCraftingProject = updatedCraftingProjectsRef.current[applicableCraftingProjectKey];

        const totalGeneratorProduction = currentGenerator.totalQuantity * Math.max(1.1 ** applicableCraftingProject.totalCrafted, 1);

        if (updatedGeneratorsRef.current[currentGeneratorKey].totalQuantity > 0) {
            if (currentGeneratorKey === 'generatorOne') {
                dispatch(incrementCurrency({ currencyType: 'money', value: totalGeneratorProduction }))
            } else {
                dispatch(incrementGenerator({ generatorKey: previousGeneratorKey, value: totalGeneratorProduction }))
            }
        }
    };
};

export const calculateOfflineGains = (generatorKeys, updatedGeneratorsRef, craftingProjectKeys, updatedCraftingProjectsRef, dispatch, increments) => {
    const totalOfflineGains = [];
    for (let i=0; i < generatorKeys.length; i++) {
        const currentGeneratorKey = generatorKeys[i]
        const previousGeneratorKey = generatorKeys[i - 1];
        const currentGenerator = updatedGeneratorsRef.current[currentGeneratorKey];
        const previousGenerator = updatedGeneratorsRef.current[previousGeneratorKey];
        const applicableCraftingProjectKey = craftingProjectKeys[i];
        const applicableCraftingProject = updatedCraftingProjectsRef.current[applicableCraftingProjectKey];

        const totalGeneratorProduction = increments * currentGenerator.totalQuantity * Math.max(1.1 ** applicableCraftingProject.totalCrafted, 1);

        totalOfflineGains.push(`${currentGeneratorKey}: ${formatNumber(totalGeneratorProduction)}`);

        if (updatedGeneratorsRef.current[currentGeneratorKey].totalQuantity > 0) {
            if (currentGeneratorKey === 'generatorOne') {
                dispatch(incrementCurrency({ currencyType: 'money', value: totalGeneratorProduction }))
            } else {
                dispatch(incrementGenerator({ generatorKey: previousGeneratorKey, value: totalGeneratorProduction }))
            }
        }
    };
    return totalOfflineGains;
};