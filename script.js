document.getElementById('generate-btn').addEventListener('click', function() {
    var title = document.getElementById('tour-title').value;
    var subtitle = document.getElementById('tour-subtitle').value;
    var imageUrl = document.getElementById('image-url').value;
    var bookingUrl = document.getElementById('booking-url').value;
    
    var embedCode = `
        <div class="tour-widget">
            <img src="${imageUrl}" alt="Tour Image">
            <h2>${title}</h2>
            <p>${subtitle}</p>
            <a href="${bookingUrl}" target="_blank">Book Now</a>
        </div>
    `;
    
    document.getElementById('embed-preview').innerHTML = embedCode;
    document.getElementById('embed-code').textContent = embedCode;
});

document.getElementById('edit-btn').addEventListener('click', function() {
    var codeToEdit = document.getElementById('code-to-edit').value;
    document.getElementById('embed-preview').innerHTML = codeToEdit;
    document.getElementById('embed-code').textContent = codeToEdit;
});
