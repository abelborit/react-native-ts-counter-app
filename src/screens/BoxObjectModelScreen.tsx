import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    /* la distribución por defecto es flex-column es decir que todo se va creando hacia abajo */
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>

      <Text style={styles.title2}>Second Child</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    /* si aquí se coloca flex: 1, entonces abarcará todo el alto y ancho de su componente padre que en este caso es <SafeAreaView></SafeAreaView> que está en App.tsx pero recordar que a SafeAreaView hay que colocarle también el flex: 1 para que abarque todo el ancho y alto del dispositivo ya que este es el componente padre de todo ya que está en App.tsx. Si no se coloca el flex: 1 entonces en android e iOS este flex: 1 de BoxObjectModelScreen se comportaría diferente con proporciones distintas */
    flex: 1,
    backgroundColor: 'red',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  title: {
    fontSize: 25,
    padding: 10,
    backgroundColor: 'green',
    borderWidth: 3,
    textAlign: 'center',
  },
  title2: {
    fontSize: 25,
    padding: 10,
    backgroundColor: 'yellow',
    borderWidth: 3,
    textAlign: 'center',
  },
});
