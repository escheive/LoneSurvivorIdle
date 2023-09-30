import React from 'react';
import { View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ScreenWithBackButton = ({ children }) => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      {children}
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default ScreenWithBackButton;