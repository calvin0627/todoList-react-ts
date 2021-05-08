import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Rootdiv = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
    body{
        padding: 0;
        margin: 0;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle/>
            <Rootdiv>
                
            </Rootdiv>
        </>
    )
}

export default App;
