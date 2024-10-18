import React, { useState } from "react";
import "./App.css";
import Block from "./components/Block";
function App() {
  const [state,setState] = useState(Array(9).fill(null));
  const [currentTurn,setCurrentTurn] = useState("X")

  const checkWinner = (state: any[]) => {
    const win= [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let i = 0 ; i<win.length ; i++){
      const[a,b,c] = win[i];
      if(state[a]!=null && state[a] === state[b] && state[c] === state[a]) return true;  
    }
    return false;
  }

  const handelBlockClick = (index:number) => {
    const stateCopy = Array.from(state);
    
    if(stateCopy[index]!==null) return; 

    stateCopy[index] = currentTurn;

    // Check If someone Won
    const win = checkWinner(stateCopy);

    if(win){
      alert(`${currentTurn} won the game`)
    }
    else if (!stateCopy.includes(null)) { // Check if all cells are filled and no winner
      alert("Nobody won!");
      window.location.reload(); // Refresh the page
    }
    
    setState(stateCopy);
    setCurrentTurn(currentTurn === 'X' ? 'O ' : 'X');
  }

  return (
    <div className="board">
      <div className="row">
        <Block onClick={ () => handelBlockClick(0) } value={state[0]}/>
        <Block onClick={ () => handelBlockClick(1) } value={state[1]}/>
        <Block onClick={ () => handelBlockClick(2) } value={state[2]}/>
      </div>
      <div className="row">
        <Block onClick={ () => handelBlockClick(3) } value={state[3]}/>
        <Block onClick={ () => handelBlockClick(4) } value={state[4]}/>
        <Block onClick={ () => handelBlockClick(5) } value={state[5]}/>
      </div>
      <div className="row">
        <Block onClick={ () => handelBlockClick(6) } value={state[6]}/>
        <Block onClick={ () => handelBlockClick(7) } value={state[7]}/>
        <Block onClick={ () => handelBlockClick(8) } value={state[8]}/>
      </div>
    </div>
  );
}

export default App;
