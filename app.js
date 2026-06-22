/**
 * Advanced Front-End Wedding Architecture
 * ES6+ Implementation
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Initialize Animation On Scroll (AOS) Module
    AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
        anchorPlacement: 'top-bottom',
    });

    // 2. Smooth Scroll Controller Engine
    const btnOpenInvitation = document.getElementById("btn-open-invitation");
    const mainContent = document.getElementById("main-content");

    if (btnOpenInvitation && mainContent) {
        btnOpenInvitation.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Native smooth scroll transition API
            mainContent.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    // 3. Optional: Lifecycle optimization handler (Anti Lag-Spike)
    window.addEventListener('load', () => {
        // Refresh AOS position recalculation after all images fully loaded
        AOS.refresh();
    });
});