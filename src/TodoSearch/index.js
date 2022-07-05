import React from "react";
import './TodoSearch.css'

function TodoSearch(){
    return(
        <div className="Container-search">
        <input
        className="TodoSearch"
        placeholder="Filtro"
        /> 
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    );
}

export {TodoSearch};
