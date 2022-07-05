import React from "react";
import './CreateButton.css'

function CreateTodoButton(props){

    const onClickButton = ()=> {
        alert('Abrir el modal');
    };

    return(
        <button
         className="CreateTodoButton"
         onClick={onClickButton}
         >
         +
         </button>
    );
}

export {CreateTodoButton};