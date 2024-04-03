export function checkWinner(state) {
    const win = [
        [0,1,2],
        [3,4,5],
        [6,7,8], //rows
        [0,3,6],
        [1,4,7],
        [2,5,8], //columns
        [0,4,8],
        [2,4,6] //diagonals
    ];
    for(let index = 0; index < win.length; index++){
        const [a,b,c] = win[index];
        if(state[a] && state[a] === state[b] && state[a] === state[c]){
        return state[a];
        }
    }
    return null;
}
