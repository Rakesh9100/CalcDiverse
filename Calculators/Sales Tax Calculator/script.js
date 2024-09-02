function calcGross() {
    const netprice = parseFloat(document.getElementById('netprice').value);
    const rate = parseFloat(document.getElementById('rate').value);
    
    if (!isNaN(netprice) && !isNaN(rate)) {
        const taxprice = (netprice * rate) / 100;
        const gross = netprice + taxprice;
        
        document.getElementById('taxprice').value = taxprice.toFixed(2);
        document.getElementById('gross').value = gross.toFixed(2);
    }
}

function calcrate() {
    const gross = parseFloat(document.getElementById('gross').value);
    const netprice = parseFloat(document.getElementById('netprice').value);
    
    if (!isNaN(gross) && !isNaN(netprice) && netprice > 0) {
        const taxprice = gross - netprice;
        const rate = (taxprice / netprice) * 100;
        
        document.getElementById('taxprice').value = taxprice.toFixed(2);
        document.getElementById('rate').value = rate.toFixed(2);
    }
}

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
