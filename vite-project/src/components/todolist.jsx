import React, { useState } from "react";
import Todoform from "./todoform";
import Todo from "./todo";

export default function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
    };

    
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr);
    }


    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        })
        setTodos(updatedTodos);
    }



    return (
        <div>

            <Todoform onSubmit={addTodo}></Todoform>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/>

        </div>

    )
}