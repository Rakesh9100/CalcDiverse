var radius, height, length, axisa, axisb, axisc, width;
var cubed = "3";
var shape;
//variable to later allow the user to select their own measurement
var system = "unit";
const pi = 3.141592653589793;

function showDiv(select) {
    var shapes = document.getElementsByClassName("shape");
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        document.getElementsByTagName("input")[i].value = '';
    } //remove all previously inputted values each time a new shape is selected

    for (var i = 0; i < shapes.length; i++) {
        //document.getElementsByClassName("answer")[i].value = '';
        shapes[i].style.display = "none";
    } //hide all previously revealed divs each time a new shape is selected

    if (select.value == "None") {
    }

    if (select.value === 'Cube') {
        shape = "cube"; //'shape' var used to later calculate the answer
        document.getElementById('Cube').style.display = "flex";

    }

    if (select.value == "Cuboid") {
        shape = "cuboid";
        document.getElementById("Cuboid").style.display = "flex";
    }

    if (select.value == "Cylinder") {
        shape = "cylinder";
        document.getElementById("Cylinder").style.display = "flex";
    }

    if (select.value == "Cone") {
        shape = "cone";
        document.getElementById("Cone").style.display = "flex";
    }

    if (select.value == "Sphere") {
        shape = "sphere";
        document.getElementById("Sphere").style.display = "flex";
    }

    if (select.value == "Hemisphere") {
        shape = "hemisphere";
        document.getElementById("Hemisphere").style.display = "flex";
    }

    if (select.value == "Prism") {
        shape = "prism";
        document.getElementById("Prism").style.display = "flex";
    }

    if (select.value == "Pyramid") {
        shape = "pyramid";
        document.getElementById("Pyramid").style.display = "flex";
    }

    if (select.value == "Ellipsoid") {
        shape = "ellipsoid";
        document.getElementById("Ellipsoid").style.display = "flex";
    }

    if (select.value == "Tetrahedron") {
        shape = "tetrahedron";
        document.getElementById("Tetrahedron").style.display = "flex";
    }
}

function calculate() {
    var answer;
    var input;
    input = document.getElementById('cube-length').value;
    const regex = /\d+(\.\d*)?/;



    if (shape == "cube") {
        length = document.getElementById("cube-length").value;
        if (!regex.test(length)) {
            document.getElementById("cubeAnswer").innerHTML = "Enter a numeric value";
            document.getElementById("cubeAnswer").style.color = "#cc3434";
            document.getElementById("cube-length").style.border = "2px solid #cc3434";
        }
        else {
            var cubeFormula = Math.pow(length, 3);
            var answer = (cubeFormula + " " + system + cubed.sup());
            /*insert the calculated answer into the blank 
            paragraph tag with id = "cubeAnswer"*/
            document.getElementById("cubeAnswer").innerHTML = "V = " + answer;
            document.getElementById("cubeAnswer").style.color = "#0c0f46";
            document.getElementById("cube-length").style.border = "2px solid #ccc";

        }
    }

    if (shape == "cuboid") {
        length = document.getElementById("cuboid-length").value;
        width = document.getElementById("cuboid-width").value;
        height = document.getElementById("cuboid-height").value;
        if (!regex.test(length) || !regex.test(width) || !regex.test(height)) {
            document.getElementById("cuboidAnswer").innerHTML = "Enter a numeric value";
            document.getElementById("cuboidAnswer").style.color = "#cc3434";
            if (!regex.test(length)) document.getElementById("cuboid-length").style.border = "2px solid #cc3434";
            if (!regex.test(width)) document.getElementById("cuboid-width").style.border = "2px solid #cc3434";
            if (!regex.test(height)) document.getElementById("cuboid-height").style.border = "2px solid #cc3434";
        }
        else {
            var cuboidFormula = length * width * height;
            var answer = (cuboidFormula + " " + system + cubed.sup());
            document.getElementById("cuboidAnswer").innerHTML = "V = " + answer;
            document.getElementById("cuboidAnswer").style.color = "#0c0f46";
            document.getElementById("cuboid-length").style.border = "2px solid #ccc";
            document.getElementById("cuboid-width").style.border = "2px solid #ccc";
            document.getElementById("cuboid-height").style.border = "2px solid #ccc";
        }
    }

    if (shape == "cylinder") {
        radius = document.getElementById("cylinder-radius").value;
        height = document.getElementById("cylinder-height").value;
        if (!regex.test(radius) || !regex.test(height)) {
            document.getElementById("cylinderAnswer").innerHTML = "Enter a numeric value";
            document.getElementById("cylinderAnswer").style.color = "#cc3434";
            if (!regex.test(radius)) document.getElementById("cylinder-radius").style.border = "2px solid #cc3434";

            if (!regex.test(height)) document.getElementById("cylinder-height").style.border = "2px solid #cc3434";
        }
        else {
            var cylinderFormula = pi * (Math.pow(radius, 2)) * height;
            var answer = (cylinderFormula + " " + system + cubed.sup());
            document.getElementById("cylinderAnswer").innerHTML = "V = " + answer;
            document.getElementById("cubeAnswer").style.color = "#0c0f46";
            document.getElementById("cylinder-radius").style.border =
                "2px solid #ccc";
            document.getElementById("cylinder-height").style.border =
                "2px solid #ccc";

        }
    }

    if (shape == "cone") {
        radius = document.getElementById("cone-radius").value;
        height = document.getElementById("cone-height").value;
        if (!regex.test(radius) || !regex.test(height)) {
            document.getElementById("coneAnswer").innerHTML = "Enter a numeric value";
            document.getElementById("coneAnswer").style.color = "#cc3434";
            if (!regex.test(radius)) document.getElementById("cone-radius").style.border = "2px solid #cc3434";

            if (!regex.test(height)) document.getElementById("cone-height").style.border = "2px solid #cc3434";
        }
        else {
            var coneFormula = (1 / 3) * pi * ((Math.pow(radius, 2)) * height);
            var answer = (coneFormula + " " + system + cubed.sup());
            document.getElementById("coneAnswer").innerHTML = "V = " + answer;
            document.getElementById("coneAnswer").style.color = "#0c0f46";
            document.getElementById("cone-radius").style.border = "2px solid #ccc";
            document.getElementById("cone-height").style.border = "2px solid #ccc";
        }
    }

    if (shape == "sphere") {
        radius = document.getElementById("sphere-radius").value;
        if (!regex.test(radius)) {
            document.getElementById("sphereAnswer").innerHTML = "Enter a numeric value";
            document.getElementById("sphereAnswer").style.color = "#cc3434";
            if (!regex.test(radius)) document.getElementById("sphere-radius").style.border = "2px solid #cc3434";


        }
        else {
            var sphereFormula = (4 / 3) * pi * (Math.pow(radius, 3));
            var answer = (sphereFormula + " " + system + cubed.sup());
            document.getElementById("sphereAnswer").innerHTML = "V = " + answer;
            document.getElementById("sphereAnswer").style.color = "#0c0f46";
            document.getElementById("sphere-radius").style.border = "2px solid #ccc";
        }
    }

    if (shape == "hemisphere") {
        radius = document.getElementById("hemisphere-radius").value;
        if (!regex.test(radius)) {
            document.getElementById("hemisphereAnswer").innerHTML = "Enter a numeric value";
            document.getElementById("hemisphereAnswer").style.color = "#cc3434";
            if (!regex.test(radius)) document.getElementById("hemisphere-radius").style.border = "2px solid #cc3434";


        }
        else {
            var hemisphereFormula = (2 / 3) * pi * (Math.pow(radius, 3));
            var answer = (hemisphereFormula + " " + system + cubed.sup());
            document.getElementById("hemisphereAnswer").innerHTML = "V = " + answer;
            document.getElementById("hemisphereAnswer").style.color = "#0c0f46";
            document.getElementById("hemisphere-radius").style.border = "2px solid #ccc";
        }
    }

    if (shape == "prism") {
        length = document.getElementById("prism-length").value;
        width = document.getElementById("prism-width").value;
        height = document.getElementById("prism-height").value;
        if (!regex.test(length) || !regex.test(width) || !regex.test(height)) {
            document.getElementById("prismAnswer").innerHTML = "Enter a numeric value";
            document.getElementById("prismAnswer").style.color = "#cc3434";
            if (!regex.test(length)) document.getElementById("prism-length").style.border = "2px solid #cc3434";
            if (!regex.test(width)) document.getElementById("prism-width").style.border = "2px solid #cc3434";
            if (!regex.test(height)) document.getElementById("prism-height").style.border = "2px solid #cc3434";
        }
        else {
            var prismFormula = length * width * height;
            var answer = (prismFormula + " " + system + cubed.sup());
            document.getElementById("prismAnswer").innerHTML = "V = " + answer;
            document.getElementById("prismAnswer").style.color = "#0c0f46";
            document.getElementById("prism-length").style.border = "2px solid #ccc";
            document.getElementById("prism-width").style.border = "2px solid #ccc";
            document.getElementById("prism-height").style.border = "2px solid #ccc";

        }
    }

    if (shape == "pyramid") {
        length = document.getElementById("pyramid-length").value;
        width = document.getElementById("pyramid-width").value;
        height = document.getElementById("pyramid-height").value;
        if (!regex.test(length) || !regex.test(width) || !regex.test(height)) {
            document.getElementById("pyramidAnswer").innerHTML = "Enter a numeric value";
            document.getElementById("pyramidAnswer").style.color = "#cc3434";
            if (!regex.test(length)) document.getElementById("pyramid-length").style.border = "2px solid #cc3434";
            if (!regex.test(width)) document.getElementById("pyramid-width").style.border = "2px solid #cc3434";
            if (!regex.test(height)) document.getElementById("pyramid-height").style.border = "2px solid #cc3434";
        }
        else {
            var pyramidFormula = (1 / 3) * (length * width * height);
            var answer = pyramidFormula + " " + system + cubed.sup();
            document.getElementById("pyramidAnswer").innerHTML =
                "V = " + answer;
            document.getElementById("pyramidAnswer").style.color = "#0c0f46";
            document.getElementById("pyramid-length").style.border = "2px solid #ccc";
            document.getElementById("pyramid-width").style.border = "2px solid #ccc";
            document.getElementById("pyramid-height").style.border = "2px solid #ccc";
        }
    }

    if (shape == "ellipsoid") {
        axisa = document.getElementById("axis-a").value;
        axisb = document.getElementById("axis-b").value;
        axisc = document.getElementById("axis-c").value;
        if (!regex.test(axisa) || !regex.test(axisb) || !regex.test(axisc)) {
            document.getElementById("ellipsoidAnswer").innerHTML = "Enter a numeric value";
            document.getElementById("ellipsoidAnswer").style.color = "#cc3434";
            if (!regex.test(axisa)) document.getElementById("axis-a").style.border = "2px solid #cc3434";
            if (!regex.test(axisb)) document.getElementById("axis-b").style.border = "2px solid #cc3434";
            if (!regex.test(axisc)) document.getElementById("axis-c").style.border = "2px solid #cc3434";
        }
        else {
            var ellipsoidFormula = (4 / 3) * pi * (axisa * axisb * axisc);
            var answer = (ellipsoidFormula + " " + system + cubed.sup());
            document.getElementById("ellipsoidAnswer").innerHTML = "V = " + answer;
            document.getElementById("ellipsoidAnswer").style.color = "#0c0f46";
            document.getElementById("axis-a").style.border = "2px solid #ccc";
            document.getElementById("axis-b").style.border = "2px solid #ccc";
            document.getElementById("axis-c").style.border = "2px solid #ccc";
        }
    }

    if (shape == "tetrahedron") {

        length = document.getElementById("tetrahedron-length").value;
        if (!regex.test(length)) {
            document.getElementById("tetrahedronAnswer").innerHTML = "Enter a numeric value";
            document.getElementById("tetrahedronAnswer").style.color =
                "#cc3434";
            document.getElementById("tetrahedron-length").style.border = "2px solid #cc3434";
        }
        else {
            var tetrahedronFormula = (1 / (6 * (Math.sqrt(2))) * (Math.pow(length, 3)));
            var answer = (tetrahedronFormula + " " + system + cubed.sup());
            document.getElementById("tetrahedronAnswer").innerHTML = "V = " + answer;
            document.getElementById("tetrahedronAnswer").style.color = "#0c0f46";
            document.getElementById("tetrahedron-length").style.border =
                "2px solid #ccc";
        }
    }
}
