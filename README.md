Projeto RickVerse

Esse projeto foi feito com o objetivo de mostrar os personagens que aparecem em cada episódio de rick and morty.

O Projeto contém uma pagina inicial que tem a listagem de episódios e um campo de busca onde você pode pesquisar o episódio que você queira.

A API tem os episódios com os seus nomes em inglês, então caso queira pesquisar no campo de busca terá que pesquisar em inglês.

Ao clicar no nome do episódio você será redirecionado a página de detalhes do episódio no qual mostra os personagens que aparecem no episódio.

O Projeto teria a intenção de evoluir com mais funcionalidades como mostrar detalhes dos personagens e sinopses dos episódios, mas devido ao curto tempo não foram incluídos nessa versão.

Tecnologias Utilizadas

React Node Material UI Jest Testing Library Express React - RouterDOM

Para rodar o projeto:

Após fazer o git clone, entre na pasta do projeto utilizando o terminal e acesse primeiro o backend, em seguida digite npm start:

rickverse -> cd backend -> npm start

Em seguida faça a mesma coisa no frontend

rickverse -> cd frontend -> npm start

Você será redirecionado ao endereço localhost:3000 com o projeto funcionando.

Testes

Foram criados pequenos testes unitários para complementar o projeto, o objetivo era de criar bem mais testes e evolui-lo em testes de integração e ponta a ponta, porém devido ao curto tempo foram feitos apenas os unitários.

Para rodar o teste entre na pasta do frontend e digite npm test:

rickverse -> cd frontend -> npm test


Deploy

O Projeto foi hospedado no Vercel(frontend) e Render(backend) na seguinte URL: https://rickverse-sooty.vercel.app/