import React from "react";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { TodoContext } from '../TodoContext/index.js'; // No olvides importar a TodoContext

function AppUI(){
    return(
        <React.Fragment>
        <TodoCounter/>
       <TodoSearch />
       {/* Vamos a consumir el estado guardado en nuestro contexto */}
       <TodoContext.Consumer>
        {/* Vamos a usar una sintaxis -> render props  */}
        {({
          error,
          loading,
          searchTodos,
          completeTodo,
          deleteTodo,
          })=>(
          <TodoList>
         {error && <p>Desesperate, hubo un mistake</p>}
         {loading && <p>Cargando</p>}
         {(!loading && !searchTodos.length) && <p>Make your first ToDo :)</p>}
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
        )}
       </TodoContext.Consumer>
        <CreateTodoButton/>
       
       </React.Fragment>
    );
}

export {AppUI};