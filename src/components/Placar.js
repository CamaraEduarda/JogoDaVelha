import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const placar = ({ placarGeral, matchNumber }) => {
  return (
    <View style={styles.container}>
      <View style={styles.playerBox}>
        <Text style={styles.nome}>Jogador</Text>
        <Text style={styles.placar}>Vitórias: {placarGeral.jogador}</Text>
      </View>
      <View style={styles.matchBox}>
        <Text style={styles.matchText}>Partida:</Text>
        <Text style={styles.matchNumber}>#{matchNumber}</Text>
      </View>
      <View style={styles.playerBox}>
        <Text style={styles.nome}>Computador</Text>
        <Text style={styles.placar}>Vitórias: {placarGeral.computador}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  playerBox: {
    alignItems: 'center',
  },
  nome: {
    fontSize: 18,
    fontWeight: '600',
  },
  placar: {
    fontSize: 16,
    marginTop: 5,
  },
  matchBox: {
    alignItems: 'center',
  },
  matchText: {
    fontSize: 16,
    color: '#666',
  },
  matchNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default placar;
