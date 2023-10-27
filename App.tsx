/* ************************************************************************************************************* */
/* para generar un componente en ReactJS es con el snnipet "rafc" y en ReactNative sería con el snnipet "rnfes" */
/* ************************************************************************************************************* */

/* en la importación de React aquí en React Native sí es importante (En las últimas versiones de React JS no es necesario) */
import React from 'react';
// import {HelloWorldScreen} from './src/screens/HelloWorldScreen';
import {CounterScreen} from './src/screens/CounterScreen';

export const App = () => {
  return (
    <>
      {/* <HelloWorldScreen /> */}
      <CounterScreen />
    </>
  );
};
