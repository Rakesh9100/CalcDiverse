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

    if (select.value == "None") { }

    if (select.value == "Cube") {
        shape = "cube"; //'shape' var used to later calculate the answer
        document.getElementById("Cube").style.display = "block";
    }

    if (select.value == "Cuboid") {
        shape = "cuboid";
        document.getElementById("Cuboid").style.display = "block";
    }

    if (select.value == "Cylinder") {
        shape = "cylinder";
        document.getElementById("Cylinder").style.display = "block";
    }

    if (select.value == "Cone") {
        shape = "cone";
        document.getElementById("Cone").style.display = "block";
    }

    if (select.value == "Sphere") {
        shape = "sphere";
        document.getElementById("Sphere").style.display = "block";
    }

    if (select.value == "Hemisphere") {
        shape = "hemisphere";
        document.getElementById("Hemisphere").style.display = "block";
    }

    if (select.value == "Prism") {
        shape = "prism";
        document.getElementById("Prism").style.display = "block";
    }

    if (select.value == "Pyramid") {
        shape = "pyramid";
        document.getElementById("Pyramid").style.display = "block";
    }

    if (select.value == "Ellipsoid") {
        shape = "ellipsoid";
        document.getElementById("Ellipsoid").style.display = "block";
    }

    if (select.value == "Tetrahedron") {
        shape = "tetrahedron";
        document.getElementById("Tetrahedron").style.display = "block";
    }
}

function calculate() {
    var answer;

    if (shape == "cube") {
        length = document.getElementById("cube-length").value;
        var cubeFormula = Math.pow(length, 3);
        var answer = (cubeFormula + " " + system + cubed.sup());
        /*insert the calculated answer into the blank 
        paragraph tag with id = "cubeAnswer"*/
        document.getElementById("cubeAnswer").innerHTML = "V = " + answer;
    }

    if (shape == "cuboid") {
        length = document.getElementById("cuboid-length").value;
        width = document.getElementById("cuboid-width").value;
        height = document.getElementById("cuboid-height").value;
        var cuboidFormula = length * width * height;
        var answer = (cuboidFormula + " " + system + cubed.sup());
        document.getElementById("cuboidAnswer").innerHTML = "V = " + answer;
    }

    if (shape == "cylinder") {
        radius = document.getElementById("cylinder-radius").value;
        height = document.getElementById("cylinder-height").value;
        var cylinderFormula = pi * (Math.pow(radius, 2)) * height;
        var answer = (cylinderFormula + " " + system + cubed.sup());
        document.getElementById("cylinderAnswer").innerHTML = "V = " + answer;
    }

    if (shape == "cone") {
        radius = document.getElementById("cone-radius").value;
        height = document.getElementById("cone-height").value;
        var coneFormula = (1 / 3) * pi * ((Math.pow(radius, 2)) * height);
        var answer = (coneFormula + " " + system + cubed.sup());
        document.getElementById("coneAnswer").innerHTML = "V = " + answer;
    }

    if (shape == "sphere") {
        radius = document.getElementById("sphere-radius").value;
        var sphereFormula = (4 / 3) * pi * (Math.pow(radius, 3));
        var answer = (sphereFormula + " " + system + cubed.sup());
        document.getElementById("sphereAnswer").innerHTML = "V = " + answer;
    }

    if (shape == "hemisphere") {
        radius = document.getElementById("hemisphere-radius").value;
        var hemisphereFormula = (2 / 3) * pi * (Math.pow(radius, 3));
        var answer = (hemisphereFormula + " " + system + cubed.sup());
        document.getElementById("hemisphereAnswer").innerHTML = "V = " + answer;
    }

    if (shape == "prism") {
        length = document.getElementById("prism-length").value;
        width = document.getElementById("prism-width").value;
        height = document.getElementById("prism-height").value;
        var prismFormula = length * width * height;
        var answer = (prismFormula + " " + system + cubed.sup());
        document.getElementById("prismAnswer").innerHTML = "V = " + answer;
    }

    if (shape == "pyramid") {
        length = document.getElementById("pyramid-length").value;
        width = document.getElementById("pyramid-width").value;
        height = document.getElementById("pyramid-height").value;
        var pyramidFormula = (1 / 3) * (length * width * height);
        var answer = (pyramidFormula + " " + system + cubed.sup());
        document.getElementById("pyramidAnswer").innerHTML = "V = " + answer;
    }

    if (shape == "ellipsoid") {
        axisa = document.getElementById("axis-a").value;
        axisb = document.getElementById("axis-b").value;
        axisc = document.getElementById("axis-c").value;
        var ellipsoidFormula = (4 / 3) * pi * (axisa * axisb * axisc);
        var answer = (ellipsoidFormula + " " + system + cubed.sup());
        document.getElementById("ellipsoidAnswer").innerHTML = "V = " + answer;
    }

    if (shape == "tetrahedron") {
        length = document.getElementById("tetrahedron-length").value;
        var tetrahedronFormula = (1 / (6 * (Math.sqrt(2))) * (Math.pow(length, 3)));
        var answer = (tetrahedronFormula + " " + system + cubed.sup());
        document.getElementById("tetrahedronAnswer").innerHTML = "V = " + answer;
    }
}
