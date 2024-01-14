// RGB , RGBA, Hex, HSL, HSV, CMYK

function RGBtoRGBA(input) {
    // input format: rgb(255, 255, 255) or rgb(255,255,255) or (255, 255, 255) or (255,255,255) or 255, 255, 255 or 255,255,255
    try {
        input = input.replace('rgb(', '');
        input = input.replace(')', '');
        input = input.split(', ');
        for (let i = 0; i < input.length; i++) {
            // .trim() removes whitespace from both sides of a string
            input[i] = parseInt(input[i].trim());
        }
    } catch (error) {
        console.log(error)
        return 'Invalid input';
    }
    console.log(input)
    if (input.length !== 3) {
        return 'Invalid input';
    }
    if (input.some((value) => value < 0 || value > 255)) {
        return 'Invalid input';
    }
    return `rgba(${input[0]}, ${input[1]}, ${input[2]}, 1)`;
}

function RGBtoHex(input) {
    // input format: rgb(255, 255, 255) or rgb(255,255,255) or (255, 255, 255) or (255,255,255) or 255, 255, 255 or 255,255,255
    try {
        input = input.replace('rgb(', '');
        input = input.replace(')', '');
        input = input.split(', ');
        for (let i = 0; i < input.length; i++) {
            // .trim() removes whitespace from both sides of a string
            input[i] = parseInt(input[i].trim());
        }
    } catch (error) {
        console.log(error)
        return 'Invalid input';
    }
    console.log(input)
    if (input.length !== 3) {
        return 'Invalid input';
    }
    if (input.some((value) => value < 0 || value > 255)) {
        return 'Invalid input';
    }
    let result = '#';
    for (let i = 0; i < input.length; i++) {
        let hex = input[i].toString(16);
        if (hex.length === 1) {
            hex = '0' + hex;
        }
        result += hex;
    }
    return result
}

function RGBtoHSL(input) {
    // input format: rgb(255, 255, 255) or rgb(255,255,255) or (255, 255, 255) or (255,255,255) or 255, 255, 255 or 255,255,255
    try {
        input = input.replace('rgb(', '');
        input = input.replace(')', '');
        input = input.split(', ');
        for (let i = 0; i < input.length; i++) {
            // .trim() removes whitespace from both sides of a string
            input[i] = parseInt(input[i].trim());
        }
    } catch (error) {
        console.log(error)
        return 'Invalid input';
    }
    console.log(input)
    if (input.length !== 3) {
        return 'Invalid input';
    }
    if (input.some((value) => value < 0 || value > 255)) {
        return 'Invalid input';
    }
    let r = input[0] / 255;
    let g = input[1] / 255;
    let b = input[2] / 255;
    let min = Math.min(r, g, b);
    let max = Math.max(r, g, b);
    let delta = max - min;
    let h, s, l;
    if (delta === 0) {
        h = 0;
    } else if (max === r) {
        h = ((g - b) / delta) % 6;
    } else if (max === g) {
        h = (b - r) / delta + 2;
    } else if (max === b) {
        h = (r - g) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) {
        h += 360;
    }
    l = (min + max) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return `hsl(${h}, ${s}%, ${l}%)`;
}

function RGBtoHSV(input) {
    // input format: rgb(255, 255, 255) or rgb(255,255,255) or (255, 255, 255) or (255,255,255) or 255, 255, 255 or 255,255,255
    try {
        input = input.replace('rgb(', '');
        input = input.replace(')', '');
        input = input.split(', ');
        for (let i = 0; i < input.length; i++) {
            // .trim() removes whitespace from both sides of a string
            input[i] = parseInt(input[i].trim());
        }
    } catch (error) {
        console.log(error)
        return 'Invalid input';
    }
    console.log(input)
    if (input.length !== 3) {
        return 'Invalid input';
    }
    if (input.some((value) => value < 0 || value > 255)) {
        return 'Invalid input';
    }
    let r = input[0] / 255;
    let g = input[1] / 255;
    let b = input[2] / 255;
    let min = Math.min(r, g, b);
    let max = Math.max(r, g, b);
    let delta = max - min;
    let h, s, v;
    if (delta === 0) {
        h = 0;
    } else if (max === r) {
        h = ((g - b) / delta) % 6;
    } else if (max === g) {
        h = (b - r) / delta + 2;
    } else if (max === b) {
        h = (r - g) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) {
        h += 360;
    }
    s = delta === 0 ? 0 : delta / max;
    s = +(s * 100).toFixed(1);
    v = +(max * 100).toFixed(1);
    return `hsv(${h}, ${s}%, ${v}%)`;
}

function RGBtoCMYK(input) {
    // input format: rgb(255, 255, 255) or rgb(255,255,255) or (255, 255, 255) or (255,255,255) or 255, 255, 255 or 255,255,255
    try {
        input = input.replace('rgb(', '');
        input = input.replace(')', '');
        input = input.split(', ');
        for (let i = 0; i < input.length; i++) {
            // .trim() removes whitespace from both sides of a string
            input[i] = parseInt(input[i].trim());
        }
    } catch (error) {
        console.log(error)
        return 'Invalid input';
    }
    console.log(input)
    if (input.length !== 3) {
        return 'Invalid input';
    }
    if (input.some((value) => value < 0 || value > 255)) {
        return 'Invalid input';
    }
    let r = input[0] / 255;
    let g = input[1] / 255;
    let b = input[2] / 255;
    let k = 1 - Math.max(r, g, b);
    let c = (1 - r - k) / (1 - k);
    let m = (1 - g - k) / (1 - k);
    let y = (1 - b - k) / (1 - k);
    c = +(c * 100).toFixed(1);
    m = +(m * 100).toFixed(1);
    y = +(y * 100).toFixed(1);
    k = +(k * 100).toFixed(1);
    return `cmyk(${c}%, ${m}%, ${y}%, ${k}%)`;
}

function RGBAtoRGB(input) {
    // input format: rgba(255, 255, 255, 1) or rgba(255,255,255,1) or (255, 255, 255, 1) or (255,255,255,1) or 255, 255, 255, 1 or 255,255,255,1
    console.log("function triggered")
    try {
        input = input.replace('rgba(', '');
        input = input.replace(')', '');
        input = input.split(', ');
        for (let i = 0; i < input.length; i++) {
            // .trim() removes whitespace from both sides of a string
            input[i] = parseInt(input[i].trim());
        }
    } catch (error) {
        console.log(error)
        return 'Invalid input';
    }
    console.log(input)
    if (input.length !== 4) {
        return 'Invalid input';
    }
    if (input.some((value) => value < 0 || value > 255)) {
        return 'Invalid input';
    }
    return `rgb(${input[0]}, ${input[1]}, ${input[2]})`;
}

function RGBAtoHex(input) {
    // input format: rgba(255, 255, 255, 1) or rgba(255,255,255,1) or (255, 255, 255, 1) or (255,255,255,1) or 255, 255, 255, 1 or 255,255,255,1
    try {
        input = input.replace('rgba(', '');
        input = input.replace(')', '');
        input = input.split(', ');
        for (let i = 0; i < input.length; i++) {
            // .trim() removes whitespace from both sides of a string
            input[i] = parseInt(input[i].trim());
        }
    } catch (error) {
        console.log(error)
        return 'Invalid input';
    }
    console.log(input)
    if (input.length !== 4) {
        return 'Invalid input';
    }
    if (input.some((value) => value < 0 || value > 255)) {
        return 'Invalid input';
    }
    let result = '#';
    for (let i = 0; i < input.length - 1; i++) {
        let hex = input[i].toString(16);
        if (hex.length === 1) {
            hex = '0' + hex;
        }
        result += hex;
    }
    return result
}

function RGBAtoHSL(input) {
    input = RGBAtoRGB(input);
    return RGBtoHSL(input);
}

function RGBAtoHSV(input) {
    input = RGBAtoRGB(input);
    return RGBtoHSV(input);
}

function RGBAtoCMYK(input) {
    input = RGBAtoRGB(input);
    return RGBtoCMYK(input);
}

function HextoRGB(input) {
    // input format: #ffffff or ffffff
    try {
        input = input.replace('#', '');
        if (input.length !== 6) {
            return 'Invalid input';
        }
        input = input.match(/.{2}/g);
        for (let i = 0; i < input.length; i++) {
            input[i] = parseInt(input[i], 16);
        }
    } catch (error) {
        console.log(error)
        return 'Invalid input';
    }
    console.log(input)
    if (input.some((value) => value < 0 || value > 255)) {
        return 'Invalid input';
    }
    return `rgb(${input[0]}, ${input[1]}, ${input[2]})`;
}

function HextoRGBA(input) {
    input = HextoRGB(input);
    return RGBtoRGBA(input);
}

function HextoHSL(input) {
    input = HextoRGB(input);
    return RGBtoHSL(input);
}

function HextoHSV(input) {
    input = HextoRGB(input);
    return RGBtoHSV(input);
}

function HextoCMYK(input) {
    input = HextoRGB(input);
    return RGBtoCMYK(input);
}

function HSLtoRGB(input) {
    // input format: hsl(360, 100%, 100%) or hsl(360,100%,100%) or (360, 100%, 100%) or (360,100%,100%) or 360, 100%, 100% or 360,100%,100%
    try {
        input = input.replace('hsl(', '');
        input = input.replace(')', '');
        input = input.split(', ');
        input[0] = parseInt(input[0].trim());
        input[1] = parseInt(input[1].replace('%', '').trim());
        input[2] = parseInt(input[2].replace('%', '').trim());
    } catch (error) {
        console.log(error)
        return 'Invalid input';
    }
    console.log(input)
    if (input.length !== 3) {
        return 'Invalid input';
    }
    if (input[0] < 0 || input[0] > 360 || input[1] < 0 || input[1] > 100 || input[2] < 0 || input[2] > 100) {
        return 'Invalid input';
    }
    let h = input[0] / 360;
    let s = input[1] / 100;
    let l = input[2] / 100;
    let r, g, b;
    if (s === 0) {
        r = g = b = l;
    } else {
        let hue2rgb = (p, q, t) => {
            if (t < 0) {
                t += 1;
            }
            if (t > 1) {
                t -= 1;
            }
            if (t < 1 / 6) {
                return p + (q - p) * 6 * t;
            }
            if (t < 1 / 2) {
                return q;
            }
            if (t < 2 / 3) {
                return p + (q - p) * (2 / 3 - t) * 6;
            }
            return p;
        }
        let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        let p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function HSLtoRGBA(input) {
    input = HSLtoRGB(input);
    return RGBtoRGBA(input);
}

function HSLtoHex(input) {
    input = HSLtoRGB(input);
    return RGBtoHex(input);
}

function HSLtoHSV(input) {
    input = HSLtoRGB(input);
    return RGBtoHSV(input);
}

function HSLtoCMYK(input) {
    input = HSLtoRGB(input);
    return RGBtoCMYK(input);
}

function HSVtoRGB(input) {
    // input format: hsv(360, 100%, 100%) or hsv(360,100%,100%) or (360, 100%, 100%) or (360,100%,100%) or 360, 100%, 100% or 360,100%,100%
    try {
        input = input.replace('hsv(', '');
        input = input.replace(')', '');
        input = input.split(', ');
        input[0] = parseInt(input[0].trim());
        input[1] = parseInt(input[1].replace('%', '').trim());
        input[2] = parseInt(input[2].replace('%', '').trim());
    } catch (error) {
        console.log(error)
        return 'Invalid input';
    }
    console.log(input)
    if (input.length !== 3) {
        return 'Invalid input';
    }
    if (input[0] < 0 || input[0] > 360 || input[1] < 0 || input[1] > 100 || input[2] < 0 || input[2] > 100) {
        return 'Invalid input';
    }
    let h = input[0] / 360;
    let s = input[1] / 100;
    let v = input[2] / 100;
    let r, g, b;
    let i = Math.floor(h * 6);
    let f = h * 6 - i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            r = v;
            g = t;
            b = p;
            break;
        case 1:
            r = q;
            g = v;
            b = p;
            break;
        case 2:
            r = p;
            g = v;
            b = t;
            break;
        case 3:
            r = p;
            g = q;
            b = v;
            break;
        case 4:
            r = t;
            g = p;
            b = v;
            break;
        case 5:
            r = v;
            g = p;
            b = q;
            break;
    }
    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function HSVtoRGBA(input) {
    input = HSVtoRGB(input);
    return RGBtoRGBA(input);
}

function HSVtoHex(input) {
    input = HSVtoRGB(input);
    return RGBtoHex(input);
}

function HSVtoHSL(input) {
    input = HSVtoRGB(input);
    return RGBtoHSL(input);
}

function HSVtoCMYK(input) {
    input = HSVtoRGB(input);
    return RGBtoCMYK(input);
}

function CMYKtoRGB(input) {
    // input format: cmyk(100%, 100%, 100%, 100%) or cmyk(100%,100%,100%,100%) or (100%, 100%, 100%, 100%) or (100%,100%,100%,100%) or 100%, 100%, 100%, 100% or 100%,100%,100%,100%
    try {
        input = input.replace('cmyk(', '');
        input = input.replace(')', '');
        input = input.split(', ');
        input[0] = parseInt(input[0].replace('%', '').trim());
        input[1] = parseInt(input[1].replace('%', '').trim());
        input[2] = parseInt(input[2].replace('%', '').trim());
        input[3] = parseInt(input[3].replace('%', '').trim());
    } catch (error) {
        console.log(error)
        return 'Invalid input';
    }
    console.log(input)
    if (input.length !== 4) {
        return 'Invalid input';
    }
    if (input.some((value) => value < 0 || value > 100)) {
        return 'Invalid input';
    }
    let c = input[0] / 100;
    let m = input[1] / 100;
    let y = input[2] / 100;
    let k = input[3] / 100;
    let r = 1 - Math.min(1, c * (1 - k) + k);
    let g = 1 - Math.min(1, m * (1 - k) + k);
    let b = 1 - Math.min(1, y * (1 - k) + k);
    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function CMYKtoRGBA(input) {
    input = CMYKtoRGB(input);
    return RGBtoRGBA(input);
}

function CMYKtoHex(input) {
    input = CMYKtoRGB(input);
    return RGBtoHex(input);
}

function CMYKtoHSL(input) {
    input = CMYKtoRGB(input);
    return RGBtoHSL(input);
}

function CMYKtoHSV(input) {
    input = CMYKtoRGB(input);
    return RGBtoHSV(input);
}