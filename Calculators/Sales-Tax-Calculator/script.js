function init() {
    const netprice = document.getElementById('netprice').value;
    const rate = document.getElementById('rate').value;
    const gross = document.getElementById('gross').value;

    if (netprice && rate) {
        calcGross();
    } else if (netprice && gross) {
        calcrate();
    } else {
        alert("Please enter the required fields.");
    }
}

function calcGross() {
    const netprice = parseFloat(document.getElementById('netprice').value);     //Get the net price and tax rate values from input fields
    const rate = parseFloat(document.getElementById('rate').value);             //Convert to float
    
    if (!isNaN(netprice) && !isNaN(rate)) {     //Check if both net price and tax rate are valid numbers
        const taxprice = (netprice * rate) / 100;   //Calculate the taxprice
        const gross = netprice + taxprice;      //Calculate the gross amount
        
        document.getElementById('taxprice').value = taxprice.toFixed(2);        //Set tax price in the taxprice input field, 2 decimal places
        document.getElementById('gross').value = gross.toFixed(2);              //Set gross amount in the gross input field, 2 decimal places
    }
}

function calcrate() {   //calculate tax rate 
    const gross = parseFloat(document.getElementById('gross').value);       //Get the gross amount and net price values from input field
    const netprice = parseFloat(document.getElementById('netprice').value);     //Convert to Float
    
    if (!isNaN(gross) && !isNaN(netprice) && netprice > 0) {    //Check if both gross and netprice are valid numbers
        const taxprice = gross - netprice;          //Calculate the tax amount and rate(in %)
        const rate = (taxprice / netprice) * 100;
        
        document.getElementById('taxprice').value = taxprice.toFixed(2);        //Set tax price and rate in respective input fields
        document.getElementById('rate').value = rate.toFixed(2);                //2 decimal places
    }
}

function clearVal() {
    document.getElementById('netprice').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('gross').value = '';
    document.getElementById('taxprice').value = '';
}

function showi() {
    document.getElementById('infoPopup').style.display = 'block';
}

function closeBox() {
    document.getElementById('infoPopup').style.display = 'none';
}
