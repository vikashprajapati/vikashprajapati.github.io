export function renderExperience() {
    const section = document.createElement('section');
    section.id = 'experience';
    section.className = 'experience';
    
    section.innerHTML = `
        <h2>Experience</h2>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-icon">
                    <i class="fas fa-code"></i>
                </div>
                <div class="timeline-content">
                    <h3>Senior Software Engineer</h3>
                    <span class="time">2022 - Present</span>
                    <p class="company">Paytm</p>
                    <p>• Architected and maintained critical SMS SDK with 80% test coverage</p>
                    <p>• Reduced background ANRs by 70% through systematic performance analysis</p>
                    <p>• Improved app launch time by 30% via startup optimization</p>
                    <p>• Enhanced network efficiency by 10% through connection pool optimization</p>
                </div>
            </div>

            <div class="timeline-item">
                <div class="timeline-icon">
                    <i class="fas fa-mobile-alt"></i>
                </div>
                <div class="timeline-content">
                    <h3>Software Engineer</h3>
                    <span class="time">2021 - 2022</span>
                    <p class="company">Truminds Software Systems</p>
                    <p>• Architected complete Android solution for aircraft/hangar management</p>
                    <p>• Built RTSP client with two-way audio support</p>
                    <p>• Integrated WebRTC for real-time video communication</p>
                </div>
            </div>
        </div>
    `;

    return section;
} 