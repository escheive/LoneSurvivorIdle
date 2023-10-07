import React, { useState, useMemo } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

import { selectSalvage, incrementSalvageUpgrade } from '../../store/reducers/salvageSlice';
import { selectCurrency, resetCurrency } from '../../store/reducers/currencySlice';
import { selectGenerators } from '../../store/reducers/generatorsSlice';

import SalvageUpgradeComponent from '../components/SalvageUpgradeComponent';
import ScreenWithBackButton from '../components/ScreenWithBackButton';

import { calculateSalvagedTechEarned } from '../../utils/gameLogic';
import { formatNumber } from '../../utils/helperFunctions';

const SalvageScreen = () => {
  const dispatch = useAppDispatch();
  const salvageUpgrades = useAppSelector(selectSalvage);
  const currency = useAppSelector(selectCurrency);
  const generators = useAppSelector(selectGenerators);
  const salvagedTechGainedOnReset = useMemo(() => calculateSalvagedTechEarned(currency.money), []);
  const [showBanner, setShowBanner] = useState(false);

  const performSalvageReset = () => {
    if (generators[2].totalQuantity < 1) {
      handleShowBanner(setShowBanner, 'You need to unlock Scrap Aggregation first')
    } else {
//       setPrestigeUpgradesState((prevPrestigeUpgradesState) => ({
//         ...prevPrestigeUpgradesState,
//         totalPrestiges: prevPrestigeUpgradesState.totalPrestiges + 1,
//       }))

//       const salvagedTechGainedOnReset = calculateSalvagedTechEarned(currency.money);

      dispatch(resetCurrency());
      // dispatch(incrementCurrency({ currencyType: 'money', value: -currency.money }))
      // dispatch(incrementCurrency({ currencyType: 'shards', value: -currency.shards }))
      dispatch(incrementCurrency({ currencyType: 'prestigePoints', value: salvagedTechGainedOnReset }))
      dispatch(resetGenerators());
    }
  }

  return (
    <ScreenWithBackButton>
      {showBanner ? (

      ) : null}
      <Text style={styles.currentSalvagedTechText}>{currency.prestigePoints}</Text>
      <Text style={styles.salvagedTechGainedOnResetText}>Salvaged Tech gained on reset: {formatNumber(salvagedTechGainedOnReset)}</Text>
{/*       <Text style={styles.salvagedTechGainedOnResetText}>Salvaged Tech gained on reset: {formatNumber(calculateSalvagedTechEarned(currency.money))}</Text> */}
      <ScrollView>
        {salvageUpgrades.map((upgrade) => (
          <SalvageUpgradeComponent upgrade={upgrade} key={upgrade.id} />
        ))}
      </ScrollView>
      <TouchableOpacity
        onPress={performSalvageReset}
        style={styles.resetButton}
      >
        <Text style={styles.resetButtonText}>Salvage Reset</Text>
      </TouchableOpacity>
    </ScreenWithBackButton>
  )
}

const styles = StyleSheet.create({
  currentSalvagedTechText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  salvagedTechGainedOnResetText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  resetButton: {
    backgroundColor: 'rgba(201, 67, 61, 0.7)',
    padding: 10,
    ...Platform.select({
      android: {
        elevation: 1,
      },
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
    })
  },
  resetButtonText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold'
  },
})

export default SalvageScreen;