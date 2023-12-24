
        function calculate() {
            const shape = document.getElementById("shape").value;
            const input1 = parseFloat(document.getElementById("input1").value);
            const input2 = parseFloat(document.getElementById("input2").value);

            let result;

            switch (shape) {
                case "rectangle":
                    result = `Perimeter: ${2 * (input1 + input2)}, Area: ${input1 * input2}`;
                    break;
                case "square":
                    result = `Perimeter: ${4 * input1}, Area: ${input1 ** 2}`;
                    break;
                case "circle":
                    result = `Perimeter: ${2 * Math.PI * input1}, Area: ${Math.PI * input1 ** 2}`;
                    break;
                case "triangle":
                    result = `Perimeter: ${input1 + input2 + input2}, Area: ${0.5 * input1 * input2}`;
                    break;
                default:
                    result = "Invalid shape";
            }

            document.getElementById("result").innerHTML = result;
        }
 