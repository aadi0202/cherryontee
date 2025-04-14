document.addEventListener('DOMContentLoaded', () => {
    const comingSoon = document.querySelector('.coming-soon');
    
    // Add a hover effect
    comingSoon.addEventListener('mouseenter', () => {
        comingSoon.style.animation = 'none';
        comingSoon.style.transform = 'scale(1.1)';
    });
    
    comingSoon.addEventListener('mouseleave', () => {
        comingSoon.style.animation = 'pulse 2s infinite';
        comingSoon.style.transform = 'scale(1)';
    });
    
    // Add a subtle color change effect
    const colors = ['#ff4d6d', '#ff758f', '#ff8fa3'];
    let colorIndex = 0;
    
    setInterval(() => {
        comingSoon.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 2000);
}); 