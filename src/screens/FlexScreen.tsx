import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Caja 1</Text>
      <Text style={styles.box2}>Caja 2</Text>
      <Text style={styles.box3}>Caja 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    // flexDirection: 'column', // dirección por defecto
    // flexDirection: 'row',
    justifyContent: 'center', // sus hijos se basan en el componente padre
    backgroundColor: '#28C4D9',
    padding: 20,
  },
  box1: {
    // flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    backgroundColor: 'red',
  },
  box2: {
    // flex: 2,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    backgroundColor: 'darkorange',
  },
  box3: {
    // flex: 3,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    backgroundColor: 'green',
  },
});
