import React from "react";
import './TodoCounter.css'
import { TodoContext } from '../TodoContext'; 
function TodoCounter(){
    const {totalTodos, completedTodos } = React.useContext(TodoContext);
    return(
        <div className="Counter-container">
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOS</h2>
        </div>
    );
}

export {TodoCounter};
