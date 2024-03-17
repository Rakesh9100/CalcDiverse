var radEl = document.getElementById("rad"),
    gradEl = document.getElementById("grad");

radEl.addEventListener("keyup", function (e) {
    var grad = (parseFloat(e.target.value, 10) * 180) / Math.PI;
    gradEl.value = !isNaN(grad) ? grad.toFixed(3) : "";
    gradEl.dispatchEvent(new Event("focusout"));
});

gradEl.addEventListener("keyup", function (e) {
    var rad = (parseFloat(e.target.value, 10) * Math.PI) / 180;
    radEl.value = !isNaN(rad) ? rad.toFixed(4) : "";
    radEl.dispatchEvent(new Event("focusout"));
});
