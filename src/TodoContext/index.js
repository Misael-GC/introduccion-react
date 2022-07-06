import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        } = useLocalStorage('TODOS_V1', []);
    
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
    return(
    <TodoContext.Provider value={{
      error,
      loading,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      searchTodos,
      completeTodo,
      deleteTodo,
    }}>
        {props.children}
    </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider };