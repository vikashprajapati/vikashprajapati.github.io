export function renderPortfolio() {
    const section = document.createElement('section');
    section.id = 'portfolio';
    section.className = 'portfolio';
    
    section.innerHTML = `
        <h2>Notable Projects</h2>
        <p class="portfolio-subtitle">A showcase of my best work and contributions</p>
        <div class="portfolio-grid">

            <div class="portfolio-item">
                <img src="./assets/images/theatreapp.png" alt="TheatreApp" class="portfolio-image">
                <div class="portfolio-content">
                    <h3 class="portfolio-title">Syncr Theatre App</h3>
                    <p class="portfolio-description">An Android app for synchronized video playback across multiple devices, enabling theatre-like experience with group chat functionality. Perfect for watching movies with friends using multiple smartphones for enhanced audio.</p>
                    <div class="portfolio-tags">
                        <span class="portfolio-tag">Kotlin</span>
                        <span class="portfolio-tag">Android</span>
                        <span class="portfolio-tag">Socket.io</span>
                        <span class="portfolio-tag">MVVM</span>
                    </div>
                    <div class="portfolio-links">
                        <a href="https://github.com/vikashprajapati/TheatreApp" class="portfolio-link" target="_blank">
                            <i class="fab fa-github"></i>
                            View Code
                        </a>
                    </div>
                </div>
            </div>

            <div class="portfolio-item">
                <img src="./assets/images/YoutubeSummariser.png" alt="YouTube Video Summarizer Chrome Extension" class="portfolio-image">
                <div class="portfolio-content">
                    <h3 class="portfolio-title">YouTube Video Summarizer</h3>
                    <p class="portfolio-description">A Chrome extension powered by Gemini AI that provides instant AI-powered summaries of YouTube videos while you watch. Features automatic transcript extraction, privacy-focused processing, and YouTube-style UI integration.</p>
                    <div class="portfolio-tags">
                        <span class="portfolio-tag">JavaScript</span>
                        <span class="portfolio-tag">Chrome Extension</span>
                        <span class="portfolio-tag">Gemini AI</span>
                        <span class="portfolio-tag">API</span>
                    </div>
                    <div class="portfolio-links">
                        <a href="https://github.com/vikashprajapati/Youtube-Summarizer" class="portfolio-link" target="_blank">
                            <i class="fab fa-github"></i>
                            View Code
                        </a>
                        <a href="https://github.com/vikashprajapati/Youtube-Summarizer/releases/tag/v1.0.0" class="portfolio-link">
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