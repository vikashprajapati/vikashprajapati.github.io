export function renderHeader() {
    const header = document.createElement('header');
    
    header.innerHTML = `
        <nav>
            <a href="#" class="logo-link">
                <h3>Vikash Prajapati</h3>
            </a>
            <div class="nav-links">
                <a href="#about" class="nav-link">About</a>
                <a href="#experience" class="nav-link">Experience</a>
                <a href="#skills" class="nav-link">Skills</a>
                <a href="#portfolio" class="nav-link">Portfolio</a>
                <a href="#contact" class="nav-link">Contact</a>
                <a href="#contact" class="get-started-btn">Get in Touch</a>
            </div>
        </nav>
    `;

    // Prepend header to body
    document.body.prepend(header);
} 