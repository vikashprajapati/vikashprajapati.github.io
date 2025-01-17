export function renderAbout() {
    const section = document.createElement('section');
    section.id = 'about';
    section.className = 'about';
    
    section.innerHTML = `
        <h2>About Me</h2>
        <p class="about-text">
            Results-driven Senior Android Engineer with 3+ years of expertise in SDK development and app optimization. 
            Reduced ANRs by 70% and improved launch times by 30% at Paytm. Specialized in building scalable Android 
            libraries, IoT solutions, and video streaming applications. Strong track record in architectural design 
            and performance optimization.
        </p>
    `;

    return section;
} 