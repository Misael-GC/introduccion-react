import React from "react";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchTodos,
    completeTodo,
    deleteTodo,
}){
    return(
        <React.Fragment>
        <TodoCounter
         total={ totalTodos }
         completed={completedTodos}
        />
       <TodoSearch
         searchValue={searchValue}
         setSearchValue={setSearchValue}
       />
       <TodoList>
         {searchTodos.map(todo =>( 
           <TodoItem
           key={todo.text}
           text={todo.text}
           completed={todo.complete}
           onComplete={()=> completeTodo(todo.text)}
           onDelete={()=>deleteTodo(todo.text)}
           />
         ))}
       </TodoList> 
        <CreateTodoButton/>
       
       </React.Fragment>
    );
}

export {AppUI};