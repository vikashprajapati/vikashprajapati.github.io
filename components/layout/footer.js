export function renderFooter() {
    const footer = document.createElement('footer');
    
    footer.innerHTML = `
        <p style="text-align: center;">Made with <span class="heart">❤️</span> by Vikash Prajapati</p>
    `;

    document.body.appendChild(footer);
} 