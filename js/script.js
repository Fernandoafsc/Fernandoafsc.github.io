/* =========================================================
   Fernando Carvalho | Digital Systems - scripts da landing
   ========================================================= */

/* ====== CONFIGURAÇÃO (edite aqui) ====== */
const CONFIG = {
    // Número no formato internacional, só dígitos: 55 + DDD + número
    whatsapp: '5521994101793',
    whatsappMessage: 'Olá! Vim pelo site e gostaria de conversar sobre um projeto.',
    email: 'fernando.aafsc@gmail.com'
};

// Sinaliza que o JS está ativo (habilita as animações de revelação no CSS)
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const nav = document.getElementById('menu-principal');
    const navToggle = document.querySelector('.nav-toggle');
    const backToTop = document.querySelector('.back-to-top');

    /* ---------- Links de WhatsApp ---------- */
    const waUrl = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
    document.querySelectorAll('[data-whatsapp]').forEach(link => {
        link.href = waUrl;
        link.target = '_blank';
        link.rel = 'noopener';
    });

    /* ---------- Header ao rolar + back-to-top ---------- */
    const onScroll = () => {
        const y = window.scrollY;
        header.classList.toggle('scrolled', y > 100);
        if (backToTop) backToTop.classList.toggle('visible', y > 600);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ---------- Menu mobile ---------- */
    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            const open = nav.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', String(open));
            navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
        });
        nav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                nav.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.setAttribute('aria-label', 'Abrir menu');
            });
        });
    }

    /* ---------- Scroll suave para âncoras ---------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#' || id.length < 2) return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    /* ---------- Revelação ao rolar ---------- */
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        reveals.forEach(el => revealObserver.observe(el));
    } else {
        reveals.forEach(el => el.classList.add('is-visible'));
    }

    /* ---------- Contador das estatísticas ---------- */
    const stats = document.querySelectorAll('.stat-number');
    if ('IntersectionObserver' in window && stats.length) {
        const counterObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                animateCounter(entry.target);
                obs.unobserve(entry.target);
            });
        }, { threshold: 0.5 });
        stats.forEach(stat => counterObserver.observe(stat));
    }

    function animateCounter(el) {
        const raw = el.textContent.trim();
        const match = raw.match(/^(\d+)(\D*)$/); // ex.: "10+", "100%", "3"
        if (!match) return;                      // ex.: "24/7" fica como está
        const target = parseInt(match[1], 10);
        const suffix = match[2];
        const duration = 1200;
        const start = performance.now();

        const tick = now => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }

    /* ---------- Link ativo na navegação (scrollspy) ---------- */
    const sections = document.querySelectorAll('main section[id]');
    const navLinks = nav ? nav.querySelectorAll('a[href^="#"]') : [];
    if ('IntersectionObserver' in window && sections.length && navLinks.length) {
        const spy = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
                });
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        sections.forEach(s => spy.observe(s));
    }

    /* ---------- Galerias dos projetos + lightbox ---------- */
    const lightbox = document.getElementById('lightbox');
    let lbItems = [];
    let lbIndex = 0;
    let lbTitle = '';
    let lbReturnFocus = null;

    // Cada galeria vira uma lista de { src, alt, caption } (miniaturas ou telas de celular)
    document.querySelectorAll('.project-gallery').forEach(gallery => {
        const buttons = [...gallery.querySelectorAll('.thumb, .phone-frame')];
        const items = buttons.map(btn => {
            const img = btn.querySelector('img');
            return { src: img.getAttribute('src'), alt: img.alt, caption: btn.dataset.caption || img.alt };
        });
        const title = gallery.dataset.title || '';
        const main = gallery.querySelector('.gallery-main');
        const mainImg = main ? main.querySelector('img') : null;
        let current = 0;

        buttons.forEach((btn, i) => {
            btn.addEventListener('click', () => {
                if (main) {
                    current = i;
                    mainImg.src = items[i].src;
                    mainImg.alt = items[i].alt;
                    buttons.forEach(b => b.classList.toggle('is-active', b === btn));
                } else {
                    openLightbox(items, i, title, btn);
                }
            });
        });
        if (main) main.addEventListener('click', () => openLightbox(items, current, title, main));
    });

    function openLightbox(items, index, title, trigger) {
        if (!lightbox) return;
        lbItems = items;
        lbTitle = title;
        lbReturnFocus = trigger;
        showLightbox(index);
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
        lightbox.querySelector('.lightbox-close').focus();
    }

    function showLightbox(index) {
        lbIndex = (index + lbItems.length) % lbItems.length;
        const item = lbItems[lbIndex];
        const img = lightbox.querySelector('.lightbox-figure img');
        img.src = item.src;
        img.alt = item.alt;
        lightbox.querySelector('.lightbox-title').textContent = lbTitle + ' —';
        lightbox.querySelector('.lightbox-caption').textContent = item.caption;
        lightbox.querySelector('.lightbox-count').textContent = `${lbIndex + 1}/${lbItems.length}`;
        const multiple = lbItems.length > 1;
        lightbox.querySelectorAll('.lightbox-nav').forEach(b => { b.hidden = !multiple; });
    }

    function closeLightbox() {
        lightbox.hidden = true;
        document.body.style.overflow = '';
        if (lbReturnFocus) lbReturnFocus.focus();
    }

    if (lightbox) {
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showLightbox(lbIndex - 1));
        lightbox.querySelector('.lightbox-next').addEventListener('click', () => showLightbox(lbIndex + 1));
        // Clique fora da imagem fecha
        lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
        document.addEventListener('keydown', e => {
            if (lightbox.hidden) return;
            if (e.key === 'Escape') closeLightbox();
            else if (e.key === 'ArrowLeft') showLightbox(lbIndex - 1);
            else if (e.key === 'ArrowRight') showLightbox(lbIndex + 1);
            else if (e.key === 'Tab') {
                // Mantém o foco dentro do lightbox
                const focusables = [...lightbox.querySelectorAll('button:not([hidden])')];
                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
                else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
            }
        });
    }

    /* ---------- Ano no rodapé ---------- */
    const anoEl = document.getElementById('ano-atual');
    if (anoEl) anoEl.textContent = new Date().getFullYear();
});
