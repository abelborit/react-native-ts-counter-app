import React, {useState} from 'react';
import {
  View,
  Text,
  /* Button, TouchableOpacity, */
  StyleSheet,
} from 'react-native';
import {FloatingActionButton} from '../components/FloatingActionButton';

export const CounterScreen = () => {
  const [counterState, setCounterState] = useState(0);

  const handleIncreaseDecreaseBy = (value: number = 1) => {
    setCounterState(prevCounter => prevCounter + value);
  };

  return (
    /* al colocar el {flex: 1, backgroundColor: 'red',}, es muy importante ya que el flex: 1 le dice al View que ocupe toda la pantalla del dispositivo, si no se coloca entonces el View solo se adapta al tamaño de su componente hijo y se coloca backgroundColor: 'red' para corroborar que abarque toda la pantalla ya que luego se eliminará si no es necesario */
    <View style={styles.container}>
      <Text style={styles.title}>CounterScreen: {counterState}</Text>

      {/* algunos de los componentes propios de ReactNative se estiran a lo largo de toda la pantalla porque esa es su configuración por defecto */}
      {/* en ReactNative no hay el botón clásico de html <button></button> entonces hay que revisar https://reactnative.dev/docs/components-and-apis para conocer sus componentes pero igual nosotros podemos crear los nuestros si es necesario */}
      {/* en algunos componentes de ReactNative no existe la propiedad style={} entonces no se puede estilizar tanto */}
      {/* <Button
        onPress={() => handleIncreaseDecreaseBy(1)}
        title="Increase Counter"
        color="#841584"
        accessibilityLabel="Click to increse counter"
      /> */}

      {/* El elemento Button propio de ReactNative salió porque muchos desarrolladores que venían de otras tecnologías y llegaron a ReactNative querían crear algún botón para realizar una interacción y el elemento recomendado antes y ahora también no es usar el Button como tal sino usar el TouchableOpacity, TouchableHighlight o TouchableWithoutFeedback propios de ReactNative. Pero a diferencia del Button aquí se puede crear la parte de los estilos y estilizarlo según lo necesitemos y para esto, como sabemos que el View es similar a un div entonces creamos un View y a este le colocamos los estilos. Se podría hacer directamente con el <Text></Text> pero sería mejor utilizar el View por encima como contenedor */}
      {/* también siguiendo la documentación: "Si está buscando una forma más amplia y preparada para el futuro de manejar la entrada táctil, consulte la API Pressable." que seria utilizar el componente Pressable de ReactNative */}

      {/* crear un FAB (Floating Action Button) */}
      {/* <TouchableOpacity
        style={styles.floatingActionButtonLocationBR}
        onPress={() => handleIncreaseDecreaseBy(1)}>
        <View style={styles.floatingActionButton}>
          <Text style={styles.floatingActionButtonText}>+1</Text>
        </View>
      </TouchableOpacity> */}

      <FloatingActionButton
        title="+1"
        onPress={() => handleIncreaseDecreaseBy(1)}
      />
      <FloatingActionButton
        title="-1"
        position={{bottom: 25, left: 25}}
        onPress={() => handleIncreaseDecreaseBy(-1)}
      />
    </View>
  );
};

/* crear los estilos para los componentes para no tenerlo en el return todo junto. Esto es muy similar a usar CSS pero no es como tal CSS ya que estmos creando los estilos dentro de un objeto */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  /* aquí se coloca de esta forma los estilos con el {position: 'relative', top: -15,} ya que en dispositivos con iOS como tiene esa barrita negra en la parte superior entonces da como la impresión o en un primer vistaso que el contenido no está en el centro. En React Native no es necesario colocar {position: 'relative',} ya que el {position: 'relative',} es la configuración por defecto que tienen nuestro componentes de React Native como en este caso el <Text></Text> entonces todos son posiciones relativas. También darse cuenta que en position:"" solo tenemos a relative y absolute y no tenemos fixed como en ReactJS ya que aquí en ReactNative se rompe la aplicación */
  title: {
    textAlign: 'center',
    fontSize: 40,
    // position: 'relative',
    top: -15,
  },
});
