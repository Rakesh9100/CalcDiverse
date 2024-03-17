document.getElementById('convert').addEventListener('click', convertColors);
document.getElementById('copy').addEventListener('click', copyToClipboard);
document.getElementById('reset').addEventListener('click', resetFields);

function convertColors() {
    const input_div = document.getElementById('input');
    const input = input_div.value;
    const convertFrom = document.getElementById('convertFrom').value;
    const convertTo = document.getElementById('convertTo').value;
    console.log(input, convertFrom, convertTo)

    let result;
    let pat;

    switch (convertFrom) {
        case 'rgb':
            pat = "rgb(255, 255, 255)";
            result = convertRGB(input, convertTo);
            break;
        case 'rgba':
            pat = "rgba(255, 255, 255, 1)";
            result = convertRGBA(input, convertTo);
            break;
        case 'hex':
            pat = "#ffffff";
            result = convertHex(input, convertTo);
            break;
        case 'hsl':
            pat = "hsl(360, 100%, 100%)";
            result = convertHSL(input, convertTo);
            break;
        case 'hsv':
            pat = "hsv(360, 100%, 100%)";
            result = convertHSV(input, convertTo);
            break;
        case 'cmyk':
            pat = "cmyk(100%, 100%, 100%, 100%)";
            result = convertCMYK(input, convertTo);
            break;
        default:
            result = 'Invalid conversion';

    }
    document.getElementById('result').value = result;
    if (result == 'Invalid input') {
        document.getElementById('result').style.color = 'red';
        document.getElementById('result').value = 'Invalid Input !!! [ Correct format: ' + pat + ' ]';

    } else {
        document.getElementById('result').style.color = 'black';
    }
}

function copyToClipboard() {
    const resultInput = document.getElementById('result');
    const inputValue = document.getElementById('input').value;
    const copyBtn = document.getElementById('copy').value;

    if (isEmpty(inputValue)) {
        resultInput.style.color = 'red';
        resultInput.value = 'Invalid Input !!! [ Correct format: ' + pat + ' ]';
    }

    else {
        resultInput.select();
        document.execCommand('copy');
    }

    copyBtn.innerText = 'Copy📂 ';

    //for invalid value
    function isEmpty(value) {
        if (value == null || value.trim() === '') {
            copyBtn.innerText = 'Copy';
            return true;
        }
    }
}

function convertRGB(input, convertTo) {
    input = input.toLowerCase();

    switch (convertTo) {
        case 'rgb':
            return input;
        case 'rgba':
            return RGBtoRGBA(input);
        case 'hex':
            return RGBtoHex(input);
        case 'hsl':
            return RGBtoHSL(input);
        case 'hsv':
            return RGBtoHSV(input);
        case 'cmyk':
            return RGBtoCMYK(input);
        default:
            return 'Invalid conversion';
    }
}

function convertRGBA(input, convertTo) {
    input = input.toLowerCase();

    switch (convertTo) {
        case 'rgb':
            return RGBAtoRGB(input);
        case 'rgba':
            return input;
        case 'hex':
            return RGBAtoHex(input);
        case 'hsl':
            return RGBAtoHSL(input);
        case 'hsv':
            return RGBAtoHSV(input);
        case 'cmyk':
            return RGBAtoCMYK(input);
        default:
            return 'Invalid conversion';
    }
}

function convertHex(input, convertTo) {
    input = input.toLowerCase();

    switch (convertTo) {
        case 'rgb':
            return HextoRGB(input);
        case 'rgba':
            return HextoRGBA(input);
        case 'hex':
            return input;
        case 'hsl':
            return HextoHSL(input);
        case 'hsv':
            return HextoHSV(input);
        case 'cmyk':
            return HextoCMYK(input);
        default:
            return 'Invalid conversion';
    }
}

function convertHSL(input, convertTo) {
    input = input.toLowerCase();

    switch (convertTo) {
        case 'rgb':
            return HSLtoRGB(input);
        case 'rgba':
            return HSLtoRGBA(input);
        case 'hex':
            return HSLtoHex(input);
        case 'hsl':
            return input;
        case 'hsv':
            return HSLtoHSV(input);
        case 'cmyk':
            return HSLtoCMYK(input);
        default:
            return 'Invalid conversion';
    }
}

function convertHSV(input, convertTo) {
    input = input.toLowerCase();

    switch (convertTo) {
        case 'rgb':
            return HSVtoRGB(input);
        case 'rgba':
            return HSVtoRGBA(input);
        case 'hex':
            return HSVtoHex(input);
        case 'hsl':
            return HSVtoHSL(input);
        case 'hsv':
            return input;
        case 'cmyk':
            return HSVtoCMYK(input);
        default:
            return 'Invalid conversion';
    }
}

function convertCMYK(input, convertTo) {
    input = input.toLowerCase();

    switch (convertTo) {
        case 'rgb':
            return CMYKtoRGB(input);
        case 'rgba':
            return CMYKtoRGBA(input);
        case 'hex':
            return CMYKtoHex(input);
        case 'hsl':
            return CMYKtoHSL(input);
        case 'hsv':
            return CMYKtoHSV(input);
        case 'cmyk':
            return input;
        default:
            return 'Invalid conversion';
    }
}

// reset button functionality
function resetFields() {
    var inputOnReset = document.getElementById('input');
    var resultOnReset = document.getElementById('result');
    var copyButton = document.getElementById('copy').value;

    if ((inputOnReset.value) || (resultOnReset).value) {
        inputOnReset.value = '';
        resultOnReset.value = '';
    }

}

