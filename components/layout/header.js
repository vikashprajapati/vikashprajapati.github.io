export function renderHeader() {
    const header = document.createElement('header');
    
    header.innerHTML = `
        <nav>
            <a href="#" class="logo-link">
                <img src="/assets/images/logo.svg" alt="Logo" class="logo-image">
                <span>Portfolio</span>
            </a>
            
            <ul class="nav-links">
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#experience" class="nav-link">Experience</a></li>
                <li><a href="#skills" class="nav-link">Skills</a></li>
                <li><a href="#portfolio" class="nav-link">Portfolio</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>

            <div class="nav-right">
                <a href="#login" class="login-link">Login</a>
                <a href="#contact" class="get-started-btn">Get started</a>
            </div>

            <button class="menu-button" aria-label="Toggle menu">
                <i class="fas fa-bars"></i>
            </button>
        </nav>
    `;

    // Add event listener for mobile menu toggle
    const menuButton = header.querySelector('.menu-button');
    const navLinks = header.querySelector('.nav-links');
    
    menuButton?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
    });

    // Add active class to current section's nav link
    const navLinksArray = header.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function setActiveNavLink() {
        const scrollPosition = window.scrollY + 100; // Offset for header height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinksArray.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveNavLink);
    setActiveNavLink(); // Set initial active state

    // Prepend header to body
    document.body.prepend(header);
} 