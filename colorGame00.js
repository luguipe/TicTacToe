const Board = () => {
  // 1st player is X ie 1
  // State keeps track of next player and gameState
  const [player, setPlayer] = React.useState(1);
  const [gameState, setGameState] = React.useState([]);
  let status = `Winner is ${checkForWinner(gameState)}`;

  // Part 1 step 1 code goes here
  // Use conditional logic to set a variable to either 'Player O' or  'Player X'
  let playerTurn = `Next Player: ${player == '0' ? 'Player O' : 'Player X'}`;

  console.log(`We hav a winner ${status}`);

  const takeTurn = (id) => {
    setGameState([...gameState, { id: id, player: player }]);
    setPlayer((player + 1) % 2); // get next player
    return player;
  };
  function renderSquare(i) {
    // use properties to pass callback function takeTurn to Child
    return <Square takeTurn={takeTurn} id={i}></Square>;
  }

  return (
    <div className="game-board">
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="grid-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="grid-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div id="info">
        <h1 id="turn">{playerTurn}</h1>
        <h1>{status}</h1>
      </div>
    </div>
  );
};

const Square = ({ takeTurn, id }) => {
  const mark = ['O', 'X', '+'];
  // id is the square's number
  // filled tells you if square has been filled
  // tik tells you symbol in square (same as player)
  // You call takeTurn to tell Parent that the square has been filled
  const [filled, setFilled] = React.useState(false);
  const [tik, setTik] = React.useState(2);

  return (
    <button
      // Part 2: update the return statement below to add css classes
      className={tik == '1' ? 'red' : 'white'}
      onClick={() => {
        setTik(takeTurn(id));
        setFilled(true);
        console.log(`Square: ${id} filled by player : ${tik}`);
      }}
    >
      <h1>{mark[tik]}</h1>
    </button>
  );
};

const Game = () => {
  return (
    <div className="game">
      <Board></Board>
    </div>
  );
};

// Checking for Winner takes a bit of work
// Use JavaScript Sets to check players choices
// against winning combinations
// Online there is more compact version but I prefer this one

const win = [
  // rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // cols
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal
  [0, 4, 8],
  [2, 4, 6],
];

const checkPlayerTurn = (gameState) => {
  return gameState.player;
};

const checkForWinner = (gameState) => {
  // get array of box id's
  // can't be a winner in less than 5 turns
  if (gameState.length < 5) return 'No Winner Yet';
  let p0 = gameState.filter((item) => {
    if (item.player == 0) return item;
  });
  p0 = p0.map((item) => item.id);
  let px = gameState.filter((item) => {
    if (item.player == 1) return item;
  });
  px = px.map((item) => item.id);
  if (p0 != null && px != null) {
    var win0 = win.filter((item) => {
      return isSuperset(new Set(p0), new Set(item));
    });
    var winX = win.filter((item) => {
      return isSuperset(new Set(px), new Set(item));
    });
  }
  if (win0.length > 0) return 'Player O ';
  else if (winX.length > 0) return 'Player X ';
  return 'No Winner Yet';
};
// check if subset is in the set
function isSuperset(set, subset) {
  for (let elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));


// const Square = ({id, newState}) => {
//   const [color, setColor] = React.useState();
//   const [status, setStatus] = React.useState([]);
//   const xo = ['O', 'X'];

//   const palet = ["blue", "red", "green"];
//   const getRandomColor = ()=>palet[Math.floor(Math.random() * palet.length)];
  
//   React.useEffect(() => {
//     console.log(`Render ${id} ${color}`);
//     return () =>console.log(`unmounting Square ${id}`);
//     });  
//   // Keep track of state of the Square
//   return (
//     // change color of square on click
//     <button 
//       onClick={e => {
//         // {alert(`Player ${player} clicked square ${id}`);}
//         setColor(getRandomColor());
//         let nextPlayer = newState(id);
//         setStatus(nextPlayer);
//         e.target.style.backgroundColor = color;
//       }}
//     >
//       <h1>{xo[status]}</h1>
//     </button>
//   );  
// }
// const Board = () => {
//   const [player, setPlayer] = React.useState(1);
//   const [state,setState] = React.useState(Array(9).fill(null));

//   // set state here
//   let status = `Player ${player}`;
//   let winner = checkForWinner(state);
//   if(winner != null) status = `Player ${winner} wins!`;
  

//   //define newState function??? why const?
//   const newState = idOfSquare => {
//     let thePlayer = player;
//     state[idOfSquare] = player; //player is present player
//     setState(state);
//     let nextPlayer = (player + 1) % 2;
//     setPlayer(nextPlayer);
//     return thePlayer; //return the present player
    
//     console.log(`adding state ${JSON.stringify(state)} `);
//   }

//   // let status = `Player ${player}`; 
//   // const toggle = () => setMounted(!mounted);
//   // const reRender = () => setRandom(Math.random());

//   function renderSquare(i){
//     return <Square id={i} newState={newState}></Square>;
//   }
//   return (
//     <div
//       className="game-board">
//       <div className="grid-row">
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className="grid-row">
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className="grid-row">
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//       <div id="info">
//         <button onClick={toggle}>Show/Hide Row</button>
//         <button onClick={reRender}>Re-render</button>
//         <h1> {status}</h1>
//       </div>
//     </div>
//   );
// };

// const checkForWinner = (gameState) => {
//   // get array of box id's
//   // can't be a winner in less than 5 turns
//   if (gameState.length < 5) return 'No Winner Yet';
//   let p0 = gameState.filter((item) => {
//     if (item.player == 0) return item;
//   });
//   p0 = p0.map((item) => item.id);
//   let px = gameState.filter((item) => {
//     if (item.player == 1) return item;
//   });
//   px = px.map((item) => item.id);
//   if (p0 != null && px != null) {
//     var win0 = win.filter((item) => {
//       return isSuperset(new Set(p0), new Set(item));
//     });
//     var winX = win.filter((item) => {
//       return isSuperset(new Set(px), new Set(item));
//     });
//   }
//   if (win0.length > 0) return 'Player O ';
//   else if (winX.length > 0) return 'Player X ';
//   return 'No Winner Yet';
// };
// // check if subset is in the set
// function isSuperset(set, subset) {
//   for (let elem of subset) {
//     if (!set.has(elem)) {
//       return false;
//     }
//   }
//   return true;
// }

// // ========================================

// ReactDOM.render(<Board />, document.getElementById("root"));
