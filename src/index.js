import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { GlobalStyle } from './GlobalStyle';

render(
    <>
        <GlobalStyle />
        <App />
    </>
    , document.getElementById('root'));