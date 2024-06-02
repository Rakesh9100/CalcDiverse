function fetchAndDisplay() {
    const funcInput = document.getElementById("funcInput").value;
    const appId = "L29AXW-2YYYJKG78H";
    const query = `inverse function of ${encodeURIComponent(funcInput)}`;
    const url = `http://api.wolframalpha.com/v1/simple?appid=${appId}&i=${query}`;
    var imageUrl = url; // Replace this with your image URL
    var imageContainer = document.getElementById("imageContainer");
    var img = new Image();

    img.onload = function () {
        imageContainer.innerHTML = ""; // Clear previous content
        imageContainer.appendChild(img);
    };

    img.onerror = function () {
        imageContainer.textContent = "Failed to load image";
    };

    img.src = imageUrl;
}
