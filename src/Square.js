import React from "react";

function Square({ value, onClick }) {
    return (
        <button id="box" className="square" onClick={onClick}>
            {value}
        </button>
    );
}

export default Square;