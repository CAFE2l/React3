"use client"; // Necessário para o createGlobalStyle no App Router

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* 1. Reset Básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: sans-serif;
    background-color: #D9E6F6;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column; 
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* 2. Estilos do Alurakut (Scrollbar, inputs, botões) */
  *::-webkit-scrollbar {
    width: 8px;
  }
  *::-webkit-scrollbar-track {
    background: #f1f1f1; 
  }
  *::-webkit-scrollbar-thumb {
    background: #888; 
    border-radius: 10px;
  }
  *::-webkit-scrollbar-thumb:hover {
    background: #555; 
  }

  a,
  button {
    cursor: pointer;
    transition: .3s;
    outline: 0;
    &:hover,
    &:focus {
      opacity: .8;
    }
    &:disabled {
      cursor: not-allowed;
      opacity: .5;
    }
  }

  input {
    transition: .3s;
    outline: 0;
    &:disabled {
      cursor: not-allowed;
      opacity: .5;
    }
    &:hover,
    &:focus {
      box-shadow: 0px 0px 5px #33333357;
    }
  }
`;

export default GlobalStyle;