// Simple script for feature interactions
document.addEventListener('DOMContentLoaded', function() {
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});



    // Enhanced hover effects for solution cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.solution-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add a subtle glow effect
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3), 0 0 20px rgba(142, 17, 205, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset shadow on mouse leave
            this.style.boxShadow = '';
        });
    });
});


 // Simple animation for visual container
document.addEventListener('DOMContentLoaded', function() {
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
});


// Simple animation for partner cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.partner-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
        });
    });
});


        

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.infinite-grid-track');
    if (track) {
        const items = track.querySelectorAll('.feature-item');
        const clone = track.innerHTML;
        track.innerHTML += clone;
    }
});

// Enhanced form submission with all new fields
document.getElementById('event-registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const addressPostcode = document.getElementById('address-postcode').value.trim();
    const propertyStatus = document.getElementById('property-status').value;
    const propertyType = document.getElementById('property-type').value;
    const numberOfBeds = document.getElementById('number-of-beds').value;
    const datePurchased = document.getElementById('date-purchased').value;
    const purchasePrice = document.getElementById('purchase-price').value;
    const outstandingMortgage = document.getElementById('outstanding-mortgage').value;
    const estimatedValue = document.getElementById('estimated-value').value;
    const rentalValue = document.getElementById('rental-value').value;
    const eventDate = document.getElementById('event-date').value;
    const terms = document.getElementById('terms').checked;

    if (!fullName || !email || !phone || !addressPostcode || !propertyStatus || !propertyType || 
        !numberOfBeds || !datePurchased || !purchasePrice || !outstandingMortgage || 
        !estimatedValue || !rentalValue || !eventDate || !terms) {
        alert('Please fill out all required fields and agree to the terms.');
        return;
    }

    // Format the date purchased for better readability
    const dateParts = datePurchased.split('-');
    const formattedDate = dateParts.length === 2 ? `${dateParts[1]}/${dateParts[0]}` : datePurchased;

    // Create comprehensive WhatsApp message with all fields
    const message = `*FBP Property Network Registration*%0A%0A` +
                   `*Personal Details:*%0A` +
                   `Name: ${encodeURIComponent(fullName)}%0A` +
                   `Email: ${encodeURIComponent(email)}%0A` +
                   `Phone: ${encodeURIComponent(phone)}%0A` +
                   `Address/Postcode: ${encodeURIComponent(addressPostcode)}%0A%0A` +
                   `*Property Information:*%0A` +
                   `Ownership Status: ${encodeURIComponent(propertyStatus)}%0A` +
                   `Property Type: ${encodeURIComponent(propertyType)}%0A` +
                   `Number of Bedrooms: ${encodeURIComponent(numberOfBeds)}%0A` +
                   `Date Purchased: ${encodeURIComponent(formattedDate)}%0A%0A` +
                   `*Financial Details:*%0A` +
                   `Purchase Price: £${encodeURIComponent(parseInt(purchasePrice).toLocaleString())}%0A` +
                   `Outstanding Mortgage: £${encodeURIComponent(parseInt(outstandingMortgage).toLocaleString())}%0A` +
                   `Estimated Value: £${encodeURIComponent(parseInt(estimatedValue).toLocaleString())}%0A` +
                   `Estimated Rental Value: £${encodeURIComponent(parseInt(rentalValue).toLocaleString())}/month%0A%0A` +
                   `*Event Selection:*%0A` +
                   `Preferred Date: ${encodeURIComponent(eventDate)}`;
    
    const whatsappUrl = `https://wa.me/+447957730555?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
});



// YouTube IFrame API
let player;
let isPlaying = true;
let isMuted = true;

// Load YouTube IFrame API
function onYouTubeIframeAPIReady() {
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

// Player ready event
function onPlayerReady(event) {
    // Video will autoplay due to autoplay parameter in iframe src
    isPlaying = true;
    isMuted = true;
    updatePlayPauseButton();
    updateMuteButton();
}

// Player state change event
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

// Toggle play/pause
function togglePlayPause() {
    if (player && player.getPlayerState) {
        if (isPlaying) {
            player.pauseVideo();
            isPlaying = false;
        } else {
            player.playVideo();
            isPlaying = true;
        }
        updatePlayPauseButton();
    }
}

// Toggle mute/unmute
function toggleMute() {
    if (player && player.isMuted) {
        if (isMuted) {
            player.unMute();
            isMuted = false;
        } else {
            player.mute();
            isMuted = true;
        }
        updateMuteButton();
    }
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Add event listener to play/pause button
    const playPauseBtn = document.getElementById('playPauseBtn');
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', togglePlayPause);
    }

    // Add event listener to mute button
    const muteBtn = document.getElementById('muteBtn');
    if (muteBtn) {
        muteBtn.addEventListener('click', toggleMute);
    }

    // Form submission handler
    const registrationForm = document.querySelector('.registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(registrationForm);
            const data = Object.fromEntries(formData);
            
            console.log('Form submitted with data:', data);
            
            // Show success message
            alert('Thank you for registering! We will send you the event details via email shortly.');
            
            // Reset form
            registrationForm.reset();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});