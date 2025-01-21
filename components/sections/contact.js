export function renderContact() {
    const section = document.createElement('section');
    section.id = 'contact';
    section.className = 'contact';
    
    section.innerHTML = `
        <h2>Let's Connect</h2>
        <p class="contact-subtitle">Feel free to reach out for collaborations or just a friendly hello</p>
        <div class="contact-info">
            <div class="info-item">
                <i class="fas fa-envelope"></i>
                <div class="info-item-content">
                    <h3>Email</h3>
                    <p><a href="mailto:vikash.mca18.du@gmail.com">vikash.mca18.du@gmail.com</a></p>
                </div>
            </div>
            <div class="info-item">
                <i class="fas fa-phone"></i>
                <div class="info-item-content">
                    <h3>Phone</h3>
                    <p><a href="tel:+919971248898">+91 9971248898</a></p>
                </div>
            </div>
            <div class="info-item">
                <i class="fas fa-map-marker-alt"></i>
                <div class="info-item-content">
                    <h3>Location</h3>
                    <p>Agra, UP, India</p>
                </div>
            </div>
        </div>
    `;

    // Add mouse move effect for glass morphism
    section.addEventListener('mousemove', (e) => {
        const items = section.querySelectorAll('.info-item');
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / item.offsetWidth) * 100;
            const y = ((e.clientY - rect.top) / item.offsetHeight) * 100;
            item.style.setProperty('--mouse-x', `${x}%`);
            item.style.setProperty('--mouse-y', `${y}%`);
        });
    });

    return section;
} 