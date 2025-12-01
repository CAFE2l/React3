// ARQUIVO: app/layout.tsx

import type { Metadata } from "next";
import StyledComponentsRegistry from "../lib/styled-components-registry"; // 1. O Registry
import GlobalStyle from "./_components/globalstyles"; // 2. Nossos estilos globais
import { AlurakutMenu } from "./_components/AlurakutMenu"; // 3. Nosso menu

// Metadados da página (bom para SEO)
export const metadata: Metadata = {
  title: "Alurakut",
  description: "Projeto da Imersão Alura React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // Definimos o usuário aqui por enquanto
  const githubUser = 'CAFE2l';

  return (
    <html lang="pt-br" suppressHydrationWarning>
      {/* 'suppressHydrationWarning' é importante para evitar avisos 
        causados por extensões do navegador (como o Grammarly).
      */}
      <body>
        <StyledComponentsRegistry>
          {/* O GlobalStyle e o Menu agora são carregados em todas as páginas */}
          <GlobalStyle />
          <AlurakutMenu githubUser={githubUser} />
          
          {/* 'children' é onde o seu 'page.tsx' (e futuras páginas) 
              será renderizado */}
          <main>
            {children}
          </main>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}