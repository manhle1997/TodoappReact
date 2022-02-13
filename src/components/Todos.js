import React from "react";
import TodoItem from "./TodoItem";

function Todos(props) {
    return (
        <div>
            <ul>
                {props.todos.map(item => {
                    return (
                        <TodoItem key={item.id}
                            todo={item}
                            handleCheckboxChange={props.handleCheckboxChange}
                            deleteTodo={props.deleteTodo} />
                    );
                })}
            </ul>
        </div>
    );
}
export default Todos;