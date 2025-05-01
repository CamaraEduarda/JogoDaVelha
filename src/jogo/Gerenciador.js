import { useState } from 'react';

export const gerenciador = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isDraw, setIsDraw] = useState(false);
  const [isBoardLocked, setIsBoardLocked] = useState(false);

  const checkDraw = (b) => {
    return b.every(cell => cell !== null);
  };

  const handleJogador = (index) => {
    if (board[index] || isBoardLocked) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);

    if (checkDraw(newBoard)) {
      setIsDraw(true);
      setIsBoardLocked(false);
      return;
    }

    cpuMove(newBoard);
  };

  const cpuMove = (newBoard) => {
    setIsBoardLocked(true);

    setTimeout(() => {
      const emptyIndex = newBoard.findIndex(cell => cell === null);
      if (emptyIndex !== -1) {
        newBoard[emptyIndex] = 'O';
        setBoard(newBoard);

        if (checkDraw(newBoard)) {
          setIsDraw(true);
        }
      }

      setIsBoardLocked(false);
    }, 500);
  };

  const reiniciar = () => {
    setBoard(Array(9).fill(null));
    setIsDraw(false);
    setIsBoardLocked(false);
  };

  return {
    board,
    isDraw,
    handleJogador,
    reiniciar,
  };
};
