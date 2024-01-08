function calculate(event) {
    event.preventDefault();
    let n1 = document.getElementById('Number1').value
    let n2 = document.getElementById('Number2').value
    let result = Math.pow(n1, n2)
    console.log(result)
    document.getElementById('result').innerHTML = result
}

function reset() {
    document.getElementById('result').innerHTML = ""
}