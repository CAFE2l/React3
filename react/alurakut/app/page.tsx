"use client";

import { AlurakutProfileSidebarMenuDefault } from "./_components/AlurakutMenu";
import Box from "./_components/Box";
import MainGrid from "./_components/MainGrid";
import { OrkutNostalgicIconSet } from "./_components/OrkutNostalgicIconSet";

// Componente separado para a Coluna do Perfil
function ProfileSidebar({ githubUser }: { githubUser: string }) {
  return (
    <Box>
      <img
        className="profile-image" 
        src={`https://github.com/${githubUser}.png`}
        alt="Foto de Perfil"
      />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${githubUser}`}>
          @{githubUser}
        </a>
      </p>
      <hr />
      
      {/* Usamos o menu da sidebar que importamos */}
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

// --- A PÁGINA PRINCIPAL (HOME) ---
export default function Home() {
  const githubUser = 'CAFE2l';

  // Dados "mockados" (falsos) por enquanto
  const comunidades = [
    {id: 1, title: 'Eu odeio acordar cedo', image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg'}
  ];
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ];

  return (
    /* O MainGrid define o layout de 3 colunas */
    <MainGrid>
      
      {/* Coluna 1: Profile Area */}
      <div className="profileArea">
        <ProfileSidebar githubUser={githubUser} />
      </div>

      {/* Coluna 2: Welcome Area */}
      <div className="welcomeArea">
        <Box>
          <h1 className="title">
            Bem-vindo(a), {githubUser}
          </h1>

          <OrkutNostalgicIconSet 
            recados={3}
            fotos={12}
            videos={5}
            fas={120}
            mensagens={7}
            confiavel={3}
            legal={2}
            sexy={1}
          />
        </Box>
        
        <Box>
           <h2 className="subTitle">O que você deseja fazer?</h2>
           <form onSubmit={(e) => {
             e.preventDefault(); 
             alert('Formulário enviado! (Em breve vamos fazer isso funcionar)');
           }}>
             <div>
               <input 
                 placeholder="Qual vai ser o nome da sua comunidade?" 
                 name="title" 
                 aria-label="Qual vai ser o nome da sua comunidade?"
                 type="text"
               />
             </div>
             <div>
               <input 
                 placeholder="Coloque uma URL para usarmos de capa" 
                 name="image" 
                 aria-label="Coloque uma URL para usarmos de capa"
                 type="text"
               />
             </div>
             <button type="submit">
               Criar comunidade
             </button>
           </form>
        </Box>
      </div>

      {/* Coluna 3: Relations Area */}
      <div className="profileRelationsArea">
        <Box>
           <h2 className="smallTitle">
            Minhas Comunidades ({comunidades.length})
          </h2>
           <ul>
            {comunidades.map((comunidade) => (
              <li key={comunidade.id}>
                <a href={`/communities/${comunidade.id}`}>
                  <img src={comunidade.image} alt={comunidade.title} />
                  <span>{comunidade.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </Box>
         <Box>
          <h2 className="smallTitle">
            Pessoas da Comunidade ({pessoasFavoritas.length})
          </h2>
          <ul>
            {pessoasFavoritas.map((pessoa) => (
              <li key={pessoa}>
                <a href={`/users/${pessoa}`}>
                  <img src={`https://github.com/${pessoa}.png`} alt={pessoa} />
                  <span>{pessoa}</span>
                </a>
              </li>
            ))}
          </ul>
        </Box>
      </div>

    </MainGrid>
  );
}