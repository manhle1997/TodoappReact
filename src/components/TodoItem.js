import React from "react";

function TodoItem(props) {
    
    const handleCheckboxChange = (id) => {
        props.handleCheckboxChange(id);
    }

    const { id, title, completed } = props.todo;

    return (
        <li className="todo-item">
            <input type="checkbox"
                checked={completed}
                onChange={() => {
                    handleCheckboxChange(id);
                }} />
            <span className={completed ? "completed" : ""}>{title}</span>
            <button className="btn-style" onClick={() => {
                props.deleteTodo(id);
            }}>X</button>

        </li>
    );

}
export default TodoItem;