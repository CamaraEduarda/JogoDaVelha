import React from 'react';
import { View, StyleSheet } from 'react-native';
import Placar from './components/Placar';
import RenderizarTabuleiro from './components/RenderizarTabuleiro';
import { Gerenciador } from './jogo/Gerenciador';

export default function App() {
  const {
    board,
    isDraw,
    handleJogador,
    reiniciar,
  } = Gerenciador();

  return (
    <View style={styles.container}>
      <Scoreboard scores={{ jogador: 0, computador: 0 }} matchNumber={1} />
      <View style={styles.board}>
        {board.map((_, index) => (
          <RenderizarTabuleiro key={index} value={board[index]} onPress={() => handleJogador(index)} />
        ))}
      </View>
      {isDraw && (
        <View style={styles.restartContainer}>
          <Button title="Reiniciar" onPress={reiniciar} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    justifyContent: 'space-around',
  },
  reiniciar: {
    marginTop: 20,
  },
});
