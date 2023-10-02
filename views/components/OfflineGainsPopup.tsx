// OfflineGainsPopup.js

import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const OfflineGainsPopup = ({ offlineGains, completedMissions, isVisible, onClose }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => onClose()}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {offlineGains.map((generator) => (
            <View style={styles.generatorGainsContainer} key={generator.name}>
                <Text style={styles.generatorNameText}>{generator.name}</Text>
                <Text style={styles.generatorGainsText}>{generator.gains}</Text>
            </View>
          ))}
          <View style={styles.missionGainsContainer}>
              <Text style={styles.generatorNameText}>Completed Missions</Text>
              <Text style={styles.generatorGainsText}>{completedMissions}</Text>
          </View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  generatorGainsContainer: {
    width: '100%',
    paddingVertical: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  missionGainsContainer: {
      width: '100%',
      paddingVertical: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'blue',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
  },
});

export default OfflineGainsPopup;