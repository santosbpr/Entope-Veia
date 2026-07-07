# Walkthrough - Modularização dos Componentes Comuns em JavaScript

Concluímos a extração do Header principal, dos Rodapés e da Barra Lateral (Sidebar) para um arquivo JavaScript centralizado. Desta forma, eliminamos a repetição de código HTML e criamos um fluxo de navegação real entre as páginas do projeto.

## Alterações Realizadas

### 1. Novo Arquivo de Componentes
* **Criado**: [components.js](file:///home/johnny/Área de trabalho/Entope-Veia-main/js/components.js)
  * Define um objeto `components` com templates HTML para o cabeçalho (`mainHeader`), o rodapé do login (`loginFooter`), o rodapé principal (`mainFooter`) e rodapés específicos de cada painel (para manter a compatibilidade com as regras de CSS existentes de cada página).
  * Contém a função `getSidebar(activePage)` que renderiza a barra lateral dinamicamente, marca automaticamente o link ativo usando a classe `.active` baseada na página atual, e usa **ícones vetoriais inline (SVG)** (como boa prática sugerida, em vez de emoticons estáticos).
  * Executa a injeção via manipulação do DOM (`innerHTML`) no evento `DOMContentLoaded`.

### 2. Modificação das Páginas HTML
Substituímos os blocos estáticos repetitivos por placeholders simples (elementos com `id` correspondente) e adicionamos a tag `<script src="./js/components.js"></script>` antes de fechar o `</body>`:

* [index.html](file:///home/johnny/Área de trabalho/Entope-Veia-main/index.html) (Adicionados `<header id="global-header">` e `<footer id="global-footer">`)
* [login.html](file:///home/johnny/Área de trabalho/Entope-Veia-main/login.html) (Adicionado `<footer id="global-login-footer">`)
* [personalizacao.html](file:///home/johnny/Área de trabalho/Entope-Veia-main/personalizacao.html) (Adicionados `<aside id="global-sidebar">` e `<footer id="global-personalizacao-footer">`)
* [endereco.html](file:///home/johnny/Área de trabalho/Entope-Veia-main/endereco.html) (Adicionados `<aside id="global-sidebar">` e `<footer id="global-endereco-footer">`)
* [pagamento.html](file:///home/johnny/Área de trabalho/Entope-Veia-main/pagamento.html) (Adicionados `<aside id="global-sidebar">` e `<footer id="global-pagamento-footer">`)
* [status.html](file:///home/johnny/Área de trabalho/Entope-Veia-main/status.html) (Adicionados `<aside id="global-sidebar">` e `<footer id="global-status-footer">`)
* [avaliacao.html](file:///home/johnny/Área de trabalho/Entope-Veia-main/avaliacao.html) (Adicionados `<aside id="global-sidebar">` e `<footer id="global-avaliacao-footer">`)
* [pontos.html](file:///home/johnny/Área de trabalho/Entope-Veia-main/pontos.html) (Adicionados `<aside id="global-sidebar">` e `<footer id="global-pontos-footer">`)

### 3. Remoção Completa de Emojis do Código HTML e JS
Varremos e limpamos todos os arquivos HTML e o arquivo JS de componentes para assegurar que nenhum emoticon ou emoji seja usado como elemento de interface:
* **No `components.js`**: Removemos os emojis do rodapé (`🕒`, `🎟️`, `📱`, `➔`), deixando apenas texto limpo.
* **Nas páginas HTML**:
  * Substituímos `🔍` (Pesquisa) e `🛒` (Carrinho) por SVGs inline em `personalizacao.html`, `status.html`, `pagamento.html` e `pontos.html`.
  * Substituímos `🔥` (Calorias) por SVG inline de fogo em `personalizacao.html`.
  * Substituímos `⏱` (Cronômetro), `📍` (Pin de Mapa), `💬` (Chat), `📞` (Telefone), `🚚` (Caminhão de Entrega), `🏠` (Casa) e `❓` (Ajuda) por SVGs inline vetoriais em `status.html` e `pagamento.html`.
  * Removemos `📋` (Prancheta) do título de endereços salvos em `endereco.html`.
  * Substituímos `💳` (Cartão), `📱` (Pix) e `💵` (Dinheiro) por SVGs inline de pagamento em `pagamento.html`.
  * Substituímos `⭐` (Estrela) por SVG inline de estrela em `pontos.html`.

### 4. Filtro de Categorias no Cardápio (index.html)
Reconstruímos a lógica de filtragem simples no cardápio inicial:
* Adicionamos atributos `data-category` na lista de categorias (`burgers`, `fritança`, `bebidas`, `shakes`) e em cada card de produto do grid.
* Adicionamos um script ao final do `index.html` que captura cliques nas categorias, alterna a classe ativa visual, altera dinamicamente o título principal (ex: "Fritança.") e exibe/oculta os cards correspondentes.
* Adicionamos um item de teste à categoria vazia "Bebidas" (Cachaça do Infarto) para demonstrar a filtragem funcionando em todas as categorias.

### 5. Estilização Padrão do Mapa (Google Maps / Light Theme)
Ajustamos a exibição do mapa interativo em `endereco.html`:
* Removi o filtro CSS de inversão de cores (`filter: invert(...)`) do container `#map` em `endereco.css` que aplicava o modo escuro cyberpunk.
* Alterei a fonte de renderização do Leaflet em `endereco.html` para utilizar os blocos oficiais do **Google Maps** (`https://mt1.google.com/vt/...`), restaurando o design clássico claro/branco (ruas claras, água azul, parques verdes) para evitar qualquer problema de legibilidade ou quebra cromática.

### 6. Padronização da Sidebar Desktop (Menu Lateral)
Padronizamos a exibição e estilização da barra lateral esquerda em computadores para ficar idêntica à tela de Pontos:
* Injetamos estilos CSS globais específicos para a sidebar desktop (`#global-sidebar`) no script `components.js` dentro de `@media (min-width: 769px)`.
* Restauramos e padronizamos a foto de perfil do usuário (`.user-avatar`), aplicando dimensões responsivas maiores e mais harmoniosas (110x110px, borda arredondada de 8px, borda vermelha espessa de 3px, sombra de destaque e margem superior/inferior adequada) para que apareça de forma idêntica em todas as páginas desktop.
* Corrigimos o espaçamento e alinhamento do botão "PEÇA AGORA" para que ele se posicione corretamente na base da barra lateral esquerda em todas as páginas, eliminando sobreposições.
* **Ocultação da Sidebar Global no Cardápio (`index.html`)**: Como a página inicial possui sua própria barra de categorias no desktop, adicionamos uma verificação no JS para identificar se estamos na página inicial e aplicar a classe `.gs-index-sidebar`, ocultando a barra lateral de navegação global no desktop de forma automática e mantendo-a apenas no mobile como Bottom Nav.
* **Link de Perfil no Menu Superior (`components.js`)**: Adicionamos o link textual para a página de perfil (`endereco.html`) no cabeçalho padrão (`mainHeader`), posicionando-o ao lado de "Pedidos" no desktop para facilitar o acesso à tela de endereço na home.
* **Opção "Sair" na Sidebar Desktop (`components.js`)**: Adicionamos o item "Sair" no final da lista do menu lateral, com um ícone SVG clássico de saída, apontando para a página de login (`login.html`). Ele é exibido de forma consistente em computadores, mas é ocultado via CSS no mobile para preservar o design de 4 abas no Bottom Nav.
* **Melhoria da Responsividade do Cabeçalho (`menu.css`)**: Alteramos o ponto de quebra (breakpoint) do cabeçalho flexível na página inicial de `600px` para `850px`. Isso faz com que os elementos do menu superior (logo, links e barra de busca) quebrem em coluna antes de ficarem espremidos ou sobrepostos horizontalmente em telas de tablets ou desktops redimensionados.

---

## Verificação dos Resultados
* **Navegação Funcional**: Antes, a maioria das páginas usava links mortos (`#`). Agora, clicar nas opções do menu lateral navega diretamente entre os arquivos locais de forma fluida.
* **Preservação de Estilos**: As estruturas HTML injetadas mantêm as mesmas classes CSS que as originais, prevenindo quebras visuais nas páginas.
* **Rodapé Mobile-First Padronizado (Global)**: O rodapé de todas as 8 páginas do projeto foi padronizado e agora inclui o formulário de newsletter ("Clube do Infarto"), horário de funcionamento, botões de download de aplicativos (App Store e Google Play Store) e ícones de redes sociais (Instagram, Twitter e Facebook) desenhados em SVG. Para evitar conflito com as regras antigas de cada folha de estilo, isolamos as novas classes sob o prefixo `.gs-` e limpamos automaticamente os estilos herdados de forma dinâmica. No mobile, as seções se empilham verticalmente e se centralizam de forma responsiva.
* **Otimização da Bottom Nav (Mobile)**: Para garantir que o menu lateral se transforme em uma barra de navegação inferior (Bottom Nav) em **todas** as páginas do fluxo de forma padronizada (incluindo Checkout/Pagamento, Status, etc., que originalmente não tinham suporte ou ficavam esmagadas na lateral), forçamos essa reestruturação via CSS global injetado no JavaScript. Reduzimos a quantidade de abas no menu para as 4 abas oficiais planejadas no Stitch (Menu, Pedidos, Pontos, Perfil) para garantir uma visualização impecável sem cortes ou esmagamento.
* **Remoção de Links Redundantes no Topo**: Ocultamos os links de texto repetidos (`.header-nav-links`) na barra superior das páginas como `endereco.html` no mobile. Isso economiza espaço vertical de tela e elimina redundâncias, já que o usuário agora navega exclusivamente pela Bottom Nav inferior.
* **Correção de Ícones Distorcidos (Pontos e Perfil)**: Corrigimos um bug na página de Pontos (`pontos.html`), onde os ícones de *Pontos* e *Perfil* na barra inferior viravam bolinhas desproporcionais. A causa era um seletor genérico demais (`svg circle`) na folha de estilo `pontos.css` que afetava e distorcia qualquer elemento circular dos SVGs. Corrigimos o seletor em `pontos.css` para atingir apenas a roda de progresso (`.svg-container svg circle`) e criamos uma regra defensiva de reset no CSS global para proteger os SVGs.
* **Barra de Navegação na Página Inicial (index.html)**: Adicionamos o placeholder da barra de navegação global (`#global-sidebar`) na página inicial para permitir que os usuários do mobile naveguem facilmente a partir dela. Adicionamos uma regra no CSS (`css/menu.css`) para ocultar essa barra no desktop e garantimos que o container de produtos receba padding no rodapé (`padding-bottom: 90px`) para não ser coberto pela barra inferior.
