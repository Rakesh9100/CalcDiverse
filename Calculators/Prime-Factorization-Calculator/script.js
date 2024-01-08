function isPrime(input){
    for(let i=0; i<= Math.sqrt(input); i++){
        if(input%i == 0){
            return false;
        }
        return true;
    }
}

function getFactors(input){
    var input = document.getElementById("input").value;
    result = [];

    if(isNaN(input) || input === ''){
        alert("Please enter Integer value.");
        return reset_values();
    }
    else{
        for(let i=2; i<=input; i++){
            while(isPrime(i) && input%i == 0){
                if(!result.includes(i)) result.push(i);
                input/=i;
            }
        }
    }
    var out = result.toString();

    document.getElementById('output').innerText = `${out}`;
}


function reset_values(){
    document.getElementById('output').innerText = "";
    document.getElementById('input').value = "";
}