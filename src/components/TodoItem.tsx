import React from 'react';
import styled, { css } from 'styled-components';
import TodoItemModel from '../models/TodoItemModel'
import { MdDeleteForever, MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import { AiTwotonePushpin, AiOutlinePushpin} from 'react-icons/ai';

const TodoCheckBox = styled.div`
    display: flex;
    align-items: center;
    margin-left: 7px;

    svg {
        width: 32px;
        height: 32px;
    }

    &:hover {
        transform: scale(1.2);
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -ms-transform: scale(1.2);
        -o-transform: scale(1.2);
    }
`;

const TodoPinBox = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-left: 10px;

    svg {
        width: 32px;
        height: 32px;
    }

    &:hover {
        transform: scale(1.2);
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -ms-transform: scale(1.2);
        -o-transform: scale(1.2);
    }
`;

const TodoTextBox = styled.div<{ done: boolean }>`
    flex: 1;
    font-size: 20px;
    ${props =>
        props.done &&
        css`
            text-decoration: line-through;
        `}
`;

const TodoRemoveBox = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;

    svg {
        width: 32px;
        height: 32px;
    }

    &:hover {
        transform: scale(1.2);
        -webkit-transform: scale(1.2);
        -moz-transform: scale(1.2);
        -ms-transform: scale(1.2);
        -o-transform: scale(1.2);
    }
`;

const TodoItemBlock = styled.div<{done: boolean}>`
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #e9ecef;
    border-radius: 10px;
    margin-bottom: 5px;

    &:hover {
        transform: scale(1.03);
        -webkit-transform: scale(1.03);
        -moz-transform: scale(1.03);
        -ms-transform: scale(1.03);
        -o-transform: scale(1.03);
    }

    ${props =>
        props.done &&
        css`
            text-decoration: line-through;
            background: #EEE;
        `}
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
        <TodoItemBlock done={done}>
            <TodoCheckBox onClick={toggleDone}>
                {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </TodoCheckBox>
            <TodoPinBox onClick={pinning}> 
                {pinned ? <AiTwotonePushpin/> : <AiOutlinePushpin/>}
            </TodoPinBox>
            <TodoTextBox done={done}>
                {text}
            </TodoTextBox>
            <TodoRemoveBox onClick={removing}>
                <MdDeleteForever />
            </TodoRemoveBox>
        </TodoItemBlock>
    )
}

export default TodoItem;
