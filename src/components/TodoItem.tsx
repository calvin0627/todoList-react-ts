import React from 'react';
import styled, { css } from 'styled-components';
import TodoItemModel from '../models/TodoItemModel'

const TodoCheckBox = styled.div<{ done: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
        props.done &&
        css`
        border: 1px solid #38d9a9;
        color: #38d9a9;
    `}
`;

const TodoPinBox = styled.div<{ pinned: boolean }>`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props =>
        props.pinned &&
        css`
        border: 1px solid #38d9a9;
        color: #38d9a9;
    `}
`;

const TodoTextBox = styled.div<{ done: boolean }>`
    flex: 1;
    font-size: 20px;
    color: #495057;
    ${props =>
        props.done &&
        css`
            color: #555555;
        `}
`;

const TodoRemoveBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font: bold 16px solid;
    cursor: pointer;
    background: red;
    overflow: visible;
    /* display: none; */
    /* overflow: visible;
    position: relative;
    float: right;
    display: flex;
    /* border: 0;
    padding: 0; */
    /* cursor: pointer;
    /* height: 10%; */
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${TodoRemoveBox} {
            display: initial;
        }
    }
`;

interface TodoItemProps {
    data: TodoItemModel
    removeTodo: (id: number) => void;
    toggleTodoDone: (id: number) => void;
    pinTodo: (id: number) => void;
};

function TodoItem(props: TodoItemProps): JSX.Element {
    const {data, removeTodo, toggleTodoDone, pinTodo} = props;
    const {id, done, text, pinned} = data;

    const toggleDone = () => {
        toggleTodoDone(id);
    }

    const pinning = () => {
        console.log(pinned);
        pinTodo(id);
    }

    const removing = () => {
        removeTodo(id);
    }

    return (
        <TodoItemBlock>
            <TodoCheckBox onClick={toggleDone} done={done} />
            <TodoPinBox onClick={pinning} pinned={pinned} />
            <TodoTextBox done={done}>{text}</TodoTextBox>
            <TodoRemoveBox onClick={removing}>remove</TodoRemoveBox>
        </TodoItemBlock>
    )
}

export default TodoItem;
