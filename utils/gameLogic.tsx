import { incrementCurrency } from '../store/reducers/currencySlice';
import { incrementGenerator } from '../store/reducers/generatorsSlice';
import { formatNumber } from './helperFunctions';

export const handleGeneratorIncrements = (updatedGeneratorsRef, updatedCraftingProjectsRef, salvageUpgrades, dispatch) => {
    let generator;
    let applicableCraftingProject;
    let applicableSalvageUpgrade;

    for (let i=0; i < updatedGeneratorsRef.current.length; i++) {
        generator = updatedGeneratorsRef.current[i];
        applicableCraftingProject = updatedCraftingProjectsRef.current[i];
        applicableSalvageUpgrade = salvageUpgrades[i];

        const totalGeneratorProduction = Math.floor(
          generator.totalQuantity *
          Math.max(1.1 ** applicableCraftingProject.totalCrafted, 1) *
          Math.max(applicableSalvageUpgrade.modifier ** applicableSalvageUpgrade.level, 1)
        );

        if (generator.totalQuantity > 0) {
            if (generator.id === 0) {
                dispatch(incrementCurrency({ currencyType: 'scraps', value: totalGeneratorProduction }))
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
                dispatch(incrementCurrency({ currencyType: 'scraps', value: totalGeneratorProduction }))
            } else {
                dispatch(incrementGenerator({ generatorId: i - 1, value: totalGeneratorProduction }))
            }
        }
    };
    return totalOfflineGains;
};

export function calculateSalvagedTechEarned(totalScraps: number) {
  const base = 10;

  const salvagedTechEarned = Math.log10(totalScraps) / Math.log10(base)

  return Math.max(0, Math.floor(salvagedTechEarned))
}