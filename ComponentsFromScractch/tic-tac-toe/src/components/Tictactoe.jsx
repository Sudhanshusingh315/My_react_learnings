import { useState } from "react";
import Board from "./Board";
import checkWinner from "../utils/checkWinner";

export default function Tictactoe({ size = 3 }) {
    const [board, setBoard] = useState(
        Array.from({ length: size }, () => new Array(size).fill(null))
    );
    const [flip, setFlip] = useState(true);
    const winner = checkWinner(board,size);
    const turnStatus = winner ? checkWinner(board,size) : `${flip ? "Player X turn":"Player O turn"}`  

    const handleClick = (rowIndex, colIndex) => {
        setBoard((prev) => {
            if(prev[rowIndex][colIndex] || winner ){
                console.log("don't need to do anything")
                return prev
            }
            const deepCopy = JSON.parse(JSON.stringify(prev));
            deepCopy[rowIndex][colIndex] = `${flip ? "X" : "O"}`;
            setFlip(!flip);
            return deepCopy;
        });
    };
    return (
        <div className="container">
            <Board size={size} board={board} handleClick={handleClick} />
            <div className="status">{turnStatus}</div>
            <button>reset</button>
        </div>
    );
}
