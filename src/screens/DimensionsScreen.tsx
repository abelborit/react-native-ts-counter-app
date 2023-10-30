import React from 'react';
import {
  /* Dimensions, */
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
} from 'react-native';

/* conocer las dimensiones del dispositivo mediante API de react native. De esta forma es estático, es decir, tiene su pro que es traer la información de forma mucho más directa pero la contra es que no cambiará el valor cuando se cambie la rotación del dispositivo: https://reactnative.dev/docs/dimensions */
// const {width, height} = Dimensions.get('window');

export const DimensionsScreen = () => {
  /* conocer las dimensiones del dispositivo mediante hook de react native. Tiene su pro que las dimensiones cambian según la rotación del dispositivo pero su contra es que consume un poco más de recursos ya que es dinámico el conseguir sus dimensiones en tiempo real: https://reactnative.dev/docs/usewindowdimensions */
  const {width: widthCellphone, height: heightCellphone} =
    useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={styles.firstBox} />
      {/* estas dimensiones son relativas al dispositivo celular */}
      <View style={{...styles.secondBox, width: widthCellphone * 0.6}} />

      <Text style={styles.title}>
        Width Cellphone: {widthCellphone}, Height Cellphone: {heightCellphone}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 500,
    backgroundColor: 'red',
  },
  firstBox: {
    backgroundColor: 'yellow',
    /* estas dimensiones son relativas al componente padre que sería el que está por encima, es decir el View con la clase container */
    width: '50%' /* colocar en porcentaje */,
    height: '50%' /* colocar en unidades similar a colocar pixeles */,
  },
  secondBox: {
    backgroundColor: 'green',
    // width: '100%' /* colocar en porcentaje */,
    height: 50 /* colocar en unidades similar a colocar pixeles */,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
  },
});
