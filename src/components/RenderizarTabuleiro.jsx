import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RenderizarTabuleiro = ({ valor, onPress }) => {
  return (
    <TouchableOpacity style={styles.casaTabuleiro} onPress={onPress}>
      <Text style={styles.textoCedula}>{valor}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  casaTabuleiro: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoCedula: {
    fontSize: 36,
    fontWeight: 'bold',
  },
});

export default RenderizarTabuleiro;
