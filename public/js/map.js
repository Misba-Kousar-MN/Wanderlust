
    const map = L.map('map').setView([19.0760, 72.8777], 10);

   
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const marker = L.marker([19.0760, 72.8777]).addTo(map);

    /* // Popup on marker
    marker.bindPopup("<b>Hello!</b><br>This is Mumbai.").openPopup(); */
