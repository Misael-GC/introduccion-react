//src/TodoError/index.js
import React from 'react';
import './TodoError.css';

function TodosError({error}){
    return(
        <div className="error-container">
        <i class="fa-solid fa-shuttle-space"></i>
        <p className='hubo-error'>Hubo un error en la matrix vuelve a cargar o intentarlo más tarde ¯\_(ツ)_/¯</p>
        </div>
    ) 
}

export {TodosError};
