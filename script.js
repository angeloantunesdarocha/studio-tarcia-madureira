/* ============================================
   STUDIO TARCIA MADUREIRA
   JavaScript mínimo: reveal, menu, ano, status
   ============================================ */

(function () {
    'use strict';

    /* ===== 1. SCROLL REVEAL ===== */
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
        );
        reveals.forEach((el) => io.observe(el));
    } else {
        reveals.forEach((el) => el.classList.add('visible'));
    }

    /* ===== 2. HEADER SCROLLED ===== */
    const topbar = document.getElementById('topbar');
    let ticking = false;
    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    topbar.classList.add('scrolled');
                } else {
                    topbar.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ===== 3. MOBILE MENU ===== */
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            menuToggle.classList.toggle('active', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        navMenu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('open')) {
                    navMenu.classList.remove('open');
                    menuToggle.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.setAttribute('aria-label', 'Abrir menu');
                    document.body.style.overflow = '';
                }
            });
        });
    }

    /* ===== 4. ANO DINÂMICO NO FOOTER ===== */
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }

    /* ===== 5. STATUS ABERTO/FECHADO ===== */
    const statusIndicator = document.getElementById('statusIndicator');
    const statusText = document.getElementById('statusText');
    if (statusIndicator && statusText) {
        const now = new Date();
        const day = now.getDay(); // 0=dom, 1=seg, 2=ter, 3=qua, 4=qui, 5=sex, 6=sab
        const minutes = now.getHours() * 60 + now.getMinutes();

        let isOpen = false;
        let label = '';

        if (day === 0) {
            isOpen = false;
            label = 'Fechado agora · Abre segunda às 08h';
        } else if (day >= 1 && day <= 4) {
            // Seg a Qui: 08h-20h
            isOpen = minutes >= 8 * 60 && minutes < 20 * 60;
            label = isOpen ? 'Aberto agora · Fecha às 20h' : (minutes < 8 * 60 ? 'Fechado · Abre às 08h' : 'Fechado · Abre amanhã às 08h');
        } else if (day === 5) {
            // Sex: 09h-19h
            isOpen = minutes >= 9 * 60 && minutes < 19 * 60;
            label = isOpen ? 'Aberto agora · Fecha às 19h' : (minutes < 9 * 60 ? 'Fechado · Abre às 09h' : 'Fechado · Abre amanhã às 08h');
        } else if (day === 6) {
            // Sáb: 09h-16h
            isOpen = minutes >= 9 * 60 && minutes < 16 * 60;
            label = isOpen ? 'Aberto agora · Fecha às 16h' : (minutes < 9 * 60 ? 'Fechado · Abre às 09h' : 'Fechado · Abre segunda às 08h');
        }

        statusText.textContent = label;
        statusIndicator.classList.add(isOpen ? 'aberto' : 'fechado');
    }
})();
