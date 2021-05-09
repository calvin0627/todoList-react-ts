import React, { useState } from 'react';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';
import TodoItemModel from '../models/TodoItemModel';

function TodoContainer() : JSX.Element {
    const [todos, setTodos] = useState<TodoItemModel[]>([]);
    // const [todo, setTodo] = useState<TodoItemModel>();

    const addNewTodo = (todoText: string) => {
        if (!todos) return;
        if (!todoText) return;
        const todo = {
            id: todos.length,
            done: false,
            pinned: false,
            text: todoText
        };
        setTodos((prevState) => [...prevState, todo]);
    };
    const removeTodo = (id: number) => {
        if (!todos) return;
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const pinTodo = (id: number) => {
        if (!todos) return;
        console.log("pinned");
        setTodos(todos.map((todo) => ({
            ...todo,
            pinned: todo.id === id ? !todo.pinned : todo.pinned,
        })));
    };
    const toggleTodoDone = (id: number) => {
        if (!todos) return;

        setTodos(todos.map((todo) => ({
            ...todo,
            done: todo.id === id ? !todo.done : todo.done,
        })));
    };

    return (
        <>
            <TodoHead />
            <TodoCreate addNewTodo={addNewTodo}/>
            <TodoList 
                todos={todos}
                removeTodo={removeTodo}
                toggleTodoDone={toggleTodoDone}
                pinTodo={pinTodo}
            />
        </>
    );
}

export default TodoContainer;