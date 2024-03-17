const forms = document.querySelectorAll("[data-form]");
forms.forEach((form) => {
    if (form.dataset.form === "length") {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const lengthUnits = {
                km: 1,
                hm: 10,
                dam: 100,
                m: 1000,
                dm: 10000,
                cm: 100000,
                mm: 1000000,
            };

            const number = e.target.number.value;
            const from = e.target.from.value;
            const to = e.target.to.value;
            let res = 0;
            let diff = 1;

            if (lengthUnits[from] > lengthUnits[to]) {
                diff = lengthUnits[from] / lengthUnits[to];
                res = number / diff;
            } else {
                diff = lengthUnits[to] / lengthUnits[from];
                res = number * diff;
            }

            alert(`Conversion of ${from} to ${to} length unit:
      ${number}${from} = ${res}${to}`);
        });
    } else if (form.dataset.form === "weight") {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const weightUnits = {
                kg: 1,
                hg: 10,
                dag: 100,
                g: 1000,
                dg: 10000,
                cg: 100000,
                mg: 1000000,
            };

            const number = e.target.number.value;
            const from = e.target.from.value;
            const to = e.target.to.value;
            let res = 0;
            let diff = 1;

            if (weightUnits[from] > weightUnits[to]) {
                diff = weightUnits[from] / weightUnits[to];
                res = number / diff;
            } else {
                diff = weightUnits[to] / weightUnits[from];
                res = number * diff;
            }

            alert(`Conversion of ${from} to ${to} weight unit:
      ${number}${from} = ${res}${to}`);
        });
    }
});
