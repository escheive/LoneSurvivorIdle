import React from 'react';
import { View, Button } from 'react-native';

const WastelandHome = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Crafting"
        onPress={() => navigation.navigate('Crafting')}
      />
      <Button
        title="Missions"
        onPress={() => navigation.navigate('Missions')}
      />
    </View>
  );
}

export default WastelandHome;