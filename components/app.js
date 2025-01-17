// Import components
import { renderHeader } from './layout/header.js';
import { renderHero } from './sections/hero.js';
import { renderAbout } from './sections/about.js';
import { renderExperience } from './sections/experience.js';
import { renderSkills } from './sections/skills.js';
import { renderPortfolio } from './sections/portfolio.js';
import { renderContact } from './sections/contact.js';
import { renderFooter } from './layout/footer.js';

console.log('App.js loaded'); // Debug log

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded'); // Debug log
    const app = document.getElementById('app');
    
    // Render components in order
    renderHeader();
    app.appendChild(renderHero());
    app.appendChild(renderAbout());
    app.appendChild(renderExperience());
    app.appendChild(renderSkills());
    app.appendChild(renderPortfolio());
    app.appendChild(renderContact());
    renderFooter();

    // Initialize all interactive features
    initializeMenuToggle();
    initializeHeaderScroll();
    initializeMouseTracking();
    initializeHexagonGrid();
    initializeSmoothScroll();
});

// Mobile menu toggle
function initializeMenuToggle() {
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('nav ul');
    
    menuButton?.addEventListener('click', () => {
        navMenu?.classList.toggle('active');
    });
}

// Header scroll effect
function initializeHeaderScroll() {
    const header = document.querySelector('header');
    const scrollThreshold = 50;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    });
}

// Mouse tracking for background glow effect
function initializeMouseTracking() {
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        document.body.style.setProperty('--mouse-x', `${x}%`);
        document.body.style.setProperty('--mouse-y', `${y}%`);
    });
}

// Create hexagon grid
function initializeHexagonGrid() {
    function createGrid() {
        const container = document.createElement('div');
        container.className = 'hexagon-grid';
        
        const rows = Math.ceil(window.innerHeight / 100) + 1;
        const cols = Math.ceil(window.innerWidth / 87) + 1;
        
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const hexagon = document.createElement('div');
                hexagon.className = 'hexagon';
                
                // Position hexagons in a grid
                const x = col * 87 - (row % 2) * 43.5;
                const y = row * 75;
                
                hexagon.style.left = `${x}px`;
                hexagon.style.top = `${y}px`;
                
                container.appendChild(hexagon);
            }
        }
        
        document.body.appendChild(container);
    }

    // Initialize and handle resize
    createGrid();
    window.addEventListener('resize', () => {
        const oldGrid = document.querySelector('.hexagon-grid');
        if (oldGrid) oldGrid.remove();
        createGrid();
    });
}

// Initialize smooth scrolling
function initializeSmoothScroll() {
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (link) {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80; // Height of fixed header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
} 