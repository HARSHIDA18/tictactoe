import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <ul>
      {history.map((_, move) => {
        return (
          <li key={move}>
            <button
              //STYLE PROP EXPECTS AN OBJECT HENCE WE CAN'T USE CSS DIRECTLY BUT CAN BE CSS PROPERTIES IN CAME-CASE.
              style={{
                fontWeight: move === currentMove ? 'bold' : 'normal',
              }}
              type="button"
              onClick={() => {
                moveTo(move);
              }}
            >
              {move === 0 ? 'Go to game start' : `Go to move #${move}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default History;
