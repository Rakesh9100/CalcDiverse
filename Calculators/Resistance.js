function calculate1(event) {
    event.preventDefault();
    let n1 = parseFloat(document.getElementById('resistance1').value);
    let n2 = parseFloat(document.getElementById('resistance2').value);
    if(n1 && n2) {
        {
            (document.getElementById('result')).style.color = 'black';
            let result = (n1 )+(n2);
            document.getElementById('result').innerHTML = result
        }
    }else {
        (document.getElementById('result')).style.color = 'red';
        document.getElementById('result').innerHTML = "Please Enter valid values"
    }
}
function calculate2(event) {
    event.preventDefault();
    let n1 = parseFloat(document.getElementById('resistance1').value);
    let n2 = parseFloat(document.getElementById('resistance2').value);
    if(n1 && n2) {
        {
            (document.getElementById('result')).style.color = 'black';
            let p= (n1 )+(n2);
            let result =(n1*n2)/(p);
            document.getElementById('result').innerHTML = result
        }
    }else {
        (document.getElementById('result')).style.color = 'red';
        document.getElementById('result').innerHTML = "Please Enter valid values"
    }
}
function reset() {
    document.getElementById('result').innerHTML = ""
}