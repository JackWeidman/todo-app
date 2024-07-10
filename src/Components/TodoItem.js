import React from "react";


const TodoItem = ({todo, removeTodo})=> {
    return(
        <li>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </li>
    )
}


export default TodoItem;