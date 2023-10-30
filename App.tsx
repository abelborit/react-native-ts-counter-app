/* ************************************************************************************************************* */
/* para generar un componente en ReactJS es con el snnipet "rafc" y en ReactNative sería con el snnipet "rnfes" */
/* ************************************************************************************************************* */

/* en la importación de React aquí en React Native sí es importante (En las últimas versiones de React JS no es necesario) */
import React from 'react';
import {SafeAreaView} from 'react-native';

// import {HelloWorldScreen} from './src/screens/HelloWorldScreen';
// import {CounterScreen} from './src/screens/CounterScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
// import {DimensionsScreen} from './src/screens/DimensionsScreen';
// import {PositionScreen} from './src/screens/PositionScreen';
import {FlexScreen} from './src/screens/FlexScreen';

export const App = () => {
  return (
    /* el SafeAreaView verifica si se puede mostrar la información, ya que por ejemplo en los Andriod se muestra en el punto (0, 0) pero aún así se mira normal en pantalla pero en los iOS tiene el Notch (es una cámara integrada en la parte superior de la pantalla) entonces como está en el (0, 0) se mirará arriba pero con el SafeAreaView ya evita colocarlo en el área donde puede chocar la información mostrada. Este SafeAreaView no se suele colocar aquí en el App porque cuando hay imágenes entonces se quiere que se vean desde el inicio del celular */
    /* se coloca style={{flex: 1}} para que pueda abarcar todo el largo y ancho de la pantalla */
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorldScreen /> */}
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScreen /> */}
      <FlexScreen />
    </SafeAreaView>
  );
};
