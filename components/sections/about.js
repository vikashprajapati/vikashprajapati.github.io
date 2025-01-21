export function renderAbout() {
    const section = document.createElement('section');
    section.id = 'about';
    section.className = 'about';
    
    section.innerHTML = `
        <h2>About Me</h2>
        <p class="about-text">
            Senior Software Engineer with a passion for building scalable and efficient solutions. Currently at Paytm, 
            working on innovative payment solutions and SDK development. Experienced in full-stack development with 
            expertise in Android, React, Node.js, and cloud technologies. Strong focus on code quality, performance 
            optimization, and architectural design. Committed to continuous learning and staying updated with the 
            latest tech trends.
        </p>
    `;

    return section;
} 