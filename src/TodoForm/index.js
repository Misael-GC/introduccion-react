import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { addTodo, setOpenModal } = React.useContext(TodoContext); //llamamos a la funciíon, addTodo del Provider del contexto
    const onCancel = () =>{
        setOpenModal(false) //cerrar el modal
    }
    const onChange =(event)=>{
        setNewTodoValue(event.target.value); 
    }
    const onSubmit = (event) =>{
        event.preventDefault();//ayuda a que el formulario no recargue la página 
        if(newTodoValue.length <=0)return; //evitara que envies ToDos vacios
        addTodo(newTodoValue); //le enviamos nuestro nuevo texto
        setOpenModal(false) //cerrar el modal
    }
    return(
        <form onSubmit={onSubmit}> {/* conecta con el submi */}
            <label>Escribe tu nueva tarea</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Actividad por hacer"
            />
            <div className="TodoForm-buttonContainer">
                <button
                className="TodoForm-button TodoForm-button--cancel"
                type="button"
                onClick={onCancel}>
                    Cancelar
                </button>
                <button
                className="TodoForm-button TodoForm-button--add"
                type="submit"
                  >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export {TodoForm}
