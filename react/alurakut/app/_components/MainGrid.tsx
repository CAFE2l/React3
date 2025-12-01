// ARQUIVO: app/_components/MainGrid.tsx

"use client"; // styled-components são Client Components

import styled from "styled-components";

const MainGrid = styled.main`
  width: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px; /* Largura máxima para mobile */
  padding: 16px;
  
  /* Layout MOBILE (Mobile First) */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 
    "welcomeArea"
    "profileRelationsArea";
  
  /* @media: Quando a tela for 860px OU MAIOR... */
  @media(min-width: 860px) {
    max-width: 1110px;
    /* ...aplica o layout de desktop com 3 colunas */
    grid-template-areas: 
      "profileArea welcomeArea profileRelationsArea";   
    grid-template-columns: 160px 1fr 312px; 
  }
`;

export default MainGrid;