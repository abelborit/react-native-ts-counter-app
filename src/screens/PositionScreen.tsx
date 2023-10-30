import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.secondBox} />
      <View style={styles.firstBox} />
    </View>
  );
};

/* en posiciones RELATIVAS se mueve pero deja su espacio */
/* cuando es un valor POSITIVO en la dirección escogida (top, bottom, left, right) entonces en esa posición será empujada */
/* cuando es un valor NEGATIVO en la dirección escogida (top, bottom, left, right) entonces en esa posición será jalada */

/* en posiciones ABSOLUTAS se mueve pero no deja su espacio (está como flotando) */
/* cuando es valor 0 entonces estará en el punto 0 de esa dirección en cuanto al componente padre */
/* cuando es un valor POSITIVO en la dirección escogida (top, bottom, left, right) entonces en esa posición será empujada */
/* cuando es un valor NEGATIVO en la dirección escogida (top, bottom, left, right) entonces en esa posición será jalada */
const styles = StyleSheet.create({
  container: {
    // position: 'relative', // no es necesario colocarla porque todos los elementos tienen posición relativa al padre
    // flex: 1,
    width: 350,
    height: 350,
    backgroundColor: '#28C4D9',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  firstBox: {
    backgroundColor: 'yellow',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    // position: 'relative',
    // right: 25, // empuja a la derecha 25 unidades
    // top: -25, // jala para arriba 25 unidades
    position: 'absolute',
    right: 10, // empuja a la derecha 10 unidades
    bottom: 0, // coloca en el punto 0 de abajo
  },
  secondBox: {
    margin: 20,
    backgroundColor: 'green',
    // width: 100,
    // height: 100,
    borderWidth: 10,
    borderColor: 'white',
    // position: 'relative',
    // top: 50,
    /* si se comenta el width y height y se descomenta todo lo de abajo entonces se está diciendo que el elemento se extienda a todo el ancho y largo del contenedor padre */
    // position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    /* para evitar colocar todo lo de la position y las direcciones se puede colocar lo siguiente una vez comentado el width y height y se conseguirá el mismo efecto de que el elemento se extienda a todo el ancho y largo del contenedor padre */
    ...StyleSheet.absoluteFillObject,
  },
});
