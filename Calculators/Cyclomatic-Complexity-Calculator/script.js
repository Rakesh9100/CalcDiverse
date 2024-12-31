// Method 1
// Calculation of Cyclomatic calculation using Number of nodes, edges and connected components

function method1() {
    let components = document.getElementById("components").value.trim();
    let nodes = document.getElementById("nodes").value;
    let edges = document.getElementById("edges").value;
    if (components == '' || edges == '' || nodes == '') {
        let output1 = "All fields are mandatory";
        document.getElementById("output1").innerHTML = output1;
    } else if (components < 0 || nodes < 0 || edges < 0) {
        let output1 = "Enter only positive numbers";
        document.getElementById("output1").innerHTML = output1;
    } else {
        components = parseInt(components);
        nodes = parseInt(nodes);
        edges = parseInt(edges);
        let output1 = edges - nodes + (2 * components);
        document.getElementById("output1").innerHTML = output1;
    }
}

// clear input for method1
function clearInputs1() {
    const inputs = document.querySelectorAll('.clearable1');
    inputs.forEach(input => input.value = '');
    const output = document.getElementById("output1");
    output.innerHTML = '';
}

// Method 2
// Calculation of Cyclomatic calculation using Number of closed regions in the graph

function method2() {
    let region_number = document.getElementById("regions").value;
    if (region_number == '') {
        let output2 = "All fields mandatory";
        document.getElementById("output2").innerHTML = output2;
    } else if (region_number < 0) {
        let output2 = "Enter only positive numbers";
        document.getElementById("output2").innerHTML = output2;
    } else {
        region_number = parseInt(region_number);
        let output2 = region_number + 1;
        document.getElementById("output2").innerHTML = output2;

    }
}

// clear input for method2
function clearInputs2() {
    const inputs = document.querySelectorAll('.clearable2');
    inputs.forEach(input => input.value = '');
    const output = document.getElementById("output2");
    output.innerHTML = '';
}

// Method 3 
// Calculation of Cyclomatic calculation using Number of condition nodes
function method3() {
    let choice = document.getElementById("switch-case").value.trim();
    let res = choice.toLowerCase();
    if (res == "yes") {
        let casecount = document.getElementById("case-count").value;
        let nodecount = document.getElementById("node-count").value;
        if (casecount == '' || nodecount == '') {
            let output3 = "All fields are mandatory";
            document.getElementById("output3").innerHTML = output3;
        } else if (casecount < 0 || nodecount < 0) {
            let output3 = "Enter only positive numbers";
            document.getElementById("output3").innerHTML = output3;
        } else {
            nodecount = parseInt(nodecount);
            casecount = parseInt(casecount);
            let output3 = nodecount + (casecount - 1) + 1;
            document.getElementById("output3").innerHTML = output3;
        }
    } else if (res == "no") {
        let nodecount = document.getElementById("node-count").value;
        if (nodecount == '') {
            let output3 = "All fields are mandatory";
            document.getElementById("output3").innerHTML = output3;
        } else if (nodecount < 0) {
            let output3 = "Enter only positive numbers";
            document.getElementById("output3").innerHTML = output3;
        } else {
            nodecount = parseInt(nodecount);
            let output3 = nodecount + 1;
            document.getElementById("output3").innerHTML = output3;
        }
    } else {
        let output3 = "Please enter 'yes' or 'no' for the switch case question";
        document.getElementById("output3").innerHTML = output3;
    }
}

// Function to hide input field when switch case condition is false in Method 3
function checkSwitchCase() {
    var choice = document.getElementById("switch-case").value.trim();
    let res = choice.toLowerCase();
    if (res == "yes" || res == 'y') {
        document.getElementById("case-count").style.display = "block";
        document.getElementById("case-count-text").style.display = "block";
    } else {
        document.getElementById("case-count").style.display = "none";
        document.getElementById("case-count-text").style.display = "none";
        document.getElementById("note").style.display = "none";
    }
}

// clear input for method3
function clearInputs3() {
    const inputs = document.querySelectorAll('.clearable3');
    inputs.forEach(input => input.value = '');
    const output = document.getElementById("output3");
    output.innerHTML = '';
}