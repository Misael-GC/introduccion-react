import React from "react";
import './CreateButton.css'

function CreateTodoButton(props){

    const onClickButton = ()=> {
        props.setOpenModal(true);
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