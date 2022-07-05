import React from "react";
import { TodoCounter } from "./TodoCounter/index";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
// import './App.css';

const todos = [
  {text:'cortar cebolla', complete: false},
  {text:'cortar cebollas', complete: false},
  {text:'cortar ceboll', complete: false},
];

function App() {
  return (
    <React.Fragment>
     <TodoCounter/>
   
    <TodoSearch/>

    <TodoList>
      {todos.map(todo =>(
        <TodoItem key={todo.text} text={todo.text}/>
      ))}
    </TodoList> 
     <CreateTodoButton/>
    
    </React.Fragment>
  );
}

export default App;
