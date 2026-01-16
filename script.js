// ============================================
// Loading Animation
// ============================================
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const body = document.body;
    
    if (loadingScreen) {
        // ローディング画面を非表示にする
        setTimeout(function() {
            loadingScreen.classList.add('hidden');
            body.classList.remove('loading');
            
            // アニメーション完了後にDOMから削除
            setTimeout(function() {
                loadingScreen.remove();
            }, 500);
        }, 1500); // 1.5秒後に非表示
    }
});

// ============================================
// Smooth Scroll for Navigation Links
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // ローディング中はbodyにloadingクラスを追加
    document.body.classList.add('loading');
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ============================================
    // Header Background Change on Scroll
    // ============================================
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ============================================
    // IntersectionObserver for Fade-in Animation
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    };

    const fadeInObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                // 一度表示されたら監視を停止（パフォーマンス向上）
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // アニメーション対象要素を監視
    const animatedElements = document.querySelectorAll(`
        .enjoy-title,
        .enjoy-description,
        .food-item,
        .renewal-section,
        .news-section,
        .news-item,
        .section-title-black,
        .section-title-white,
        .about-main-text,
        .about-description,
        .about-image-container,
        .location-item,
        .menu-category-title,
        .menu-description,
        .menu-item,
        .drink-category-wrapper,
        .contact-content
    `);

    animatedElements.forEach(element => {
        fadeInObserver.observe(element);
    });

    // Heroセクションは即座に表示（アニメーション不要）
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }

});
