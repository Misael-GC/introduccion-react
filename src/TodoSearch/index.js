import React from "react";
import './TodoSearch.css'

function TodoSearch(){
    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
    };

    return(
        <div className="Container-search">
        <input
        className="TodoSearch"
        placeholder="Filtro"
        onChange={onSearchValueChange}
        /> 
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    );
}

export {TodoSearch};
