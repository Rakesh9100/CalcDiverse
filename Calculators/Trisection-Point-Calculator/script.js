function calculateTrisectionpoint(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    // Get the values from the input fields
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);

    //Calculate the Trisection point
    const m1 = (x1 + x2) / 2;
    const m2 = (y1 + y2) / 2;

    const d=m1+m2;
    const px=(((m1*x2)+(m2*x1))/d).toFixed(2);  
    const py=(((m1*y2)+(m2*y1))/d).toFixed(2); 
    const qx=(((m2*x2)+(m1*x1))/d).toFixed(2);   
    const qy=(((m2*y2)+(m1*y1))/d).toFixed(2); 
    
    
    // Display the result
    document.getElementById('result').textContent = `Trisection Points: (${px}, ${py}), (${qx}, ${qy})`;
}

// Clear the input fields and result when the page is loaded or refreshed
window.onload = function () {
    document.getElementById('x1').value = '';
    document.getElementById('y1').value = '';
    document.getElementById('x2').value = '';
    document.getElementById('y2').value = '';
    document.getElementById('result').textContent = '';
}
