'use strict'

function cubicSolve(a, b, c, d) {
    b /= a
    c /= a
    d /= a

    let s, t
    let q = (3.0 * c - (b * b)) / 9.0
    const r = (-(27.0 * d) + b * (9.0 * c - 2.0 * (b * b))) / 54.0

    const discrim = q * q * q + r * r

    const roots = [
        { real: 0, i: 0 },
        { real: 0, i: 0 },
        { real: 0, i: 0 }
    ]

    const term1 = b / 3.0;

    // one root real, two are complex
    if (discrim > 0) {
        const temp = 1.0 / 3.0
        s = r + Math.sqrt(discrim)
        s = ((s < 0) ? -Math.pow(-s, temp) : Math.pow(s, temp))
        t = r - Math.sqrt(discrim)
        t = ((t < 0) ? -Math.pow(-t, temp) : Math.pow(t, temp))

        roots[0].real = -term1 + s + t
        roots[2].real = roots[1].real = - (term1 + ((s + t) / 2.0))
        roots[1].i = Math.sqrt(3.0) * (-t + s) / 2
        roots[2].i = - roots[1].i

        return roots
    }
    // The remaining options are all real
    // All roots real, at least two are equal.
    else if (discrim === 0) {
        if (r < 0) {
            const r13 = -Math.pow(-r, (1.0 / 3.0))
        } else {
            const r13 = Math.pow(r, (1.0 / 3.0))
        }

        roots[0].real = -term1 + 2.0 * r13
        roots[2].real = roots[1].real = -(r13 + term1)

        return roots
    }
    // Only option left is that all roots are real and unequal (to get here, q < 0)
    else {
        const dum1 = Math.acos(r / Math.sqrt(-q * -q * -q))
        const temp = -term1 + 2.0 * Math.sqrt(-q)

        roots[0].real = temp * Math.cos(dum1 / 3.0)
        roots[1].real = temp * Math.cos((dum1 + 2.0 * Math.PI) / 3.0)
        roots[2].real = temp * Math.cos((dum1 + 4.0 * Math.PI) / 3.0)

        return roots
    }
}

function calculate() {
    let [a, b, c, d] = [
        parseFloat(document.getElementById("a").value),
        parseFloat(document.getElementById("b").value),
        parseFloat(document.getElementById("c").value),
        parseFloat(document.getElementById("d").value),
    ]
    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && !isNaN(d)) {
        let output = document.querySelector("#roots")

        const res = cubicSolve(a, b, c, d)
        const display = (value) => {
            if (value.i === 0) return `${value.real.toFixed(2)}`
            else return `${value.real.toFixed(2)} + ${value.i.toFixed(2)} <i>i</i>`
        }
        output.innerHTML = `
            <div class="sol">
                <h2>Equation :</h2>
                <h3>${a}X<sup>3</sup> + ${b}X<sup>2</sup> + ${c}X + ${d} = 0 </h3>
                <h2>Roots: </h2>
                <ul>
                    <li>X<sub>1</sub> = ${display(res[0])}</li>
                    <li>X<sub>2</sub> = ${display(res[1])}</li>
                    <li>X<sub>3</sub> = ${display(res[2])}</li>
                </ul>
            </div>
            `
    } else {
        let output = document.querySelector("#roots")
        output.innerHTML = `Enter valid constants...`
    }
}