import React from 'react';
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native';

const PlaceDetail = props => {
  let modalContent = null;

  if (props.selectedplace) {
    modalContent: (
      <View>
        <Image source={props.selectedplace.image} style={styles.placeimage}/>
        <Text style={styles.placeName}>{props.selectedplace.name}</Text>
      </View>
    );
  }
  return (
    <Modal visible={props.selectedplace !== null } animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" color="red"/>
          <Button title="Close" style={styles.Buttontitle}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
  },
  Buttontitle: {
    marginTop: 5,
  },
  placeimage: {
    width: '100%',
    height: 200
  },
  placeName: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
  }
});

export default PlaceDetail;
