import React, {useState} from 'react';
import styled from 'styled-components';

function TodoCreate() {
    const [value, setValue] = useState('');

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setValue('');
    };
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                placeholder="할 일 입력하시오"
                onChange={onChange}
                value={value}
            />
            <button>CREATE</button>
        </form>
    )
}