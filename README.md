# Pokédex

Uma Pokédex web que consulta dados em tempo real na [PokeAPI](https://pokeapi.co/) e apresenta informações de Pokémon em uma interface visual, interativa e em português.

> **Projeto pessoal e permanentemente em desenvolvimento.**  
> Novas melhorias, ajustes de experiência e experimentos técnicos podem ser incorporados continuamente.

## Funcionalidades

- **Carregamento inicial:** exibe automaticamente os 10 primeiros Pokémon ao abrir a aplicação.
- **Busca por nome ou ID:** permite consultar um Pokémon pelo campo de busca, pelo botão `GO` ou pressionando `Enter`.
- **Busca reativa:** quando o campo de busca volta a ficar vazio, a listagem inicial é carregada novamente.
- **Integração com API externa:** consome os endpoints de Pokémon da PokeAPI com `fetch` e `async/await`.
- **Cache da sessão:** armazena as respostas consultadas em `sessionStorage`, reduzindo chamadas repetidas à API durante a sessão do navegador.
- **Carregamento concorrente:** utiliza `Promise.all` para buscar os Pokémon da listagem inicial em paralelo.
- **Cards interativos:** cada Pokémon é exibido em um card com imagem, nome, número da Pokédex, ícones e tipo.
- **Detalhes sob demanda:** ao clicar em um card, a aplicação mostra:
  - nome e número do Pokémon;
  - tipos traduzidos para português;
  - experiência-base;
  - altura convertida para centímetros ou metros;
  - peso convertido para quilogramas;
  - habilidades traduzidas para português quando há mapeamento disponível.
- **Visualização de atributos:** apresenta vida, ataque, defesa, ataque especial, defesa especial e velocidade em um gráfico radar com Chart.js.
- **Leitura em voz alta:** usa a Web Speech API para narrar nome, tipos, habilidades e atributos do Pokémon em `pt-BR`.
- **Tradução e localização de conteúdo:** tipos e várias habilidades são convertidos do inglês da API para português.
- **Feedback visual por tipo:** cards usam gradientes e cores diferentes conforme o tipo principal do Pokémon.
- **Interface responsiva:** em telas menores, a área de resultados e o painel de detalhes passam de uma disposição lado a lado para uma disposição vertical.
- **Interações de interface:** inclui efeitos de hover, animações, rolagem suave e painel independente para detalhes.
- **Acessibilidade básica:** utiliza `alt` nas imagens e oferece uma alternativa de acesso ao conteúdo por síntese de voz.

## Tecnologias e bibliotecas

### Front-end

- HTML5 semântico
- CSS3
- JavaScript moderno (ES Modules)
- Fetch API
- `sessionStorage`
- Web Speech API (`SpeechSynthesis`)

### Bibliotecas e recursos externos

- [PokeAPI](https://pokeapi.co/) — fonte dos dados dos Pokémon
- [Chart.js](https://www.chartjs.org/) — gráfico radar de atributos
- [Animate.css](https://animate.style/) — animações de interface
- [Devicon](https://devicon.dev/) — ícone do GitHub
- Google Fonts — tipografia da interface

## Organização do projeto

```text
estudos/
├── index.html              # Estrutura da página e pontos de montagem da interface
├── css/
│   ├── reset.css           # Reset e normalização de estilos
│   ├── theme.css           # Variáveis de tema, cores e tipografia
│   └── style.css           # Layout, cards, detalhes e responsividade
├── js/
│   ├── app.js              # Busca, carregamento inicial, cache e eventos
│   ├── displayData.js      # Tradução, renderização dos cards e detalhes
│   └── speechData.js       # Preparação e reprodução da narração
└── assets/
    └── img/
        ├── fav.ico         # Favicon
        └── logo.svg        # Logo da aplicação
```

## Como executar

O projeto não depende de etapa de build nem de gerenciador de pacotes. Como a aplicação utiliza módulos JavaScript, o ideal é executá-la por um servidor HTTP local, em vez de abrir o arquivo diretamente com `file://`.

### Opção 1: extensão Live Server

1. Abra a pasta `estudos` no VS Code.
2. Instale a extensão **Live Server**.
3. Clique com o botão direito em `index.html`.
4. Selecione **Open with Live Server**.

### Opção 2: servidor HTTP local

Com Python instalado, a partir da pasta `estudos`, execute:

```bash
python3 -m http.server 8000
```

Depois, acesse <http://localhost:8000>.

É necessário ter conexão com a internet para consultar a PokeAPI e carregar as bibliotecas hospedadas por CDN.

## Habilidades demonstradas

Este projeto evidencia um conjunto de competências relevantes para desenvolvimento front-end:

- **Consumo e integração de APIs REST:** construção de requisições, validação de respostas HTTP, tratamento de falhas e transformação de dados externos para a interface.
- **JavaScript assíncrono:** uso prático de `async/await`, Promises, carregamento concorrente e eventos do ciclo de vida da página.
- **Arquitetura modular:** separação entre orquestração da aplicação, renderização de dados e síntese de voz usando ES Modules.
- **Manipulação do DOM:** criação dinâmica de elementos, atualização de templates, delegação de ações por eventos e atualização de estados visuais.
- **Otimização de experiência:** cache por sessão, carregamento inicial paralelo e retorno automático à listagem ao limpar a busca.
- **Visualização de dados:** conversão de atributos da API em um gráfico radar legível e integrado ao painel de detalhes.
- **Acessibilidade e inclusão:** implementação de leitura em voz alta, textos alternativos para imagens e tradução da informação para o idioma do usuário.
- **CSS e design de interface:** uso de variáveis CSS, reset próprio, composição de layout com Flexbox, responsividade, gradientes por tipo e microinterações.
- **Integração de bibliotecas de terceiros:** uso de Chart.js, Animate.css, Devicon e fontes externas via CDN.
- **Organização e manutenção de código:** estrutura de pastas clara, responsabilidades distribuídas por módulos e documentação do projeto.
- **Resolução de problemas de produto:** transformação de dados técnicos em uma experiência de consulta simples, visual e orientada à interação.

## Próximas evoluções possíveis

Como o projeto está em desenvolvimento contínuo, algumas evoluções naturais incluem:

- adicionar mensagens visuais para erros de rede e Pokémon não encontrado;
- ampliar a paginação e permitir navegar por diferentes conjuntos da Pokédex;
- centralizar os mapas de tradução para eliminar duplicação entre módulos;
- adicionar testes automatizados para busca, cache e renderização;
- tornar o link do GitHub configurável e apontá-lo para o repositório do projeto;
- melhorar os estados de carregamento e a acessibilidade dos controles interativos.

## Status

**Em desenvolvimento ativo e permanente.** Este é um projeto pessoal criado para praticar e demonstrar desenvolvimento front-end, integração com APIs, visualização de dados e construção de interfaces interativas.
