import React, { useState } from 'react'

function Game() {
  const squares = [];
  for (let elem = 0; elem < 9; elem++) {
    squares.push('');
  }
  const [board, setBoard] = useState([...squares])
  const [player, setPlayer] = useState('X')

  const changePlayer = (elem) => {
    if (board[elem] != '') 
    return;
    setBoard(board => {
      return board.map((value, index) => {
        if (index === elem) return player;
        return value;
      });
    })

    setPlayer(player === 'X' ? 'O' : 'X')
  }

    return (
      <div className='board'>
        {
          board.map((elem, item) => {
            return <div className='box' onClick={() => changePlayer(item)}>{elem}</div>
          })
        }
      </div>
    )
  }
export default Game