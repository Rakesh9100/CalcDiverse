function calculateCrossProduct() {
    var vector1 = [
        parseFloat(document.getElementById("vector1i").value),
        parseFloat(document.getElementById("vector1j").value),
        parseFloat(document.getElementById("vector1k").value)
    ];
    var vector2 = [
        parseFloat(document.getElementById("vector2i").value),
        parseFloat(document.getElementById("vector2j").value),
        parseFloat(document.getElementById("vector2k").value)
    ];

    var crossResult = crossProduct(vector1, vector2);
    var angle = angleBetweenVectors(vector1, vector2);

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Cross Product: " + crossResult.join(", ") + "<br>";
    resultDiv.innerHTML += "Angle Between Vectors: " + angle.toFixed(2) + " degrees";
}

function crossProduct(vector1, vector2) {
    var crossResult = [
        vector1[1] * vector2[2] - vector1[2] * vector2[1],
        vector1[2] * vector2[0] - vector1[0] * vector2[2],
        vector1[0] * vector2[1] - vector1[1] * vector2[0]
    ];
    return crossResult;
}

function angleBetweenVectors(vector1, vector2) {
    var dotProduct = vector1[0] * vector2[0] + vector1[1] * vector2[1] + vector1[2] * vector2[2];
    var magnitude1 = Math.sqrt(vector1[0] ** 2 + vector1[1] ** 2 + vector1[2] ** 2);
    var magnitude2 = Math.sqrt(vector2[0] ** 2 + vector2[1] ** 2 + vector2[2] ** 2);
    var cosTheta = dotProduct / (magnitude1 * magnitude2);
    var angleInRadians = Math.acos(cosTheta);
    var angleInDegrees = angleInRadians * (180 / Math.PI);
    return angleInDegrees;
}

function calculateCrossProduct() {
    var vector1i = parseFloat(document.getElementById("vector1i").value);
    var vector1j = parseFloat(document.getElementById("vector1j").value);
    var vector1k = parseFloat(document.getElementById("vector1k").value);
    var vector2i = parseFloat(document.getElementById("vector2i").value);
    var vector2j = parseFloat(document.getElementById("vector2j").value);
    var vector2k = parseFloat(document.getElementById("vector2k").value);

    if (isNaN(vector1i) || isNaN(vector1j) || isNaN(vector1k) || isNaN(vector2i) || isNaN(vector2j) || isNaN(vector2k)) {
        alert("Please input values for all components of both vectors.");
        return;
    }

    var vector1 = [vector1i, vector1j, vector1k];
    var vector2 = [vector2i, vector2j, vector2k];

    var crossResult = crossProduct(vector1, vector2);
    var angle = angleBetweenVectors(vector1, vector2);

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "Cross Product: " + crossResult.join(", ") + "<br>";
    resultDiv.innerHTML += "Angle Between Vectors: " + angle.toFixed(2) + " degrees";
}
