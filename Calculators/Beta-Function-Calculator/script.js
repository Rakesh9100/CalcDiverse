function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    var a=1;
    var b=1;
    var c=1;
    var add=1;

    if (num1==isNaN){
        alert('Please do not leave any field blank');
    }
    else if (num2==isNaN){
        alert('Please do not leave any field blank');
    }
    else if (num1==isNaN && num2==isNaN){
        alert('Please do not leave any field blank');
    }


    a=math.gamma(num1);
    b=math.gamma(num2);
    add=num1+num2;
    c=math.gamma(add);
    
    if(a==isNaN){
        alert('Please do not leave any field blank');
    }
    else if(b==isNaN){
        alert('Please do not leave any field blank');
    }
    else if(a==isNaN && b==isNaN){
        alert('Please do not leave any field blank');
    }

    else{
    let result=(a*b)/c;
    

    if (result==Infinity){
        alert("Neither of the numbers can be zero.Please try again.");
        // Code to make all fields blank after alert message
        document.getElementById('res').value = '';
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
        }
    if(result==NaN){
        
        alert("Neither of the fields can be blank..Please try again.");
        // Code to make all fields blank after alert message
        document.getElementById('res').value = '';
        document.getElementById('num1').value = '';
        document.getElementById('num2').value = '';
    }
        document.getElementById('res').value=result;
    
}
    }