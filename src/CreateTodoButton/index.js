import React from "react";
import './CreateButton.css'

function CreateTodoButton(props){

    const onClickButton = ()=> {
        props.setOpenModal(prevState => !prevState); //este cevuelve al estado anteriror en el modal
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