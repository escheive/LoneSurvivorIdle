// OfflineGainsPopup.js

import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const OfflineGainsPopup = ({ message, isVisible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => onClose()}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {message.map((generatorGains) => (
            <Text>{generatorGains}</Text>
          ))}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => onClose()}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
  },
});

export default OfflineGainsPopup;