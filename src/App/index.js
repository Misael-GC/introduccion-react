import React from "react";
import { AppUI } from "./AppUI";

function useLocalStorage(itemName, initialValue){ 
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item , setItem] = React.useState(initialValue); //vamos a traer lo que tenemos en nuestros componentes

  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      }else{
        parsedItem = JSON.parse(localStorageItem);
      }
      setItem(parsedItem);
      setLoading(false)
      }catch(error){
        setError(error);
      }
    },3000)
  }, []);

  const saveItem = (newItem)=>{
    try{
      const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
    }catch(error){
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {
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

  return (
    <AppUI
      error={error}
      loading={loading}
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
