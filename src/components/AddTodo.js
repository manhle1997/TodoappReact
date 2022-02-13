import React, { useState } from "react";

function AddTodo(props) {
    const [title, setTitle] = useState("");
    const onInputChange = (event) => {
        setTitle(event.target.value)
    };
    const addTodo = (event) => {
        event.preventDefault();
        props.addTodo(title);
        setTitle("");
    }

    return (
        <form className="form-container" onSubmit={addTodo}>
            <input type="text" placeholder="Add Todo..." className="input-text" value={title} onChange={onInputChange} />
            <input type="submit" value="Submit" className="input-submit" />
        </form>
    );

}
export default AddTodo;