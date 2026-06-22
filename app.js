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
// CONFIGURASI MUSIK LATAR
const music = document.getElementById('background-music');
const musicBtn = document.getElementById('music-control');
const musicIcon = document.getElementById('music-icon');

// Fungsi untuk pasang/lepas status putar musik
musicBtn.addEventListener('click', function() {
    if (music.paused) {
        music.play();
        musicIcon.classList.remove('fa-music');
        musicIcon.classList.add('fa-pause'); // Mengubah ikon jadi pause
        musicBtn.classList.add('rotate-animation'); // Efek tombol berputar
    } else {
        music.pause();
        musicIcon.classList.remove('fa-pause');
        musicIcon.classList.add('fa-music'); // Mengubah ikon kembali ke musik
        musicBtn.classList.remove('rotate-animation');
    }
});

// BONUS OTMOTIS: Jika Anda punya tombol "Buka Undangan", 
// Anda bisa memicu musik berputar otomatis begitu tombol tersebut diklik.
// Contoh jalurnya:
const btnBukaUndangan = document.querySelector('.btn-buka-undangan'); // sesuaikan class tombol buka Anda
if(btnBukaUndangan) {
    btnBukaUndangan.addEventListener('click', function() {
        music.play();
        musicIcon.classList.remove('fa-music');
        musicIcon.classList.add('fa-pause');
        musicBtn.classList.add('rotate-animation');
    });
}
