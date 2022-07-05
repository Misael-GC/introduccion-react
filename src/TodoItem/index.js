import React from "react";
import './TodoItem.css'

function TodoItem(props){
    return(
        <li  className="TodoItem">
            <span
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            ><i class="fa-solid fa-circle-check"></i></span>
            <p
            className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
            </p>
            <span
            className="Icon Icon-delete">
            <i class="fa-solid fa-trash-can"></i> 
            </span>
        </li>
    );
}

export {TodoItem};