import axios from "axios";
import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import Footer from "../store/containers/Footer";
import Header from "./layout/Header";
import Todos from "./Todos";
function TodoApp() {
    const [state, setState] = useState({
        todos: []
    });
    const handleCheckboxChange = (id) => {
        setState({
            todos: state.todos.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed
                }
                return item;
            })
        });
    };
    const deleteTodo = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => {
                setState({
                    todos: [...state.todos.filter(item => {
                        return (item.id !== id);
                    })]
                });
            })
    };
    const addTodo = (item) => {
        const newTodo = {
            title: item,
            completed: false
        };
        axios.post("https://jsonplaceholder.typicode.com/todos", newTodo)
            .then(response => {
                setState({
                    todos: [...state.todos, response.data]
                });
            })
    };
    useEffect(() => {
        const config = {
            params: {
                _limit: 5,
            }
        };
        // tạo GET request để lấy danh sách todos
        axios.get("https://jsonplaceholder.typicode.com/todos", config)
            .then(response => setState({ todos: response.data }));
    }, []);

    return (
        <div className="container">
            <Header />
            <AddTodo addTodo={addTodo} />
            <Todos todos={state.todos}
                handleCheckboxChange={handleCheckboxChange}
                deleteTodo={deleteTodo} />
            <Footer />
        </div>

    );

}
export default TodoApp;