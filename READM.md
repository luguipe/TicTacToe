# Tic Tac Toe Game

This is a simple Tic Tac Toe game implemented in React. It allows two players to take turns marking spaces in a 3x3 grid, with the goal of getting three marks in a row, column, or diagonal.

## How to Play

1. Each player is assigned a symbol, either 'X' or 'O'.
2. Players take turns clicking on empty squares to place their symbol.
3. The game continues until one player gets three symbols in a row, column, or diagonal, or until all squares are filled (resulting in a draw).

## Components

### Board Component

* Manages the game state, including the current player and the state of each square.
* Renders the 3x3 grid of Square components.
* Tracks the game status and displays the winner or the next player's turn.

### Square Component

* Represents a single square in the game grid.
* Displays the player's symbol ('X' or 'O') when clicked.
* Uses the `takeTurn` callback function to notify the Board component of a player's move.

### Game Component

* Renders the overall game layout, including the Board component.

## Running the Game

To run the game, simply open the `index.html` file in your web browser. The game will start automatically, and you can begin playing by clicking on the squares.

## Future Improvements

1. **Improved Win Detection:** Implement a more efficient algorithm for detecting a win, especially for larger grid sizes.
2. **AI Opponent:** Add an option to play against an AI opponent with varying difficulty levels.
3. **Multiplayer Support:** Enable online multiplayer support to play against other players over the internet.
4. **Customization Options:** Allow players to customize the game board size, symbols, and other settings.
5. **Game History:** Keep track of game history to allow players to review past games and moves.

Feel free to fork this repository and contribute your own improvements to the game!
