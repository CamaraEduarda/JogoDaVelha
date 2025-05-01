
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';

const Tabuleiro = () => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [isVezJogador, setIsVezJogador] = useState(true);
  const [ganhador, setGanhador] = useState(null);
  const [vitoriaJogador, setVitoriaJogador] = useState(0);
  const [vitoriaCPU, setVitoriaCPU] = useState(0);
  const [matchCount, setMatchCount] = useState(1);

  const condicaoVitoria = [
    [0,1,2],[3,4,5],
    [6,7,8],[0,3,6],
    [1,4,7],[2,5,8], 
    [0,4,8],[2,4,6]          
  ];

  const checkGanhador = (newBoard) => {
    for (let condicao of condicaoVitoria) {
      const [a, b, c] = condicao;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return newBoard.every(cell => cell) ? 'Empate' : null;
  };

  const handlePress = (index) => {
    if (board[index] || ganhador || !isVezJogador) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsVezJogador(false);
  };

  useEffect(() => {
    const result = checkGanhador(board);
    if (result) {
      setGanhador(result);
      if (result === 'X') setVitoriaJogador(score => score + 1);
      else if (result === 'O') setVitoriaCPU(score => score + 1);
      return;
    }

    if (!isVezJogador) {
      const emptyIndices = board.map((val, idx) => val === null ? idx : null).filter(v => v !== null);
      if (emptyIndices.length > 0) {
        const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        const newBoard = [...board];
        newBoard[randomIndex] = 'O';
        setTimeout(() => {
          setBoard(newBoard);
          setIsVezJogador(true);
        }, 500); 
      }
    }
  }, [board, isVezJogador]);

  const restartGame = () => {
    setBoard(initialBoard);
    setGanhador(null);
    setIsVezJogador(true);
    setMatchCount(matchCount + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Velha</Text>
      <Text>Partida #{matchCount}</Text>
      <Text>Jogador (X): {vitoriaJogador} | CPU (O): {vitoriaCPU}</Text>
      <View style={styles.board}>
        {board.map((cell, index) => (
          <TouchableOpacity
            key={index}
            style={styles.cell}
            onPress={() => handlePress(index)}
          >
            <Text style={styles.cellText}>{cell}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {ganhador && (
        <>
          <Text style={styles.ganhadorText}>{ganhador === 'Empate' ? 'Deu velha!' : `${ganhador} venceu!`}</Text>
          <Button title="Reiniciar" onPress={restartGame} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 40 },
  title: { fontSize: 24, marginBottom: 10 },
  board: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  cell: {
    width: '33.33%',
    height: '33.33%',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: { fontSize: 32 },
  ganhadorText: { marginTop: 20, fontSize: 18 }
});

export default Tabuleiro;
