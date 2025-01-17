export function renderSkills() {
    const section = document.createElement('section');
    section.id = 'skills';
    section.className = 'skills';
    
    section.innerHTML = `
        <h2>My Skills</h2>
        <p class="skills-subtitle">with hundreds of tools</p>
        <div class="skills-grid">
            <div class="skill-item">
                <i class="fab fa-python"></i>
                <span>Python</span>
            </div>
            <div class="skill-item">
                <i class="fab fa-android"></i>
                <span>Android</span>
            </div>
            <div class="skill-item">
                <i class="fab fa-java"></i>
                <span>Java</span>
            </div>
            <div class="skill-item">
                <i class="fab fa-js"></i>
                <span>JavaScript</span>
            </div>
            <div class="skill-item">
                <i class="fab fa-react"></i>
                <span>React</span>
            </div>
            <div class="skill-item">
                <i class="fab fa-node-js"></i>
                <span>Node.js</span>
            </div>
            <div class="skill-item">
                <i class="devicon-cplusplus-plain"></i>
                <span>C++</span>
            </div>
            <div class="skill-item">
                <i class="fab fa-aws"></i>
                <span>AWS</span>
            </div>
        </div>
    `;

    return section;
} 