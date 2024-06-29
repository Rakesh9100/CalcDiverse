var displacement = 0;

function verifyLength() {



}

function calculateDisplacement() {

    var initial = document.getElementById("box-initial-length").value;
    if (initial < 0) {
        document.getElementById("box-initial-length").value = 0;
        alert("Length should not be negative");
    }

    var final = document.getElementById("box-final-length").value;
    if (final < 0) {
        document.getElementById("box-final-length").value = 0;
        alert("Length should not be negative");
    }

    displacement = final - initial;
    document.getElementById("box-displacement-result").textContent = displacement;

    var springConst = document.getElementById("box-spring-constant").value;
    var force = springConst * displacement;
    document.getElementById("box-force-result").textContent = force;
}

document.getElementById("box-initial-length").addEventListener('input', calculateDisplacement);
document.getElementById("box-final-length").addEventListener('input', calculateDisplacement);
document.getElementById("box-spring-constant").addEventListener('input', calculateDisplacement);
