let result;
function calculate (){
let a = parseFloat(document.getElementById("a").value);
let b = parseFloat(document.getElementById("b").value);
let c = parseFloat(document.getElementById("c").value);
let d = parseFloat(document.getElementById("d").value);
let p = parseFloat(document.getElementById("p").value);
let q = parseFloat(document.getElementById("q").value);
let r = parseFloat(document.getElementById("r").value);
result = Math.abs((a*p + b*q + c*r -d))/Math.sqrt(a*a + b*b + c*c);
let display = "Shortest Distance is " + result.toFixed(3);

document.getElementById("output").innerText = display;
}
