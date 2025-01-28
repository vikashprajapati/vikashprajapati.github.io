export function renderHero() {
    const section = document.createElement('section');
    section.className = 'hero';
    
    section.innerHTML = `
        <div class="hero-content">
            <div class="hero-text">
                <h1 class="hero-title">
                    Senior Software Engineer
                    <span class="gradient-text">Android Developer</span>
                </h1>
                <p class="hero-subtitle">
                    Passionate about crafting exceptional Android applications with expertise in Kotlin, Java, and modern Android development practices. 
                    Currently building innovative payment solutions at Paytm.
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
                        <i class="fab fa-kotlin"></i>
                        Kotlin
                    </div>
                    <div class="tech-badge">
                        <i class="fab fa-java"></i>
                        Java
                    </div>
                    <div class="tech-badge">
                        <i class="fas fa-mobile-alt"></i>
                        Mobile Apps
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