// script.js
document.getElementById('clickBtn').addEventListener('click', function() {
    console.log('Dugme je kliknuto!');
    // Ovo šalje događaj u Google Analytics
    gtag('event', 'click', {
        'event_category': 'Dugme',
        'event_label': 'Klik na dugme',
        'value': 1
    });
});
