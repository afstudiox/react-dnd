import React, { useEffect, useState } from 'react';
import Board from './components/Board';
import { observe } from './services/Game'


function App() {
  const [knightPosition, setKnightPosition] = useState([4, 5]);

  useEffect(() => {
    observe(newKnightPosition => {
      setKnightPosition(newKnightPosition);
    });

  }, []);  // Executar o efeito apenas uma vez na montagem do componente

  return (
    <div>
      <Board knightPosition={knightPosition} />
    </div>
  );
}

export default App;
