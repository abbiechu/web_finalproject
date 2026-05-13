/* ============================================
   EcoPulse - Navbar Component
   Branch: main (shared)
   ============================================ */

/**
 * 注入導覽列 HTML 並初始化互動行為
 * 在每個頁面 <body> 開頭呼叫 Navbar.init()
 */
const Navbar = (() => {

  const LINKS = [
    { href: '../index.html',         label: '首頁',     key: 'home' },
    { href: '../pages/about.html',   label: '關於我們', key: 'about' },
    { href: '../pages/issues.html',  label: '問題區',   key: 'issues' },
    { href: '../pages/quiz.html',    label: '環保測驗', key: 'quiz' },
  ];

  // index.html 用不同的相對路徑
  const ROOT_LINKS = [
    { href: 'index.html',         label: '首頁',     key: 'home' },
    { href: 'pages/about.html',   label: '關於我們', key: 'about' },
    { href: 'pages/issues.html',  label: '問題區',   key: 'issues' },
    { href: 'pages/quiz.html',    label: '環保測驗', key: 'quiz' },
  ];

  function buildHTML(links, activePage) {
    const items = links.map(l => `
      <li>
        <a href="${l.href}" class="nav-link ${l.key === activePage ? 'active' : ''}">${l.label}</a>
      </li>
    `).join('');

    return `
      <nav class="navbar" id="navbar">
        <div class="nav-inner container">
          <a href="${links[0].href}" class="nav-brand">
            <span class="nav-logo">🌿</span>
            <span>EcoPulse</span>
          </a>
          <ul class="nav-menu" id="navMenu">${items}</ul>
          <button class="nav-toggle" id="navToggle" aria-label="開啟選單">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    `;
  }

  function buildCSS() {
    return `
      <style>
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 900;
          height: var(--nav-h);
          background: rgba(245, 242, 234, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--clr-border);
          transition: box-shadow var(--t-normal);
        }
        .navbar.scrolled { box-shadow: var(--shadow-md); }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }
        .nav-brand {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--ff-display);
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--clr-primary);
          letter-spacing: -0.01em;
        }
        .nav-logo { font-size: 1.4rem; }
        .nav-menu {
          display: flex;
          align-items: center;
          gap: var(--sp-xl);
        }
        .nav-link {
          font-weight: 500;
          font-size: 0.92rem;
          color: var(--clr-muted);
          position: relative;
          padding-bottom: 3px;
          transition: color var(--t-fast);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 2px;
          background: var(--clr-primary);
          transition: width var(--t-normal);
          border-radius: 2px;
        }
        .nav-link:hover,
        .nav-link.active { color: var(--clr-primary); }
        .nav-link:hover::after,
        .nav-link.active::after { width: 100%; }
        .nav-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          padding: 4px;
        }
        .nav-toggle span {
          display: block;
          width: 22px; height: 2px;
          background: var(--clr-primary);
          border-radius: 2px;
          transition: transform var(--t-normal), opacity var(--t-normal);
        }
        /* Mobile */
        @media (max-width: 768px) {
          .nav-toggle { display: flex; }
          .nav-menu {
            display: none;
            position: absolute;
            top: var(--nav-h);
            left: 0; right: 0;
            flex-direction: column;
            gap: 0;
            background: var(--clr-surface);
            border-bottom: 1px solid var(--clr-border);
            box-shadow: var(--shadow-md);
            padding: var(--sp-md) 0;
          }
          .nav-menu.open { display: flex; }
          .nav-menu li { width: 100%; }
          .nav-link {
            display: block;
            padding: 0.75rem 1.5rem;
          }
          .nav-link::after { display: none; }
        }
      </style>
    `;
  }

  function init(activePage = 'home', isRoot = false) {
    const links = isRoot ? ROOT_LINKS : LINKS;

    // 注入 CSS
    document.head.insertAdjacentHTML('beforeend', buildCSS());

    // 注入 HTML
    document.body.insertAdjacentHTML('afterbegin', buildHTML(links, activePage));

    // 加 body padding 避免被 navbar 蓋住
    document.body.style.paddingTop = 'var(--nav-h)';

    // 滾動效果
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });

    // 漢堡選單
    const toggle = document.getElementById('navToggle');
    const menu   = document.getElementById('navMenu');
    toggle.addEventListener('click', () => menu.classList.toggle('open'));

    // 點連結後關閉選單（手機）
    menu.querySelectorAll('.nav-link').forEach(a =>
      a.addEventListener('click', () => menu.classList.remove('open'))
    );
  }

  return { init };
})();
