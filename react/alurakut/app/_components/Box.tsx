// ARQUIVO: app/_components/Box.tsx

"use client"; // styled-components são Client Components

import styled from 'styled-components';

const Box = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 16px;

  /* Classe para a imagem de perfil que vamos usar */
  .profile-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  /* ... (estilos de input, button, title, etc. que já tínhamos) ... */
  input {
    width: 100%;
    background-color: #F4F4F4;
    color: #333333; 
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: #333333;
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 10000px;
    background-color: #6F92BB;
  }
  .boxLink {
    font-size: 14px;
    color: #2E7884;
    text-decoration: none;
    font-weight: 800;   
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent; 
    border-bottom-color: #ECF2FA;
  }

  /* =================================================== */
  /* === NOVOS ESTILOS AQUI (Para as listas) === */
  /* =================================================== */
  
  /* A lista (ul) vira um grid */
  ul {
    display: grid;
    grid-gap: 8px;
    /* Cria colunas responsivas: 
       cada item tem no mínimo 86px, 
       mas elas se ajustam para preencher o espaço (1fr) 
    */
    grid-template-columns: repeat(auto-fill, minmax(86px, 1fr));
    list-style: none;
  }

  /* O link (a) que envolve a imagem e o texto */
  li a {
    display: inline-block;
    height: 102px;
    width: 100%; /* Faz o link ocupar o espaço do grid */
    position: relative;
    overflow: hidden;
    border-radius: 8px;

    /* O nome da pessoa/comunidade */
    span {
      color: #FFFFFF;
      font-size: 10px;
      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 2;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    /* Efeito de sombra para o texto ficar legível */
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 1;
      background-image: linear-gradient(to top, #00000099 30%, transparent 70%);
    }
  }
  
  /* A imagem (img) dentro da lista */
  li a img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Garante que a imagem cubra o espaço sem distorcer */
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default Box;