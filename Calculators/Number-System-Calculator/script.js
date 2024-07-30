function convert() {
    const numberInput = document.getElementById('number').value;
    const fromBase = parseInt(document.getElementById('fromBase').value, 10);
    const toBase = parseInt(document.getElementById('toBase').value, 10);

    const decimalValue = parseInt(numberInput, fromBase);
    const convertedValue = decimalValue.toString(toBase);

    document.getElementById('result').innerHTML = `Converted Value: ${convertedValue}`;
}

function clear_fun() {
    document.getElementById('number').value = '';
    document.getElementById('fromBase').value = '';
    document.getElementById('toBase').value = '';
    document.getElementById('result').innerHTML = '';
    updateToBaseOptions();
}

function updateToBaseOptions() {
    const fromBase = document.getElementById('fromBase').value;
    const toBase = document.getElementById('toBase');
    const bases = [{
            value: '2',
            text: 'Binary'
        },
        {
            value: '7',
            text: 'Septenary'
        },
        {
            value: '8',
            text: 'Octal'
        },
        {
            value: '10',
            text: 'Decimal'
        },
        {
            value: '16',
            text: 'Hexadecimal'
        }
    ];

    toBase.innerHTML = '<option value="" selected disabled>Select an option</option>';
    bases.forEach(base => {
        if (base.value !== fromBase) {
            const option = document.createElement('option');
            option.value = base.value;
            option.text = base.text;
            toBase.appendChild(option);
        }
    });
}

// Update the toBase options when the page loads
document.addEventListener('DOMContentLoaded', updateToBaseOptions);

// Add event listener to update toBase options when fromBase changes
document.getElementById('fromBase').addEventListener('change', updateToBaseOptions);
