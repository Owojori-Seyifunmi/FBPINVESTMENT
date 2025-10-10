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
    
    visualContainer.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    visualContainer.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
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


        
