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
            result = (~parseInt(input1, 2)).toString(2);
            break;
        default:
            result = 'Invalid operation';
    }

    document.getElementById('result').value = result;
}