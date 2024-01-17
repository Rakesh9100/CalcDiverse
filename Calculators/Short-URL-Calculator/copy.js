let newURL = document.getElementById("shorturl");
let coptButton = document.getElementById("copy");

coptButton.onclick = () => {
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
}