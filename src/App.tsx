import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoContainer from './components/TodoContainer';

const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
        background: #e9ecef;
    }
`;


function App() {
    return (
        <>
            <GlobalStyle/>
            <TodoTemplate>
                <TodoContainer/>
            </TodoTemplate>
        </>
    );
}

export default App;
