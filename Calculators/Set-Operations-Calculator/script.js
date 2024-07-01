var set = document.querySelectorAll(".set input");
var setAnode = set[0];
var setBnode = set[1];
var ans = document.getElementById("ans");
var extraOpt = document.getElementById("ext-opt")
var extraOpts = document.querySelectorAll("#ext-opt .opt")

function checkSets() {
    let setAVal = setAnode.value;
    let setBVal = setBnode.value;
    try {
        setAVal = setAVal.replaceAll("{", '[').replaceAll("}", ']').replaceAll("(", '[').replaceAll(")", ']').trim();
        let setA = new Set(eval(setAVal));
        setBVal = setBVal.replaceAll("{", '[').replaceAll("}", ']').replaceAll("(", '[').replaceAll(")", ']').trim();
        let setB = new Set(eval(setBVal));
        setA = Array.from(setA);
        setB = Array.from(setB);
        if (setA == '' && setB == '') throw "Sets are empty";
        return [setA, setB];

    } catch (err) {
        if (ReferenceError) {
            ans.innerHTML = 'Wrong Format inserted';
        } else if (SyntaxError) {
            ans.innerHTML = 'Wrong Format';
        } else {
            ans.innerHTML = err;
        }
    }

}

function printSets(funcArr) {
    funcArr = JSON.stringify(funcArr);
    funcArr = funcArr.replaceAll("[", "(").replaceAll("]", ")")
    funcArr = funcArr.slice(1, funcArr.length - 1);
    return funcArr;
}

function union(obj) {
    let funcArr = [];
    let testArr = [];
    let setA = checkSets()[0];
    let setB = checkSets()[1];
    funcArr = funcArr.concat(setA);
    testArr = JSON.stringify(funcArr);
    setB.forEach(val => {
        if (Array.isArray(val) == true) {
            if (testArr.includes(JSON.stringify(val)) == false) {
                funcArr.push(val);
            }
        } else {
            if (funcArr.includes(val) == false) {
                funcArr.push(val);
            }
        }
    });
    funcArr = printSets(funcArr);
    ans.innerHTML = `A U B is {${funcArr}}`;
    extraOpt.style.display = 'none';
}


function inter(obj) {
    let funcArr = [];
    let testArr = [];
    let setA = checkSets()[0];
    let setB = checkSets()[1];
    testArr = testArr.concat(setA);
    testArr = JSON.stringify(testArr);
    setB.forEach(val => {
        if (Array.isArray(val) == true) {
            if (testArr.includes(JSON.stringify(val)) == true) {
                funcArr.push(val);
            }
        } else {
            if (setA.includes(val) == true) {
                funcArr.push(val);
            }
        }
    });
    funcArr = printSets(funcArr);
    ans.innerHTML = `A ∩ B is {${funcArr}}`;
    extraOpt.style.display = 'none';
}

function diff(obj) {
    let setA = checkSets()[0];
    let setB = checkSets()[1];
    obj.classList.add("clicked");
    extraOpt.style.display = 'flex';
    extraOpts[0].textContent = 'A - B';
    extraOpts[1].textContent = 'B - A';
    ans.innerHTML = 'Please Choose one option';
    extraOpts[0].addEventListener("click", function () {
        difference(setA, setB, this)
    });
    extraOpts[1].addEventListener("click", function () {
        difference(setB, setA, this)
    });
    obj.classList.remove("clicked");
}

function difference(a, b, obj) {
    let funcArr = [];
    let testArr = [];
    let bStr;
    testArr = testArr.concat(a);
    bStr = JSON.stringify(b);
    testArr.forEach(val => {
        if (Array.isArray(val) == true) {
            if (bStr.includes(JSON.stringify(val)) == false) {
                funcArr.push(val);
            }
        } else {
            if (b.includes(val) == false) {
                funcArr.push(val);
            }
        }
    });
    funcArr = printSets(funcArr);
    ans.innerHTML = `${obj.textContent} is {${funcArr}}`;
    extraOpt.style.display = 'none';
}

function card(obj) {
    let setA = checkSets()[0];
    let setB = checkSets()[1];
    extraOpt.style.display = 'flex';
    extraOpts[0].textContent = 'n(A)';
    extraOpts[1].textContent = 'n(B)';
    ans.innerHTML = 'Please Choose one option';
    extraOpts[0].addEventListener("click", function () {
        cardinality(setA, this);
    });
    extraOpts[1].addEventListener("click", function () {
        cardinality(setB, this);
    });
}

function cardinality(set, obj) {
    obj.classList.add("clicked");
    answer = set.length;
    ans.innerHTML = `${obj.textContent} is ${answer}`;
    extraOpt.style.display = 'none';
}

function prod(obj) {
    obj.classList.add("clicked");
    let setA = checkSets()[0];
    let setB = checkSets()[1];
    extraOpt.style.display = 'flex';
    extraOpts[0].textContent = 'A X B';
    extraOpts[1].textContent = 'B X A';
    ans.innerHTML = 'Please Choose one option';
    extraOpts[0].addEventListener("click", function () {
        cartProd(setA, setB, this);
    });
    extraOpts[1].addEventListener("click", function () {
        cartProd(setB, setA, this);
    });

}

function cartProd(a, b, obj) {
    obj.classList.add("clicked");
    let final = [];
    a.forEach(valA => {
        b.forEach(valB => {
            final.push([valA, valB])
        });
    });
    funcArr = printSets(final);
    ans.innerHTML = `${obj.textContent} is {${funcArr}}`;
    extraOpt.style.display = 'none';
}

function pow(obj) {
    obj.classList.add("clicked");
    let setA = checkSets()[0];
    let setB = checkSets()[1];
    extraOpt.style.display = 'flex';
    extraOpts[0].textContent = 'P(A)';
    extraOpts[1].textContent = 'P(B)';
    ans.innerHTML = 'Please Choose one option';
    extraOpts[0].addEventListener("click", function () {
        power(setA, this);
    });
    extraOpts[1].addEventListener("click", function () {
        power(setB, this);
    });
}

function power(set, obj) {
    obj.classList.add("clicked");
    let final = [
        []
    ];
    for (const el of set) {
        const last = final.length - 1;
        for (let i = 0; i <= last; i++) {
            final.push([...final[i], el]);
        }
    }
    final = JSON.stringify(final);
    final = final.replaceAll("[", "{").replaceAll("]", "}");
    ans.innerHTML = `${obj.textContent} is ${final}`
    extraOpt.style.display = 'none';
}
