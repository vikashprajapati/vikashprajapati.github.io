export function renderContact() {
    const section = document.createElement('section');
    section.id = 'contact';
    section.className = 'contact';
    
    section.innerHTML = `
        <h2>Contact Me</h2>
        <div class="contact-info">
            <div class="info-item">
                <i class="fas fa-envelope"></i>
                <p><a href="mailto:vikash.mca18.du@gmail.com">vikash.mca18.du@gmail.com</a></p>
            </div>
            <div class="info-item">
                <i class="fas fa-phone"></i>
                <p>+91 9971248898</p>
            </div>
            <div class="info-item">
                <i class="fas fa-map-marker-alt"></i>
                <p>Agra, UP, India</p>
            </div>
        </div>
    `;

    return section;
} 