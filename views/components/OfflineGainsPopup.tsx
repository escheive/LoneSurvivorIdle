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
            <Text style={styles.closeButtonText}>Close</Text>
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
    backgroundColor: 'rgba(44, 62, 80, 0.9)',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  generatorGainsContainer: {
    width: '100%',
    paddingVertical: 2,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(77, 144, 194, 0.7)',
  },
  generatorNameText: {
    color: 'white',
    fontSize: 16,
  },
  generatorGainsText: {
    color: 'lime',
    fontSize: 16,
  },
  missionGainsContainer: {
      width: '100%',
      paddingVertical: 2,
      paddingHorizontal: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'rgba(201, 67, 61, 0.7)',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: 'rgba(201, 67, 61, 0.7)',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default OfflineGainsPopup;