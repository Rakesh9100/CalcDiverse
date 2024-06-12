function toRadians(degrees) {
    return (degrees * Math.PI) / 180;
}

function calculateGeodesicDistance() {
    const lat1 = parseFloat(document.getElementById("lat1").value);
    const lon1 = parseFloat(document.getElementById("lon1").value);
    const lat2 = parseFloat(document.getElementById("lat2").value);
    const lon2 = parseFloat(document.getElementById("lon2").value);
    const resultDiv = document.getElementById("result");

    const R = 6371; // Radius of the Earth in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRadians(lat1)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    resultDiv.innerText = `Geodesic Distance: ${distance.toFixed(2)} km`;
}
