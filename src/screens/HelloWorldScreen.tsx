import React from 'react';
import {Text, View} from 'react-native';

/* <View></View> es como si fuera un <div></div>. El View tiene un tamaño de 0px, es como si tuviera 0px en todas las direcciones (arriba, abajo, izquierda, derecha) es por eso que está en la posición (0, 0) pero aquí en React Native no se le conoce como px (pixeles) sino como unidades. Cuando se trabaja en Android e iOS es diferente al aparecer en pantalla, porque como está en la posición (0, 0) entonces en los dispositivos con iOS se puede ver un poco diferente ya que el dispositivo físico (celular) tiene un espacio donde está la cámara frontal y un flash. Pero para esto hay técnicas de estilización como usar el clásico style={} pero en React Native es similar al de ReactJS pero en este caso es un style={} dirigido a React Native o parte de su funcionamiento interno está inclinado a React Native */

/* cuando se trabajan con los screens o lo que ocupada toda la pantalla del dispositivo (celular, tablet, etc) entonces sería bueno colocar el nombre del archivo seguido de "Screen" como por ejemplo "NombreACrearScreen" como para seguir un standar y a los componentes que se van a integrar entonces si trabajarlo de forma normal como se trabajaría con ReactJS */
export const HelloWorldScreen = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 45, color: 'white', textAlign: 'center'}}>
          Hello World 1
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: 'blue',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 45, color: 'white', textAlign: 'center'}}>
          Hello World 1
        </Text>
      </View>
    </>
  );
};
