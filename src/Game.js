import React, { useState } from "react";
import Square from "./Square";

function Restart({ onClick }) {
    return (
        <button className="restart" class="btn btn-secondary" onClick={onClick}>
            (Reset) Shall we play a game?
        </button>
    );
}

function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const nextSymbol = isXNext ? "X" : "O";
    const winner = calculateWinner(squares);

    function renderRestartButton() {
        return (
            <Restart
                onClick={() => {
                    setSquares(Array(9).fill(null));
                    setIsXNext(true);
                }}
            />
        );
    }

    function renderSquare(i) {
        return (
            <Square
                value={squares[i]}
                onClick={() => {
                    if (squares[i] != null || winner != null) {
                        return;
                    }
                    const nextSquares = squares.slice();
                    nextSquares[i] = (isXNext ? "X" : "O");
                    setSquares(nextSquares);
                    setIsXNext(!isXNext);
                }}
            />
        );
    }

    function getStatus() {
        if (winner) {
            return "Winner!: " + winner;
        } else if (isBoardFull(squares)) {
            return "Draw!";
        } else {
            return "Next player: " + (isXNext ? "X" : "O");
        }
    }

    return (
        <div className="container">
            <div className="game">
                <div className="game-board">
                    <div className="board-row">
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </div>
                </div>
                <div className="game-info">{getStatus()}</div>
                <div className="restart-button">{renderRestartButton()}</div>
            </div>
        </div>
    );
}

function calculateWinner(squares) {
    const possibleLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < possibleLines.length; i++) {
        const [a, b, c] = possibleLines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function isBoardFull(squares) {
    for (let i = 0; i < squares.length; i++) {
        if (squares[i] == null) {
            return false;
        }
    }
    return true;
}

export default Game;