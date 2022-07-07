//src/TodosLoading/index.js
import React from "react";
import './EmptyTodos.css';

function EmptyTodos(){
    return (
        <div className="test">
            <i class="fa-solid fa-user-astronaut"></i>
            <p className="first-Todo">¡Crea tu primer TODO!</p>
        </div>
    );
}

export { EmptyTodos };