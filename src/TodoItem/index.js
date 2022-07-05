import React from "react";
import './TodoItem.css'

function TodoItem(props){ //recibiremos la propiedad

    return(
        <li  className="TodoItem">
            <span
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete} //llamamos a la propiedad que recibimos en las propiedades -> App.js
            ><i class="fa-solid fa-circle-check"></i></span>
            <p
            className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
            </p>
            <span
            className="Icon Icon-delete"
            onClick={props.onDelete}>
            <i class="fa-solid fa-trash-can"></i> 
            </span>
        </li>
    );
}

export {TodoItem};