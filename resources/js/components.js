/* ==========================================================================
   ARQUIVO: resources/js/components.js (ou script de componentes globais)
   DESCRIÇÃO: Armazena e injeta componentes repetitivos (Header, Sidebar, Footer)
              e seus estilos para evitar repetição de código nas páginas.
   
   ÍNDICE:
   1. ESTILOS GLOBAIS DO RODAPÉ (String CSS)
   2. COMPONENTES HTML (Objeto com Header, Sidebar e Footer)
   3. LÓGICA DE INJEÇÃO (Renderização no DOM ao carregar a página)
   ========================================================================== */


/* ==========================================================================
   1. ESTILOS GLOBAIS DO RODAPÉ (String CSS)
   Injetado no <head> para garantir a estilização padrão em todas as telas.
   ========================================================================== */
const footerStyle = `
/* --- 1.1 RESET DE CONTAINERS --- 
   Evita conflito com folhas de estilo locais de cada página */
#global-footer, #global-login-footer, #global-personalizacao-footer, #global-endereco-footer, 
#global-pagamento-footer, #global-status-footer, #global-avaliacao-footer, #global-pontos-footer {
    background: transparent !important;
    border: none !important;
    padding: 0 !important;
    margin: 0 !important;
    width: 100% !important;
    box-sizing: border-box !important;
}

/* --- 1.2 LAYOUT PRINCIPAL DO RODAPÉ --- */
.gs-footer-wrapper {
    background-color: #050505 !important;
    border-top: 2px solid #e31b23 !important;
    padding: 40px 5% !important;
    margin-top: 40px !important;
    width: 100% !important;
    box-sizing: border-box !important;
    text-align: left !important;
    color: #888 !important;
    overflow-x: hidden !important;
    
    /* A MÁGICA AQUI: Flexbox no wrapper principal */
    display: flex !important;
    flex-direction: column !important; /* Define que o conteúdo e o copyright são uma coluna */
    min-height: 100% !important;
}

.gs-footer-content {
    display: flex !important;
    justify-content: space-between !important; /* Espalha esquerda, centro e direita no PC */
    align-items: flex-start !important;
    flex-wrap: wrap !important; /* Permite que os itens desçam se faltar espaço */
    gap: 30px !important;
    width: 100% !important;
    box-sizing: border-box !important;
    margin-bottom: 20px !important; /* Garante um respiro acima do copyright */
}

.gs-footer-left, .gs-footer-newsletter, .gs-footer-right-col {
    flex: 1 1 250px !important; /* Cada bloco tenta ter 250px e cresce/encolhe por igual */
    box-sizing: border-box !important;
}

/* --- 1.3 TIPOGRAFIA E TEXTOS --- */
.gs-logo {
    font-family: 'Arial', sans-serif !important;
    font-size: 24px !important;
    font-weight: 900 !important;
    color: #e31b23 !important;
    letter-spacing: 1px !important;
    text-transform: uppercase !important;
}

.gs-desc {
    font-family: 'Arial', sans-serif !important;
    font-size: 13px !important;
    color: #888 !important;
    margin-top: 10px !important;
    line-height: 1.5 !important;
}

.gs-footer-hours { margin-top: 20px !important; }

.gs-footer-hours h4, .gs-footer-newsletter h4, .gs-footer-right-col h4 {
    font-family: 'Arial', sans-serif !important;
    font-size: 14px !important;
    color: #fff !important;
    text-transform: uppercase !important;
    margin: 0 0 10px 0 !important;
    letter-spacing: 0.5px !important;
}

/* --- 1.4 FORMULÁRIO DE NEWSLETTER --- */
.gs-newsletter-form {
    display: flex !important;
    gap: 8px !important;
    margin-top: 15px !important;
    width: 100% !important;
    max-width: 320px !important;
}

.gs-newsletter-form input {
    background-color: #111 !important;
    border: 1px solid #333 !important;
    color: #fff !important;
    padding: 10px 14px !important;
    border-radius: 4px !important;
    font-size: 13px !important;
    flex-grow: 1 !important;
    outline: none !important;
    box-sizing: border-box !important;
}
.gs-newsletter-form input:focus { border-color: #e31b23 !important; }

.gs-newsletter-form button {
    background-color: #e31b23 !important;
    color: #fff !important;
    border: none !important;
    padding: 10px 18px !important;
    border-radius: 4px !important;
    font-size: 13px !important;
    font-weight: bold !important;
    cursor: pointer !important;
    white-space: nowrap !important;
    transition: background-color 0.2s !important;
}
.gs-newsletter-form button:hover { background-color: #ff4a5a !important; }

/* --- 1.5 BADGES (APLICATIVOS) E REDES SOCIAIS --- */
.gs-app-badges-row { display: flex !important; gap: 12px !important; margin-top: 12px !important; flex-wrap: wrap !important; }
.gs-app-badge { transition: transform 0.2s !important; display: inline-block !important; }
.gs-app-badge:hover { transform: scale(1.05) !important; }

.gs-footer-socials { margin-top: 25px !important; }
.gs-social-icons-row { display: flex !important; gap: 15px !important; margin-top: 12px !important; }
.gs-social-icon { color: #888 !important; display: inline-flex !important; align-items: center !important; justify-content: center !important; transition: color 0.2s, transform 0.2s !important; }
.gs-social-icon:hover { color: #fff !important; transform: translateY(-2px) !important; }

.gs-copyright {
    font-family: 'Arial', sans-serif !important;
    font-size: 11px !important;
    color: #444 !important;
    border-top: 1px solid #111 !important;
    padding-top: 20px !important;
    text-align: left !important;
    width: 100% !important;
    box-sizing: border-box !important;
    
    /* Força o copyright a ficar sempre no final do container pai */
    margin-top: auto !important; 
}

/* --- 1.6 RESPONSIVIDADE E MENU MOBILE (Bottom Nav) --- */
@media (max-width: 768px) {
    /* Ajustes para o rodapé não encavalar */
    .gs-footer-content {
        flex-direction: column !important;
        align-items: center !important;
        text-align: center !important;
        gap: 45px !important; /* Espaço para respirar entre os blocos */
    }
    
    .gs-footer-left, .gs-footer-newsletter, .gs-footer-right-col {
        width: 100% !important; /* Força a ocupar a tela toda */
        flex: none !important; /* Desliga o comportamento que estava esmagando os itens */
    }
    
    /* --- Atualização do Formulário no Celular (Botão embaixo) --- */
    .gs-newsletter-form {
        margin: 15px auto 0 auto !important;
        
        /* Muda o comportamento para coluna (um embaixo do outro) */
        flex-direction: column !important; 
        align-items: center !important;
        width: 100% !important;
    }

    /* Faz o input e o botão ocuparem toda a largura da coluna no celular */
    .gs-newsletter-form input,
    .gs-newsletter-form button {
        width: 100% !important;
    }
    
    .gs-app-badges-row, .gs-social-icons-row {
        justify-content: center !important;
    }
    
    .gs-copyright {
        text-align: center !important;
        padding-bottom: 20px !important; /* Espaço extra no fundo */
    }
    
    .gs-hide-mobile {
        display: none !important;
    }
    
    /* Forçar a sidebar global a virar bottom nav em todas as páginas no mobile */
    #global-sidebar {
        width: 100% !important;
        height: 65px !important;
        position: fixed !important;
        bottom: 0 !important;
        left: 0 !important;
        top: auto !important;
        right: 0 !important;
        background-color: #0c0c0c !important;
        border-top: 1px solid #1a1a1a !important;
        border-right: none !important;
        border-left: none !important;
        padding: 0 10px !important;
        display: flex !important;
        flex-direction: row !important;
        justify-content: center !important;
        align-items: center !important;
        z-index: 9999 !important;
    }
    
    #global-sidebar .brand-section, 
    #global-sidebar .welcome-box, 
    #global-sidebar .sidebar-footer {
        display: none !important;
    }
    
    #global-sidebar .sidebar-menu {
        width: 100% !important;
        margin-top: 0 !important;
        padding: 0 !important;
    }
    
    #global-sidebar .sidebar-menu ul li[data-item-id="sair"] {
        display: none !important;
    }
    
    #global-sidebar .sidebar-menu ul {
        display: flex !important;
        flex-direction: row !important;
        justify-content: space-around !important;
        align-items: center !important;
        width: 100% !important;
        gap: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
        list-style: none !important;
    }
    
    #global-sidebar .sidebar-menu ul li {
        flex: 1 !important;
        text-align: center !important;
        margin: 0 !important;
        padding: 0 !important;
        background: transparent !important;
        border: none !important;
    }
    
    #global-sidebar .sidebar-menu ul li a {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        justify-content: center !important;
        gap: 4px !important;
        padding: 8px 0 !important;
        font-size: 10px !important;
        color: #888 !important;
        text-decoration: none !important;
        background: transparent !important;
    }
    
    #global-sidebar .sidebar-menu ul li.active a {
        color: #fce3a1 !important;
        background: transparent !important;
    }
    
    #global-sidebar ~ .main-content,
    #global-sidebar ~ .main-container {
        margin-left: 0 !important;
        padding-bottom: 90px !important;
    }
    
    /* Ocultar links redundantes do menu superior no mobile */
    .header-nav-links {
        display: none !important;
    }
    
    /* Garantir reset dos SVGs do menu contra estilos globais invasivos */
    #global-sidebar svg circle {
        fill: none !important;
        stroke: currentColor !important;
        stroke-width: 2 !important;
        transform: none !important;
        transform-origin: initial !important;
    }
}

/* --- 1.5 SIDEBAR DESKTOP PADRONIZADA --- */
@media (min-width: 769px) {
    #global-sidebar {
        width: 250px !important;
        background-color: #111111 !important;
        border-right: 1px solid #1a1a1a !important;
        border-left: none !important;
        border-top: none !important;
        border-bottom: none !important;
        padding: 35px 20px !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: space-between !important;
        position: fixed !important;
        height: 100vh !important;
        top: 0 !important;
        left: 0 !important;
        bottom: 0 !important;
        right: auto !important;
        z-index: 1000 !important;
        box-sizing: border-box !important;
    }

    #global-sidebar.gs-index-sidebar {
        display: none !important;
    }

    #global-sidebar .brand-section {
        display: block !important;
        width: 100% !important;
    }

    #global-sidebar .logo-title {
        color: #ff4a5a !important;
        font-size: 28px !important;
        font-style: italic !important;
        letter-spacing: -1px !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        line-height: 1.2 !important;
        font-weight: bold !important;
    }

    #global-sidebar .user-slogan {
        font-family: 'Arial', sans-serif !important;
        font-size: 13px !important;
        color: #888 !important;
        margin-top: 5px !important;
        margin-bottom: 0 !important;
    }

    #global-sidebar .welcome-box {
        display: flex !important;
        flex-direction: column !important;
        align-items: flex-start !important;
        margin-top: 20px !important;
        margin-bottom: 0 !important;
        width: 100% !important;
    }

    #global-sidebar .user-avatar {
        display: block !important;
        width: 110px !important;
        height: 110px !important;
        border-radius: 8px !important;
        background-size: cover !important;
        background-position: center !important;
        border: 3px solid #ff4a5a !important;
        margin-bottom: 20px !important;
        margin-top: 10px !important;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4) !important;
    }

    #global-sidebar .welcome-box h3 {
        font-size: 18px !important;
        color: #fff !important;
        font-weight: bold !important;
        margin-top: 0 !important;
        margin-bottom: 5px !important;
        line-height: 1.2 !important;
    }

    #global-sidebar .welcome-box p {
        font-family: 'Arial', sans-serif !important;
        font-size: 13px !important;
        color: #888 !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
    }

    #global-sidebar .sidebar-menu {
        width: 100% !important;
        margin-top: 0 !important;
        display: block !important;
    }

    #global-sidebar .sidebar-menu ul {
        list-style: none !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 8px !important;
        margin-top: -100px !important;
        padding: 0 !important;
    }

    #global-sidebar .sidebar-menu ul li {
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        background: transparent !important;
        border: none !important;
    }

    #global-sidebar .sidebar-menu ul li a {
        display: flex !important;
        flex-direction: row !important;
        align-items: center !important;
        justify-content: flex-start !important;
        gap: 12px !important;
        padding: 14px 18px !important;
        font-family: 'Arial', sans-serif !important;
        font-size: 14px !important;
        font-weight: bold !important;
        color: #aaa !important;
        text-decoration: none !important;
        border-radius: 0 !important;
        background: transparent !important;
        width: 100% !important;
        box-sizing: border-box !important;
    }

    #global-sidebar .sidebar-menu ul li.active a {
        background-color: #fce3a1 !important;
        color: #000 !important;
    }

    #global-sidebar .sidebar-menu ul li a:hover:not(.active a) {
        background-color: #1a1a1a !important;
        color: #fff !important;
    }

    #global-sidebar .sidebar-footer {
        display: block !important;
        width: 100% !important;
        padding: 0 !important;
        margin: 0 !important;
    }

    #global-sidebar .btn-order-now {
        width: 100% !important;
        background-color: #e31b23 !important;
        color: #fff !important;
        border: none !important;
        padding: 15px !important;
        font-size: 14px !important;
        font-weight: bold !important;
        cursor: pointer !important;
        border-radius: 0 !important;
        box-sizing: border-box !important;
    }
    
    #global-sidebar .btn-order-now:hover {
        background-color: #b31218 !important;
    }
}
`;

/* ==========================================================================
   2. COMPONENTES HTML
   Objeto contendo os templates que serão renderizados dinamicamente.
   ========================================================================== */
const components = {
    
    // --- 2.1 HEADER PRINCIPAL (Usado na index.html) ---
    mainHeader: `
        <div class="logo"><a href="index.html" style="text-decoration: none; color: inherit;">ENTOPE VEIA</a></div>
        <nav>
            <ul>
                <li><a href="index.html">Menu</a></li>
                <li><a href="pontos.html">Pontos</a></li>
                <li><a href="status.html">Pedidos</a></li>
                <li><a href="endereco.html">Perfil</a></li>
            </ul>
        </nav>
        <div class="nav-right">
            <input type="text" class="search-bar" placeholder="Procurar algo gorduroso...">
        </div>
    `,

    // --- 2.2 SIDEBAR LATERAL (Páginas internas) ---
    // Função que recebe a página atual para marcar a classe "active"
    getSidebar(activePage) {
        const menuItems = [
            { id: 'menu', name: 'Menu', icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M3 12h18M3 6h18M3 18h18"/></svg>`, url: 'index.html' },
            { id: 'pedidos', name: 'Pedidos', icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/></svg>`, url: 'status.html' },
            { id: 'pontos', name: 'Pontos', icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`, url: 'pontos.html' },
            { id: 'perfil', name: 'Perfil', icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`, url: 'endereco.html' },
            { id: 'sair', name: 'Sair', icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>`, url: 'login.html' }
        ];

        let menuHtml = '';
        menuItems.forEach(item => {
            const isActive = item.id === activePage ? 'class="active"' : '';
            menuHtml += `<li ${isActive} data-item-id="${item.id}"><a href="${item.url}"><span>${item.icon}</span> ${item.name}</a></li>`;
        });

        return `
            <div class="brand-section">
                <h1 class="logo-title">ENTOPE VEIA</h1>
                <p class="user-slogan">TENHA FOME!</p>
            </div>

            <div class="welcome-box">
                <div class="user-avatar" style="background-image: url('vendors/img/cliente-pic.jpeg');"></div>
                <h3>Bem-vindo de volta</h3>
                <p class="user-level">Gordice Level: Pro</p>
            </div>

            <nav class="sidebar-menu">
                <ul>
                    ${menuHtml}
                </ul>
            </nav>

            <div class="sidebar-footer">
                <button class="btn-order-now" onclick="window.location.href='index.html'">PEÇA AGORA</button>
            </div>
        `;
    },

    // --- 2.3 RODAPÉ GLOBAL PADRONIZADO ---
    standardFooter: `
        <!-- SEO: Uso da tag semântica <footer> em vez de apenas <div> -->
        <footer class="gs-footer-wrapper" style="overflow-x: hidden;">
            <div class="gs-footer-content">
                <div class="gs-footer-left">
                    <!-- SEO: Transformado em título H2 para hierarquia correta -->
                    <h2 class="gs-logo">ENTOPE VEIA</h2>
                    <p class="gs-desc">Servindo os hambúrgueres mais indulgentes, gordurosos e saborosos desde '99. Coma agora, se arrependa depois.</p>
                    <div class="gs-footer-hours">
                        <h4>Funcionamento</h4>
                        <p class="gs-desc">Todos os dias, das 18h às 02h</p>
                    </div>
                </div>
                
                <div class="gs-footer-newsletter">
                    <h4>Clube do Infarto</h4>
                    <p class="gs-desc">Receba cupons de desconto secretos e novidades ultra-calóricas direto na sua caixa de entrada.</p>
                    <form class="gs-newsletter-form" onsubmit="event.preventDefault(); alert('Inscrição confirmada! Fique de olho no seu e-mail para receber seus cupons.'); this.reset();">
                        <!-- SEO/Acessibilidade: aria-label adicionado -->
                        <input type="email" placeholder="Seu e-mail..." aria-label="Digite seu e-mail para receber cupons" required style="max-width: 100%;">
                        <button type="submit">Quero Cupom</button>
                    </form>
                </div>
                
                <div class="gs-footer-right-col">
                    <div class="gs-footer-app-badges">
                        <h4>Peça pelo Celular</h4>
                        <p class="gs-desc">Baixe nosso app e ganhe entrega grátis no primeiro pedido.</p>
                        <div class="gs-app-badges-row">
                            <!-- SEO/Acessibilidade: aria-labels nos links das lojas -->
                            <a href="https://www.apple.com/br/app-store/" class="gs-app-badge" aria-label="Baixar aplicativo na App Store">
                                <!-- RESPONSIVIDADE: max-width: 100% e height: auto para não vazar margem -->
                                <svg width="120" height="36" viewBox="0 0 135 40" style="vertical-align: middle; max-width: 100%; height: auto;">
                                    <rect width="135" height="40" rx="6" fill="#111" stroke="#333" stroke-width="1"/>
                                    <text x="12" y="24" fill="#fff" font-family="sans-serif" font-size="11" font-weight="bold">App Store</text>
                                </svg>
                            </a>
                            <a href="https://play.google.com/store/games?hl=pt_BR" class="gs-app-badge" aria-label="Baixar aplicativo no Google Play">
                                <svg width="120" height="36" viewBox="0 0 135 40" style="vertical-align: middle; max-width: 100%; height: auto;">
                                    <rect width="135" height="40" rx="6" fill="#111" stroke="#333" stroke-width="1"/>
                                    <text x="12" y="24" fill="#fff" font-family="sans-serif" font-size="11" font-weight="bold">Google Play</text>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <div class="gs-footer-socials">
                        <h4>Siga a Gente</h4>
                        <div class="gs-social-icons-row">
                            <!-- SEO/Acessibilidade: aria-labels nas redes sociais para leitores de tela -->
                            <a href="https://www.instagram.com/instagram/" class="gs-social-icon" aria-label="Instagram">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                            </a>
                            <a href="https://www.twitter.com" class="gs-social-icon" aria-label="Twitter">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                            </a>
                            <a href="https://www.facebook.com/" class="gs-social-icon" aria-label="Facebook">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="gs-copyright">
                © 2026 ENTOPE VEIA. TODOS OS DIREITOS RESERVADOS. EAT AT YOUR OWN RISK.
            </div>
        </footer>
    `
};


/* ==========================================================================
   3. LÓGICA DE INJEÇÃO (Renderização)
   Garante que os elementos e o CSS entrem na página assim que o DOM carregar.
   ========================================================================== */

// 3.1 Criação e injeção do bloco <style> no <head> da página
const styleElement = document.createElement('style');
styleElement.textContent = footerStyle;
document.head.appendChild(styleElement);

// 3.2 Escuta o evento de carregamento da página para injetar o HTML
document.addEventListener('DOMContentLoaded', () => {
    
    // Injeção do Header Principal
    const headerContainer = document.getElementById('global-header');
    if (headerContainer) {
        headerContainer.innerHTML = components.mainHeader;
    }

    // Injeção do Rodapé em todos os placeholders mapeados
    const footerIds = [
        'global-footer',
        'global-login-footer',
        'global-personalizacao-footer',
        'global-endereco-footer',
        'global-pagamento-footer',
        'global-status-footer',
        'global-avaliacao-footer',
        'global-pontos-footer'
    ];

    footerIds.forEach(id => {
        const container = document.getElementById(id);
        if (container) {
            container.innerHTML = components.standardFooter;
        }
    });

    // Injeção da Sidebar lateral (Lendo a página ativa via data-attribute)
    const sidebarContainer = document.getElementById('global-sidebar');
    if (sidebarContainer) {
        const activePage = sidebarContainer.getAttribute('data-active-page') || '';
        sidebarContainer.innerHTML = components.getSidebar(activePage);

        // Se for a página inicial (cardápio), adiciona classe para ocultar no desktop
        const pathname = window.location.pathname;
        const isIndex = pathname.endsWith('index.html') || pathname.endsWith('/') || pathname === '';
        if (isIndex) {
            sidebarContainer.classList.add('gs-index-sidebar');
        }
    }
});