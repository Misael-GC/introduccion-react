import React from "react";
import { AppUI } from "./AppUI";

// const defaulttodos = [
//   {text:'cortar cebolla', complete: true},
//   {text:'hablar con el prime', complete: false},
//   {text:'salir con una chica', complete: false},
// ];

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.complete).length;
  const totalTodos = todos.length;

  let searchTodos = []; 

  if(!searchValue.length >= 1){ 
    searchTodos = todos; 
  }else{ 
    searchTodos = todos.filter(todo=>{
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase();
      
      return todoText.includes(searchText);
    })
  }
  const saveTodos = (newTodos)=>{
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  };

   const completeTodo = (text) => { //nueva función de compliteTodos
    const todoIndex = todos.findIndex(todo => todo.text === text); //buscamos su posición que tenga el mismo texto
    const newTodos = [...todos]; //la nueva lista será igual a la primera del estado 
    newTodos[todoIndex].complete = !newTodos[todoIndex].complete;  //ubicando la posición le cambiamos su propiedad a true
    saveTodos(newTodos); //actualizamos el estado.
   }
   const deleteTodo = (text) => { 
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1); //borrara el todo como 1 pastel, ubique en el index y borra 1
    saveTodos(newTodos);
   }

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchTodos={searchTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
        />
  );
}

export default App;
