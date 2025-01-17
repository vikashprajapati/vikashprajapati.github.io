export function renderHero() {
    const section = document.createElement('section');
    section.className = 'hero';
    
    section.innerHTML = `
        <div class="hero-content">
            <div class="hero-text">
                <h1 class="hero-title">
                    Senior Android Engineer
                    <span class="gradient-text">Specialized in SDK Development</span>
                </h1>
                <p class="hero-subtitle">
                    Crafting high-performance Android solutions with expertise in SDK development, 
                    app optimization, and IoT integration. Reduced ANRs by 70% at Paytm.
                </p>
                <div class="hero-cta">
                    <a href="#contact" class="primary-btn">
                        Get in Touch
                        <i class="fas fa-arrow-right"></i>
                    </a>
                    <a href="#portfolio" class="secondary-btn">
                        View Portfolio
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
                <div class="tech-stack">
                    <div class="tech-badge">
                        <i class="fab fa-android"></i>
                        Android
                    </div>
                    <div class="tech-badge">
                        <i class="devicon-kotlin-plain"></i>
                        Kotlin
                    </div>
                    <div class="tech-badge">
                        <i class="fab fa-java"></i>
                        Java
                    </div>
                </div>
            </div>
            
            <div class="hexagon-container">
                <div class="hexagon-border"></div>
                <div class="hexagon-background"></div>
                <img src="assets/images/profile.jpg" alt="Vikash Prajapati" class="hexagon-image">
            </div>
        </div>
    `;

    return section;
} 