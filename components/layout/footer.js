export function renderFooter() {
    const footer = document.createElement('footer');
    
    footer.innerHTML = `
        <p>&copy; 2024 Vikash Prajapati. All Rights Reserved</p>
    `;

    document.body.appendChild(footer);
} 