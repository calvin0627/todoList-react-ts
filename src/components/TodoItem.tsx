import React from 'react';
import styled from 'styled-components';

export type TodoItemProps = {
    todo: {
        id: number;
        text: string;
        done: boolean;
    };
};

const TodoItemBlock = styled.div`
    display: flex;
`;

const TodoCheckBox = styled.div`

`;

const TodoPinBox = styled.div`

`;

const TodoTextBox = styled.div`

`;

const TodoRemoveBox = styled.div`

`;


function TodoItem({ todo }: TodoItemProps) {
    return(
        <>
            <TodoItemBlock>
                <TodoCheckBox/>
                <TodoPinBox/>
                <TodoTextBox/>
                <TodoRemoveBox/>
            </TodoItemBlock>
        </>
    )
}

export default TodoItem;