import React from "react";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { TodoContext } from "../TodoContext/index.js"; // No olvides importar a TodoContext
import { Modal } from '../Modal/index.js';
import { TodoForm } from "../TodoForm/index.js";
import { TodosError } from '../TodoError'
import { TodosLoading } from '../TodoLoading'
import { EmptyTodos } from '../EmptyTodos'

function AppUI() {
  const { 
    error, 
    loading, 
    searchTodos, 
    completeTodo, 
    deleteTodo,
    openModal, //los llamamos
    setOpenModal,
   } =
    React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {error && <TodosError error={error} />}
        {loading && <TodosLoading/>}
        {!loading && !searchTodos.length && <EmptyTodos/>}
        {searchTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.complete}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && ( //el open modal es true? si es que si pon esto
        <Modal>
        <TodoForm/>
      </Modal>
      )}
      <CreateTodoButton 
        setOpenModal={setOpenModal} //lo llamamos a botoon
      />
    </React.Fragment>
  );
}

export { AppUI };
