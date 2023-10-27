import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';

interface FloatingActionButtonProps {
  title: string;
  position?: TopPosition | BottomPosition | LeftPosition | RightPosition;
  onPress: () => void;
}

/* para que cuando se use el componente entonces al pasarle la propiedad "position" no se puedan usar posiciones opuestas juntas */
type TopPosition = {
  top: number;
  left?: number;
  right?: number;
  bottom?: never;
};
type BottomPosition = {
  bottom: number;
  left?: number;
  right?: number;
  top?: never;
};
type LeftPosition = {
  left: number;
  top?: number;
  bottom?: number;
  right?: never;
};
type RightPosition = {
  right: number;
  top?: number;
  bottom?: number;
  left?: never;
};

export const FloatingActionButton = ({
  title,
  position = {bottom: 25, right: 25},
  onPress,
}: FloatingActionButtonProps) => {
  const ios = () => {
    return (
      /* para pasar varios estilos se puede mandar en forma de arreglo. En este caso será un estilo condicional que puede ser directo con un objeto y la propiedad CSS o sino mediante una propiedad del StyleSheet */
      <View style={[styles.floatingActionButtonContainer, position]}>
        <TouchableOpacity
          // style={[
          //   styles.floatingActionButtonContainer,
          //   position === 'bottomLeft' ? styles.locationLeft : styles.locationRight,
          // ]}
          // style={[
          //   styles.floatingActionButtonContainer,
          //   position === 'bottomLeft' ? {left: 25} : {right: 25},
          // ]}
          style={styles.floatingActionButton}
          activeOpacity={0.75}
          onPress={onPress}>
          <View>
            <Text style={styles.floatingActionButtonText}>{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const android = () => {
    return (
      /* para pasar varios estilos se puede mandar en forma de arreglo. En este caso será un estilo condicional que puede ser directo con un objeto y la propiedad CSS o sino mediante una propiedad del StyleSheet */
      <View style={[styles.floatingActionButtonContainer, position]}>
        <TouchableNativeFeedback
          // style={[
          //   styles.floatingActionButtonContainer,
          //   position === 'bottomLeft' ? styles.locationLeft : styles.locationRight,
          // ]}
          // style={[
          //   styles.floatingActionButtonContainer,
          //   position === 'bottomLeft' ? {left: 25} : {right: 25},
          // ]}
          background={TouchableNativeFeedback.Ripple('#28425B', true, 30)}
          onPress={onPress}>
          <View style={styles.floatingActionButton}>
            <Text style={styles.floatingActionButtonText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  /* Platform para poder detectar el sistema operativo y se hace con un condicional para que retornen elementos de Android o iOS (más que todo por el tema de los estilos que algunas veces hay que hacer configuraciones distintas ya que en una plataforma funciona y en la otra no) */
  return Platform.OS === 'ios' ? ios() : android();
};

const styles = StyleSheet.create({
  floatingActionButtonContainer: {
    position: 'absolute',
    borderRadius: 100,
  },
  floatingActionButton: {
    backgroundColor: '#3f73a4',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    /* Las sombras o shadows en Android e iOS trabajan un poco distintas ya que por ejemplo en Android trabaja con elevation y en iOS con la shadowOffset entonces se puede usar esta página para pre-visualizarlo: https://ethercreative.github.io/react-native-shadow-generator/ */
    /* al trabajar con sombras al hacer click o tap en el botón si se mantiene presionado entonces puede queda un estilo un poco raro y feo, para esto se podría cambiar el TouchableOpacity al  TouchableHighlight o Pressable */
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  floatingActionButtonText: {
    color: '#eee',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  // locationRight: {
  //   right: 25,
  // },
  // locationLeft: {
  //   left: 25,
  // },
});
