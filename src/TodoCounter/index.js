import React from "react";
import './TodoCounter.css'

function TodoCounter({ total, completed }){
    return(
        <div className="Counter-container">
        <h2 className="TodoCounter">Has completado {completed} de {total} TODOS</h2>
        </div>
    );
}

export {TodoCounter};