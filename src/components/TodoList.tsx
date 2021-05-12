import React, { useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import TodoItemModel from '../models/TodoItemModel';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 25px;
    padding-bottom: 48px;
    overflow-y: auto;
    /* background: gray; */
`;

interface TodoListProps {
    todos: TodoItemModel[];
    removeTodo: (id: number) => void;
    toggleTodoDone: (id: number) => void;
    pinTodo: (id: number) => void;
}

function TodoList(props: TodoListProps) {
    const {todos, removeTodo, toggleTodoDone, pinTodo} = props;

    return(
        <TodoListBlock>
            {todos.map(todo =>
                todo.pinned ? (
                    <TodoItem 
                        data={todo}
                        removeTodo={removeTodo}
                        toggleTodoDone={toggleTodoDone}
                        pinTodo={pinTodo}
                    />
                ) : null)}
            {todos.map(todo =>
                !todo.pinned ? (
                    <TodoItem 
                        data={todo}
                        removeTodo={removeTodo}
                        toggleTodoDone={toggleTodoDone}
                        pinTodo={pinTodo}
                    />
                ) : null)}
        </TodoListBlock>
    );
}

export default TodoList;