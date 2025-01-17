export function renderPortfolio() {
    const section = document.createElement('section');
    section.id = 'portfolio';
    section.className = 'portfolio';
    
    section.innerHTML = `
        <h2>Notable Projects</h2>
        <p class="portfolio-subtitle">A showcase of my best work and contributions</p>
        <div class="portfolio-grid">
            <div class="portfolio-item">
                <img src="https://picsum.photos/600/400?random=1" alt="Project 1" class="portfolio-image">
                <div class="portfolio-content">
                    <h3 class="portfolio-title">SMS SDK Development</h3>
                    <p class="portfolio-description">Architected and maintained a critical SMS SDK with 80% test coverage, improving message delivery reliability.</p>
                    <div class="portfolio-tags">
                        <span class="portfolio-tag">Android</span>
                        <span class="portfolio-tag">Kotlin</span>
                        <span class="portfolio-tag">SDK</span>
                    </div>
                    <div class="portfolio-links">
                        <a href="#" class="portfolio-link">
                            <i class="fab fa-github"></i>
                            View Code
                        </a>
                        <a href="#" class="portfolio-link">
                            <i class="fas fa-external-link-alt"></i>
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>

            <div class="portfolio-item">
                <img src="https://picsum.photos/600/400?random=2" alt="Project 2" class="portfolio-image">
                <div class="portfolio-content">
                    <h3 class="portfolio-title">Aircraft Management System</h3>
                    <p class="portfolio-description">Built a comprehensive Android solution for aircraft/hangar management with real-time video capabilities.</p>
                    <div class="portfolio-tags">
                        <span class="portfolio-tag">Android</span>
                        <span class="portfolio-tag">WebRTC</span>
                        <span class="portfolio-tag">IoT</span>
                    </div>
                    <div class="portfolio-links">
                        <a href="#" class="portfolio-link">
                            <i class="fab fa-github"></i>
                            View Code
                        </a>
                        <a href="#" class="portfolio-link">
                            <i class="fas fa-external-link-alt"></i>
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>

            <div class="portfolio-item">
                <img src="https://picsum.photos/600/400?random=3" alt="Project 3" class="portfolio-image">
                <div class="portfolio-content">
                    <h3 class="portfolio-title">Performance Optimization</h3>
                    <p class="portfolio-description">Reduced ANRs by 70% and improved app launch time by 30% through systematic performance analysis.</p>
                    <div class="portfolio-tags">
                        <span class="portfolio-tag">Android</span>
                        <span class="portfolio-tag">Performance</span>
                        <span class="portfolio-tag">Optimization</span>
                    </div>
                    <div class="portfolio-links">
                        <a href="#" class="portfolio-link">
                            <i class="fab fa-github"></i>
                            View Code
                        </a>
                        <a href="#" class="portfolio-link">
                            <i class="fas fa-external-link-alt"></i>
                            Live Demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    return section;
} 