import React from "react";
import './TodoCounter.css'

function TodoCounter(){
    return(
        <div className="Counter-container">
        <h2 className="TodoCounter">Has completado 2 de 3 TODOS</h2>
        </div>
    );
}

export {TodoCounter};