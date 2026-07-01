const footerStyle = `
/* CSS de Reset para os containers de rodapé padrão para evitar conflito com folhas de estilo locais */
#global-footer, #global-login-footer, #global-personalizacao-footer, #global-endereco-footer, 
#global-pagamento-footer, #global-status-footer, #global-avaliacao-footer, #global-pontos-footer {
    background: transparent !important;
    border: none !important;
    padding: 0 !important;
    margin: 0 !important;
    width: 100% !important;
    box-sizing: border-box !important;
}

.gs-footer-wrapper {
    background-color: #050505 !important;
    border-top: 2px solid #e31b23 !important;
    padding: 40px 5% !important;
    margin-top: 40px !important;
    width: 100% !important;
    box-sizing: border-box !important;
    text-align: left !important;
    color: #888 !important;
}

.gs-footer-content {
    display: flex !important;
    justify-content: space-between !important;
    align-items: flex-start !important;
    flex-wrap: wrap !important;
    gap: 30px !important;
    margin-bottom: 30px !important;
    width: 100% !important;
}

.gs-footer-left, .gs-footer-newsletter, .gs-footer-right-col {
    flex: 1 1 250px !important;
    box-sizing: border-box !important;
}

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

.gs-footer-hours {
    margin-top: 20px !important;
}

.gs-footer-hours h4, .gs-footer-newsletter h4, .gs-footer-right-col h4 {
    font-family: 'Arial', sans-serif !important;
    font-size: 14px !important;
    color: #fff !important;
    text-transform: uppercase !important;
    margin: 0 0 10px 0 !important;
    letter-spacing: 0.5px !important;
}

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

.gs-newsletter-form input:focus {
    border-color: #e31b23 !important;
}

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

.gs-newsletter-form button:hover {
    background-color: #ff4a5a !important;
}

.gs-app-badges-row {
    display: flex !important;
    gap: 12px !important;
    margin-top: 12px !important;
    flex-wrap: wrap !important;
}

.gs-app-badge {
    transition: transform 0.2s !important;
    display: inline-block !important;
}

.gs-app-badge:hover {
    transform: scale(1.05) !important;
}

.gs-footer-socials {
    margin-top: 25px !important;
}

.gs-social-icons-row {
    display: flex !important;
    gap: 15px !important;
    margin-top: 12px !important;
}

.gs-social-icon {
    color: #888 !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: color 0.2s, transform 0.2s !important;
}

.gs-social-icon:hover {
    color: #fff !important;
    transform: translateY(-2px) !important;
}

.gs-copyright {
    font-family: 'Arial', sans-serif !important;
    font-size: 11px !important;
    color: #444 !important;
    border-top: 1px solid #111 !important;
    padding-top: 20px !important;
    text-align: left !important;
    width: 100% !important;
}

@media (max-width: 768px) {
    .gs-footer-content {
        flex-direction: column !important;
        align-items: center !important;
        text-align: center !important;
    }
    .gs-newsletter-form {
        margin: 15px auto 0 auto !important;
    }
    .gs-app-badges-row, .gs-social-icons-row {
        justify-content: center !important;
    }
    .gs-copyright {
        text-align: center !important;
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
`;

const components = {
    // 1. Header principal (index.html)
    mainHeader: `
        <div class="logo"><a href="index.html" style="text-decoration: none; color: inherit;">ENTOPE VEIA</a></div>
        <nav>
            <ul>
                <li><a href="index.html">Menu</a></li>
                <li><a href="pontos.html">Pontos</a></li>
                <li><a href="status.html">Pedidos</a></li>
            </ul>
        </nav>
        <div class="nav-right">
            <input type="text" class="search-bar" placeholder="Procurar algo gorduroso...">
        </div>
    `,

    // 2. Sidebar Lateral (Páginas internas)
    getSidebar(activePage) {
        const menuItems = [
            { 
                id: 'menu', 
                name: 'Menu', 
                icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M3 12h18M3 6h18M3 18h18"/></svg>`, 
                url: 'index.html' 
            },
            { 
                id: 'pedidos', 
                name: 'Pedidos', 
                icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/></svg>`, 
                url: 'status.html' 
            },
            { 
                id: 'pontos', 
                name: 'Pontos', 
                icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`, 
                url: 'pontos.html' 
            },
            { 
                id: 'perfil', 
                name: 'Perfil', 
                icon: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align: middle;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`, 
                url: 'endereco.html' 
            }
        ];

        let menuHtml = '';
        menuItems.forEach(item => {
            const isActive = item.id === activePage ? 'class="active"' : '';
            menuHtml += `<li ${isActive}><a href="${item.url}"><span>${item.icon}</span> ${item.name}</a></li>`;
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

    // 3. Rodapé Padronizado para todas as páginas (Clube do Infarto, Badges de Apps, Social e Funcionamento)
    standardFooter: `
        <div class="gs-footer-wrapper">
            <div class="gs-footer-content">
                <div class="gs-footer-left">
                    <div class="gs-logo">ENTOPE VEIA</div>
                    <p class="gs-desc">Servindo os hambúrgueres mais indulgentes, gordurosos e saborosos desde '99. Coma agora, se arrependa depois.</p>
                    <div class="gs-footer-hours">
                        <h4>Funcionamento 🕒</h4>
                        <p class="gs-desc">Todos os dias, das 18h às 02h</p>
                    </div>
                </div>
                
                <div class="gs-footer-newsletter">
                    <h4>Clube do Infarto 🎟️</h4>
                    <p class="gs-desc">Receba cupons de desconto secretos e novidades ultra-calóricas direto na sua caixa de entrada.</p>
                    <form class="gs-newsletter-form" onsubmit="event.preventDefault(); alert('Inscrição confirmada! Fique de olho no seu e-mail para receber seus cupons.'); this.reset();">
                        <input type="email" placeholder="Seu e-mail..." required>
                        <button type="submit">Quero Cupom</button>
                    </form>
                </div>
                
                <div class="gs-footer-right-col">
                    <div class="gs-footer-app-badges">
                        <h4>Peça pelo Celular 📱</h4>
                        <p class="gs-desc">Baixe nosso app e ganhe entrega grátis no primeiro pedido.</p>
                        <div class="gs-app-badges-row">
                            <a href="#" class="gs-app-badge">
                                <svg width="120" height="36" viewBox="0 0 135 40" style="vertical-align: middle;">
                                    <rect width="135" height="40" rx="6" fill="#111" stroke="#333" stroke-width="1"/>
                                    <text x="12" y="24" fill="#fff" font-family="sans-serif" font-size="11" font-weight="bold">App Store</text>
                                </svg>
                            </a>
                            <a href="#" class="gs-app-badge">
                                <svg width="120" height="36" viewBox="0 0 135 40" style="vertical-align: middle;">
                                    <rect width="135" height="40" rx="6" fill="#111" stroke="#333" stroke-width="1"/>
                                    <text x="12" y="24" fill="#fff" font-family="sans-serif" font-size="11" font-weight="bold">Google Play</text>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    <div class="gs-footer-socials">
                        <h4>Siga a Gente ➔</h4>
                        <div class="gs-social-icons-row">
                            <a href="#" class="gs-social-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                            </a>
                            <a href="#" class="gs-social-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                            </a>
                            <a href="#" class="gs-social-icon">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="gs-copyright">
                © 2026 ENTOPE VEIA. TODOS OS DIREITOS RESERVADOS. EAT AT YOUR OWN RISK.
            </div>
        </div>
    `
};

// Injeta os estilos do rodapé global no head do documento
const styleElement = document.createElement('style');
styleElement.textContent = footerStyle;
document.head.appendChild(styleElement);

// Lógica de injeção automática quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    // 1. Header principal
    const headerContainer = document.getElementById('global-header');
    if (headerContainer) {
        headerContainer.innerHTML = components.mainHeader;
    }

    // 2. Injeção do rodapé padronizado em todos os placeholders de footer
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

    // 3. Sidebar lateral
    const sidebarContainer = document.getElementById('global-sidebar');
    if (sidebarContainer) {
        const activePage = sidebarContainer.getAttribute('data-active-page') || '';
        sidebarContainer.innerHTML = components.getSidebar(activePage);
    }
});
