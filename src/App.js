import React from "react";
import { TodoCounter } from "./TodoCounter/index.js";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';

const defaulttodos = [
  {text:'cortar cebolla', complete: true},
  {text:'hablar con el prime', complete: false},
  {text:'salir con una chica', complete: false},
];

function App() {
  const [todos, setTodos] = React.useState(defaulttodos);
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
    setTodos(newTodos); //actualizamos el estado.
   }
   const deleteTodo = (text) => { 
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1); //borrara el todo como 1 pastel, ubique en el index y borra 1
    setTodos(newTodos);
   }

  return (
    <React.Fragment>
     <TodoCounter
      total={totalTodos}
      completed={completedTodos}
     />
    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />
    <TodoList>
      {searchTodos.map(todo =>( //array searchedTodos 
        <TodoItem
        key={todo.text}
        text={todo.text}
        completed={todo.complete}
        onComplete={()=> completeTodo(todo.text)} //le mandamos la propiedad
        onDelete={()=>deleteTodo(todo.text)}
        />
      ))}
    </TodoList> 
     <CreateTodoButton/>
    
    </React.Fragment>
  );
}

export default App;
