/**
 * VisionAI - Intelligent Automation Solutions
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initAnimations();
    initCookieConsent();
    initChatWidget();
});

/**
 * Navbar scroll effect
 */
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    
    // Add scrolled class to navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Trigger scroll event on page load to set initial state
    window.dispatchEvent(new Event('scroll'));
    
    // Close mobile menu when clicking nav links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                document.querySelector('.navbar-toggler').click();
            }
        });
    });
}

/**
 * Initialize GSAP animations
 */
function initAnimations() {
    // Only initialize if GSAP is available
    if (typeof gsap === 'undefined') return;
    
    // Hero section animations
    gsap.from('.hero-title', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2
    });
    
    gsap.from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.4
    });
    
    gsap.from('.hero-buttons', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.6
    });
    
    gsap.from('.floating-stats .stat-card', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.8
    });
    
    // Animate elements on scroll
    if (typeof ScrollTrigger !== 'undefined') {
        // Section headers
        gsap.utils.toArray('.section-header').forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 85%"
                },
                y: 50,
                opacity: 0,
                duration: 1
            });
        });
        
        // Benefit cards
        gsap.utils.toArray('.benefit-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1
            });
        });
        
        // Solution cards
        gsap.utils.toArray('.solution-card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%"
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1
            });
        });
    }
}

/**
 * Initialize cookie consent banner
 */
function initCookieConsent() {
    const cookieConsent = document.querySelector('.cookie-consent');
    if (!cookieConsent) return;
    
    const acceptButton = cookieConsent.querySelector('.btn-primary');
    const settingsButton = cookieConsent.querySelector('.btn-light');
    
    // Check if user has already accepted cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        // Show the cookie consent after a delay
        setTimeout(() => {
            cookieConsent.classList.add('show');
        }, 2000);
    }
    
    // Handle accept button click
    acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieConsent.classList.remove('show');
    });
    
    // Handle settings button click
    settingsButton.addEventListener('click', function() {
        // Implement cookie settings logic here
        console.log('Cookie settings clicked');
        // For now, just hide the banner
        cookieConsent.classList.remove('show');
    });
}

/**
 * Initialize chat widget functionality
 */
function initChatWidget() {
    const chatToggle = document.querySelector('.chat-toggle');
    if (!chatToggle) return;
    
    chatToggle.addEventListener('click', function() {
        // Here you would typically toggle your chat widget UI
        // For this demo, we'll just log a message
        console.log('Chat widget clicked - would open chat interface');
        
        // Remove notification badge when chat is opened
        const badge = chatToggle.querySelector('.chat-badge');
        if (badge) {
            badge.style.display = 'none';
        }
    });
}