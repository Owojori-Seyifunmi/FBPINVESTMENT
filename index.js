// ============================================
// YOUTUBE VIDEO CONTROLS - GLOBAL SCOPE
// ============================================
let player;
let isPlaying = true;
let isMuted = true;

// CRITICAL: YouTube API callback - MUST be in global scope
window.onYouTubeIframeAPIReady = function() {
    const iframe = document.getElementById('heroVideo');
    if (iframe) {
        player = new YT.Player('heroVideo', {
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
}

// Player ready event handler
function onPlayerReady(event) {
    console.log('YouTube player is ready');
    isPlaying = true;
    isMuted = true;
    updatePlayPauseButton();
    updateMuteButton();
}

// Player state change event handler
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        isPlaying = true;
        updatePlayPauseButton();
    } else if (event.data === YT.PlayerState.PAUSED) {
        isPlaying = false;
        updatePlayPauseButton();
    }
}

// Update play/pause button icon
function updatePlayPauseButton() {
    const playPauseBtn = document.getElementById('playPauseBtn');
    if (playPauseBtn) {
        const icon = playPauseBtn.querySelector('i');
        if (icon) {
            if (isPlaying) {
                icon.className = 'fas fa-pause';
                playPauseBtn.setAttribute('aria-label', 'Pause');
            } else {
                icon.className = 'fas fa-play';
                playPauseBtn.setAttribute('aria-label', 'Play');
            }
        }
    }
}

// Update mute button icon
function updateMuteButton() {
    const muteBtn = document.getElementById('muteBtn');
    if (muteBtn) {
        const icon = muteBtn.querySelector('i');
        if (icon) {
            if (isMuted) {
                icon.className = 'fas fa-volume-mute';
                muteBtn.setAttribute('aria-label', 'Unmute');
            } else {
                icon.className = 'fas fa-volume-up';
                muteBtn.setAttribute('aria-label', 'Mute');
            }
        }
    }
}

// Toggle play/pause functionality
function togglePlayPause() {
    if (player && typeof player.getPlayerState === 'function') {
        try {
            if (isPlaying) {
                player.pauseVideo();
            } else {
                player.playVideo();
            }
        } catch (error) {
            console.error('Error toggling play/pause:', error);
        }
    }
}

// Toggle mute/unmute functionality
function toggleMute() {
    if (player && typeof player.isMuted === 'function') {
        try {
            // IMPORTANT: isMuted() is a METHOD that returns boolean
            if (player.isMuted()) {
                player.unMute();
                isMuted = false;
            } else {
                player.mute();
                isMuted = true;
            }
            updateMuteButton();
        } catch (error) {
            console.error('Error toggling mute:', error);
        }
    }
}

// Load YouTube IFrame API immediately (before DOM loads)
(function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
})();

// ============================================
// DOM CONTENT LOADED - ALL OTHER FUNCTIONALITY
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // VIDEO CONTROLS EVENT LISTENERS
    // ============================================
    const playPauseBtn = document.getElementById('playPauseBtn');
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', togglePlayPause);
    }

    const muteBtn = document.getElementById('muteBtn');
    if (muteBtn) {
        muteBtn.addEventListener('click', toggleMute);
    }

    // ============================================
    // FEATURE ITEMS HOVER EFFECTS
    // ============================================
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // ============================================
    // SOLUTION CARDS HOVER EFFECTS
    // ============================================
    const solutionCards = document.querySelectorAll('.solution-card');
    solutionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(142, 17, 205, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });

    // ============================================
    // VISUAL CONTAINER ANIMATION
    // ============================================
    const visualContainer = document.querySelector('.visual-container');
    if (visualContainer) {
        visualContainer.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        visualContainer.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // ============================================
    // PARTNER CARDS HOVER EFFECTS
    // ============================================
    const partnerCards = document.querySelectorAll('.partner-card');
    partnerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
        });
    });

    // ============================================
    // INFINITE GRID TRACK DUPLICATION
    // ============================================
    const track = document.querySelector('.infinite-grid-track');
    if (track) {
        const items = track.querySelectorAll('.feature-item');
        if (items.length > 0) {
            const clone = track.innerHTML;
            track.innerHTML += clone;
        }
    }

    

    // ============================================
    // SMOOTH SCROLLING FOR NAVIGATION
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if exists
                const navToggle = document.querySelector('.nav-toggle');
                const navLinks = document.querySelector('.nav-links');
                if (navToggle && navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // ============================================
    // CONSOLE LOG FOR DEBUGGING
    // ============================================
    console.log('FBP Investments website loaded successfully');
    console.log('YouTube player initialization:', player ? 'Ready' : 'Pending');
});