import React, { useState } from 'react';
import styled from 'styled-components';

const TodoCreateBlock = styled.div`
    padding-bottom: 0px;
    margin-top: 10px;
    margin-bottom: 0px;
    /* margin: 0; */
    /* height: 80px; */
    form{
        align-content: center;
        height: 30px;
        width: 95%;
    };
    input {
        margin-left: 5%;
        width: 75%;
        height: 20px;
        padding: 10px 0px;
        float: left;
        font: bold 15px 'lucida sans';
        border: 0;
        background: #EEE;
    }
    button {
        overflow: visible;
        position: relative;
        float: right;
        border: 0;
        padding: 0;
        cursor: pointer;
        height: 40px;
        width: 20%;
        font: bold 15px/40px 'lucida sans', 'trebuchet MS', 'Tahoma';
        color: white;
        text-transform: uppercase;
        background: #345678;
        border-radius: 0 3px 3px 0;
    }
`;

interface TodoCreateProps{
    addNewTodo: (todoText: string) => void;
}

function TodoCreate(props: TodoCreateProps) {
    const { addNewTodo } = props;

    const [value, setValue] = useState('');

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addNewTodo(value);
        setValue('');
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <TodoCreateBlock>
            <form onSubmit={onSubmit}>
                <input
                    placeholder="할 일 입력하시오"
                    onChange={onChange}
                    value={value}
                />
                <button>CREATE</button>
            </form>
        </TodoCreateBlock>
    )
}

export default TodoCreate;