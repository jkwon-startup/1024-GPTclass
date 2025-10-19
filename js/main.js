// Main JavaScript for Slide Presentation
// Handles slide navigation, interactions, and animations

class SlidePresentation {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.slide');
        this.totalSlides = this.slides.length;
        this.isTransitioning = false;
        this.touchStartY = 0;
        this.touchEndY = 0;

        this.init();
    }

    init() {
        this.updateSlideCounter();
        this.updateProgressBar();
        this.setupEventListeners();
        this.setupNavigation();
        this.showSlide(0);

        // Prevent default scroll behavior
        document.body.style.overflow = 'hidden';

        console.log('GPT 강의 슬라이드 프레젠테이션 시작');
    }

    setupEventListeners() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));

        // Mouse wheel navigation
        let wheelTimeout;
        document.addEventListener('wheel', (e) => {
            clearTimeout(wheelTimeout);
            wheelTimeout = setTimeout(() => {
                if (!this.isTransitioning) {
                    if (e.deltaY > 0) {
                        this.nextSlide();
                    } else {
                        this.prevSlide();
                    }
                }
            }, 100);
        }, { passive: true });

        // Touch navigation for mobile
        document.addEventListener('touchstart', (e) => {
            this.touchStartY = e.touches[0].clientY;
        }, { passive: true });

        document.addEventListener('touchend', (e) => {
            this.touchEndY = e.changedTouches[0].clientY;
            this.handleSwipe();
        }, { passive: true });

        // Button controls
        const prevBtn = document.querySelector('.control-btn.prev');
        const nextBtn = document.querySelector('.control-btn.next');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevSlide());
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextSlide());
        }

        // Window resize
        window.addEventListener('resize', () => this.handleResize());
    }

    setupNavigation() {
        // Navigation menu click handlers
        const navLinks = document.querySelectorAll('.nav-menu a');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const slideIndex = parseInt(link.getAttribute('data-slide'));
                this.goToSlide(slideIndex);
            });
        });
    }

    handleKeyPress(e) {
        if (this.isTransitioning) return;

        switch(e.key) {
            case 'ArrowRight':
            case 'ArrowDown':
            case ' ':
            case 'PageDown':
                e.preventDefault();
                this.nextSlide();
                break;
            case 'ArrowLeft':
            case 'ArrowUp':
            case 'PageUp':
                e.preventDefault();
                this.prevSlide();
                break;
            case 'Home':
                e.preventDefault();
                this.goToSlide(0);
                break;
            case 'End':
                e.preventDefault();
                this.goToSlide(this.totalSlides - 1);
                break;
        }
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.touchStartY - this.touchEndY;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe up - next slide
                this.nextSlide();
            } else {
                // Swipe down - previous slide
                this.prevSlide();
            }
        }
    }

    handleResize() {
        // Handle responsive adjustments if needed
        this.updateProgressBar();
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    prevSlide() {
        if (this.currentSlide > 0) {
            this.goToSlide(this.currentSlide - 1);
        }
    }

    goToSlide(index) {
        if (index === this.currentSlide || this.isTransitioning) return;
        if (index < 0 || index >= this.totalSlides) return;

        this.isTransitioning = true;

        // Remove active class from current slide
        this.slides[this.currentSlide].classList.remove('active');

        // Update current slide
        this.currentSlide = index;

        // Add active class to new slide
        this.slides[this.currentSlide].classList.add('active');

        // Update UI
        this.updateSlideCounter();
        this.updateProgressBar();
        this.updateActiveNavigation();

        // Scroll to slide smoothly
        const targetSlide = this.slides[this.currentSlide];
        targetSlide.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Reset transition flag after animation
        setTimeout(() => {
            this.isTransitioning = false;
        }, 800);
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    updateSlideCounter() {
        const currentSlideElement = document.querySelector('.current-slide');
        const totalSlidesElement = document.querySelector('.total-slides');

        if (currentSlideElement) {
            currentSlideElement.textContent = this.currentSlide + 1;
        }

        if (totalSlidesElement) {
            totalSlidesElement.textContent = this.totalSlides;
        }
    }

    updateProgressBar() {
        const progressFill = document.querySelector('.progress-fill');

        if (progressFill) {
            const progress = ((this.currentSlide + 1) / this.totalSlides) * 100;
            progressFill.style.width = `${progress}%`;
        }
    }

    updateActiveNavigation() {
        const navLinks = document.querySelectorAll('.nav-menu a');

        navLinks.forEach(link => {
            const slideIndex = parseInt(link.getAttribute('data-slide'));

            if (slideIndex === this.currentSlide) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// Smooth scroll behavior for anchor links (for detail pages)
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');

                // Skip if it's a slide navigation link
                if (link.hasAttribute('data-slide')) {
                    return;
                }

                const target = document.querySelector(href);

                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Intersection Observer for scroll animations
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);

        // Observe elements with animation classes
        const animatedElements = document.querySelectorAll('.info-card, .overview-card, .content-section');

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Utility: Add fade-in class to CSS
const fadeInStyle = document.createElement('style');
fadeInStyle.textContent = `
    .fade-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
`;
document.head.appendChild(fadeInStyle);

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize slide presentation
    const presentation = new SlidePresentation();

    // Initialize smooth scroll
    const smoothScroll = new SmoothScroll();

    // Initialize scroll animations
    const scrollAnimations = new ScrollAnimations();

    // Performance optimization: Preload next slide images
    const preloadNextSlide = () => {
        if (presentation.currentSlide < presentation.totalSlides - 1) {
            const nextSlide = presentation.slides[presentation.currentSlide + 1];
            const images = nextSlide.querySelectorAll('img');

            images.forEach(img => {
                if (!img.complete) {
                    const newImg = new Image();
                    newImg.src = img.src;
                }
            });
        }
    };

    // Preload on slide change
    document.addEventListener('keydown', preloadNextSlide);
});

// Easter egg: Konami code for fun effect
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);

    if (konamiCode.length > konamiPattern.length) {
        konamiCode.shift();
    }

    if (konamiCode.join(',') === konamiPattern.join(',')) {
        console.log('🎉 Easter Egg Activated! You found the secret!');
        document.body.style.animation = 'rainbow 2s infinite';

        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(rainbowStyle);

        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SlidePresentation, SmoothScroll, ScrollAnimations };
}
