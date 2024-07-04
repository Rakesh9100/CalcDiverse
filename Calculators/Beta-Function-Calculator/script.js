function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    var a=1;
    var b=1;
    var c=1;
    var add=1;




    a=math.gamma(num1);
    b=math.gamma(num2);
    add=num1+num2;
    c=math.gamma(add);


    let result=(a*b)/c;
    document.getElementById('res').value=result;

    if (result==Infinity || result==NaN){
        alert("Neither of the numbers can be negative integers or zero.Please try again.");
        // Code to make all fields blank after alert message
        document.getElementById('res').value = '';
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        }

    }