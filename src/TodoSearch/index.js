import React from "react";
import './TodoSearch.css'

function TodoSearch(){
    const [ searchValue, setSearchValue ] = React.useState(''); //creamos nuestro estado y lo iniciamos con un string vacío

    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value); //nuestro nuevo estado será lo que escriba el user
    };

    return(
        <div className="Container-search">
        <input
        className="TodoSearch"
        placeholder="Filtro"
        value={searchValue} // el estado que vaya escribiendo el user será el nuevo initial
        onChange={onSearchValueChange}
        />,
        <i class="fa-solid fa-magnifying-glass"></i>,
         <p className="texto-extra"> {searchValue} </p> {/*lo ponemos aquí para reafirmar */}
        </div>
    );
}

export {TodoSearch};
