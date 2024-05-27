function performOperation(operation) {
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    let result;

    switch (operation) {
        case 'and':
            result = (parseInt(input1, 2) & parseInt(input2, 2)).toString(2);
            break;
        case 'or':
            result = (parseInt(input1, 2) | parseInt(input2, 2)).toString(2);
            break;
        case 'xor':
            result = (parseInt(input1, 2) ^ parseInt(input2, 2)).toString(2);
            break;
        case 'not':
            let bitLength = input1.length;
            result = (~parseInt(input1, 2) >>> 0).toString(2).slice(-bitLength);
            break;
        case 'leftshift':
            result = (parseInt(input1, 2) << 1).toString(2);
            break;
        case 'rightshift':
            result = (parseInt(input1, 2) >> 1).toString(2);
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').value = result;
}