let fInput = document.querySelector(".firstInput");
let sInput = document.querySelector(".secondaryInput");
let oneButton = document.querySelector("#one");
let twoButton = document.querySelector("#two");
let threeButton = document.querySelector("#three");
let fourButton = document.querySelector("#four");
let fiveButton = document.querySelector("#five");
let sixButton = document.querySelector("#six");
let sevenButton = document.querySelector("#seven");
let eightButton = document.querySelector("#eight");
let nineButton = document.querySelector("#nine");
let zeroButton = document.querySelector("#zero");
let dotButton = document.querySelector("#dot");
let equalButton = document.querySelector("#equals");
let plusButton = document.querySelector("#plus");
let minusButton = document.querySelector("#minus");
let divisionButton = document.querySelector("#division");
let multiplicationButton = document.querySelector("#multiplication");
let clearButton = document.querySelector("#clear");
let negativeButton = document.querySelector("#negative");
let percentButton = document.querySelector("#percent");

fInput.textContent = 0;
let currentValue = 0;
let numberInMemory = 0;
let deystvie = null;
let isDotted = false;
let isDottedNum = 1;
let toFixedNum = 0;
let toFixedNumInMemory = 0;
const f = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );
function dotCheck() {
    if (f(currentValue)<f(numberInMemory)) {
        return f(numberInMemory)
    }
    else {
        return f(currentValue);
    }
}






function afterNumber() {
    if (deystvie === "="){
        deystvie = null;
        currentValue = 0;
        numberInMemory = 0;
    }
}
let nine = nineButton.addEventListener("click", function() {
    afterNumber();
    if (isDotted) {
        isDottedNum = isDottedNum * 0.1;
        toFixedNum = toFixedNum + 1;
        currentValue = currentValue + isDottedNum*9;
        currentValue = Number(currentValue.toFixed(toFixedNum));
        fInput.textContent = currentValue;
    }
    else if (!isDotted) {
        currentValue = currentValue*10 + 9;
        fInput.textContent = currentValue; 
    }
});
let eight = eightButton.addEventListener("click", function() {
    afterNumber();
    if (isDotted) {
        isDottedNum = isDottedNum * 0.1;
        toFixedNum = toFixedNum + 1;
        currentValue = currentValue + isDottedNum*8;
        currentValue = Number(currentValue.toFixed(toFixedNum));
        fInput.textContent = currentValue;
    }
    else if (!isDotted) {
        currentValue = currentValue*10 + 8;
        fInput.textContent = currentValue; 
    }
});
let seven = sevenButton.addEventListener("click", function() {
    afterNumber();
    if (isDotted) {
        isDottedNum = isDottedNum * 0.1;
        toFixedNum = toFixedNum + 1;
        currentValue = currentValue + isDottedNum*7;
        currentValue = Number(currentValue.toFixed(toFixedNum));
        fInput.textContent = currentValue;
    }
    else if (!isDotted) {
        currentValue = currentValue*10 + 7;
        fInput.textContent = currentValue; 
    }
});
let six = sixButton.addEventListener("click", function() {
    afterNumber();
    if (isDotted) {
        isDottedNum = isDottedNum * 0.1;
        toFixedNum = toFixedNum + 1;
        currentValue = currentValue + isDottedNum*6;
        currentValue = Number(currentValue.toFixed(toFixedNum));
        fInput.textContent = currentValue;
    }
    else if (!isDotted) {
        currentValue = currentValue*10 + 6;
        fInput.textContent = currentValue; 
    }
});
let five = fiveButton.addEventListener("click", function() {
    afterNumber();
    if (isDotted) {
        isDottedNum = isDottedNum * 0.1;
        toFixedNum = toFixedNum + 1;
        currentValue = currentValue + isDottedNum*5;
        currentValue = Number(currentValue.toFixed(toFixedNum));
        fInput.textContent = currentValue;
    }
    else if (!isDotted) {
        currentValue = currentValue*10 + 5;
        fInput.textContent = currentValue; 
    }
});
let four = fourButton.addEventListener("click", function() {
    afterNumber();
    if (isDotted) {
        isDottedNum = isDottedNum * 0.1;
        toFixedNum = toFixedNum + 1;
        currentValue = currentValue + isDottedNum*4;
        currentValue = Number(currentValue.toFixed(toFixedNum));
        fInput.textContent = currentValue;
    }
    else if (!isDotted) {
        currentValue = currentValue*10 + 4;
        fInput.textContent = currentValue; 
    }
});
let three = threeButton.addEventListener("click", function() {
    afterNumber();
    if (isDotted) {
        isDottedNum = isDottedNum * 0.1;
        toFixedNum = toFixedNum + 1;
        currentValue = currentValue + isDottedNum*3;
        currentValue = Number(currentValue.toFixed(toFixedNum));
        fInput.textContent = currentValue;
    }
    else if (!isDotted) {
        currentValue = currentValue*10 + 3;
        fInput.textContent = currentValue; 
    }
});
let two = twoButton.addEventListener("click", function() {
    afterNumber();
    if (isDotted) {
        isDottedNum = isDottedNum * 0.1;
        toFixedNum = toFixedNum + 1;
        currentValue = currentValue + isDottedNum*2;
        currentValue = Number(currentValue.toFixed(toFixedNum));
        fInput.textContent = currentValue;
    }
    else if (!isDotted) {
        currentValue = currentValue*10 + 2;
        fInput.textContent = currentValue; 
    }
});
let one = oneButton.addEventListener("click", function() {
    afterNumber();
    if (isDotted) {
        isDottedNum = isDottedNum * 0.1;
        toFixedNum = toFixedNum + 1;
        currentValue = currentValue + isDottedNum*1;
        currentValue = Number(currentValue.toFixed(toFixedNum));
        fInput.textContent = currentValue;
    }
    else if (!isDotted) {
        currentValue = currentValue*10 + 1;
        fInput.textContent = currentValue; 
    }
});
let zero = zeroButton.addEventListener("click", function() {
    afterNumber();
    if (isDotted) {
        if (currentValue === 0) {
            isDottedNum = isDottedNum * 0.1;
            toFixedNum = toFixedNum + 1;
            currentValue = currentValue;
            fInput.textContent = currentValue + "." + "0".repeat(toFixedNum);
        }
        else {
            isDottedNum = isDottedNum * 0.1;
            toFixedNum = toFixedNum + 1;
            currentValue = currentValue;
            fInput.textContent = fInput.textContent + "0";
        }
    }
    else if (!isDotted) {
        currentValue = currentValue*10;
        fInput.textContent = currentValue; 
    }
});

dotButton.addEventListener("click",dotFunc);
function dotFunc() {
    if (!isDotted) {
        isDotted=true;
        fInput.textContent = currentValue + ".";
    }
    else {
        null
    }
}
function notDotFunc() {
    isDotted=false;
    isDottedNum = 1;
    toFixedNum = 0;
    percentNumber = null;
    prom = null;
    multiprom = null
}
function toFixedFunc() {
    toFixedNum = 1/isDottedNum;
}

clearButton.addEventListener("click",c)
function c() {
    notDotFunc()
    fInput.textContent = 0;
    currentValue = 0;
    numberInMemory = 0;
    sInput.textContent = "";
    deystvie = null;
    isDotted = false;
    isDottedNum = 1;
    toFixedNum = 0;
    toFixedNumInMemory = 0;
}

plusButton.addEventListener("click",plusFunc);
function plusFunc() {
    if (deystvie === "+"){
        deystvie = "+";
        numberInMemory = numberInMemory + currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }
    
    else if (deystvie === "-") {
        deystvie = "+";
        numberInMemory = numberInMemory - currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "x") {
        deystvie = "+";
        numberInMemory = numberInMemory * currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "/") {
        deystvie = "+";
        numberInMemory = numberInMemory / currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "%+") {
        deystvie = "+";
        numberInMemory = numberInMemory - prom + multiprom
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if(deystvie === "%-") {
        deystvie = "+";
        numberInMemory = numberInMemory + prom - multiprom;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }
    
    else if(deystvie === "%x") {
        deystvie = "+";
        fInput.textContent = numberInMemory;
        currentValue = 0;
        notDotFunc();
    }

    else if(deystvie === "%/") {
        deystvie = "+";
        fInput.textContent = numberInMemory;
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "=") {
        deystvie = "+";
        numberInMemory = currentValue;
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "%=") {
        deystvie = "+";
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === null) {
        numberInMemory += currentValue;
        deystvie = "+";
        currentValue = 0; 
        notDotFunc();
    }
}

minusButton.addEventListener("click",minusFunc);
function minusFunc() {
    if (deystvie === "-"){
        deystvie = "-";
        numberInMemory = numberInMemory - currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "+") {
        deystvie = "-";
        numberInMemory = numberInMemory + currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "x") {
        deystvie = "-";
        numberInMemory = numberInMemory * currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "/") {
        deystvie = "-";
        numberInMemory = numberInMemory / currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }
    
    else if (deystvie === "%+") {
        deystvie = "-";
        numberInMemory = numberInMemory - prom + multiprom
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if(deystvie === "%-") {
        deystvie = "-";
        numberInMemory = numberInMemory + prom - multiprom
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if(deystvie === "%x") {
        deystvie = "-";
        fInput.textContent = numberInMemory;
        currentValue = 0;
        notDotFunc();
    }

    else if(deystvie === "%/") {
        deystvie = "-";
        fInput.textContent = numberInMemory;
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "=") {
        deystvie = "-";
        numberInMemory = currentValue;
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "%=") {
        deystvie = "-";
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === null) {
        numberInMemory =  currentValue;
        deystvie = "-";
        currentValue = 0; 
        notDotFunc();
    }
}

multiplicationButton.addEventListener("click",multiplicationFunc);
function multiplicationFunc() {
    if (deystvie === "x"){
        deystvie = "x";
        numberInMemory = numberInMemory * currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "-"){
        deystvie = "x";
        numberInMemory = numberInMemory - currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "+") {
        deystvie = "x";
        numberInMemory = numberInMemory + currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "/") {
        deystvie = "x";
        numberInMemory = numberInMemory / currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "%+") {
        deystvie = "x";
        numberInMemory = numberInMemory - prom + multiprom
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if(deystvie === "%-") {
        deystvie = "x";
        numberInMemory = numberInMemory + prom - multiprom
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if(deystvie === "%x") {
        deystvie = "x";
        fInput.textContent = numberInMemory;
        currentValue = 0;
        notDotFunc();
    }

    else if(deystvie === "%/") {
        deystvie = "x";
        fInput.textContent = numberInMemory;
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "=") {
        deystvie = "x";
        numberInMemory = currentValue;
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "%=") {
        deystvie = "x";
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === null) {
        numberInMemory =  currentValue;
        deystvie = "x";
        currentValue = 0; 
        notDotFunc();
    }
}

divisionButton.addEventListener("click",divisionFunc);
function divisionFunc() {
    if (deystvie === "/"){
        deystvie = "/";
        numberInMemory = numberInMemory / currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "-"){
        deystvie = "/";
        numberInMemory = numberInMemory - currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "+") {
        deystvie = "/";
        numberInMemory = numberInMemory + currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "x") {
        deystvie = "/";
        numberInMemory = numberInMemory * currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "%+") {
        deystvie = "/";
        numberInMemory = numberInMemory - prom + multiprom
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if(deystvie === "%-") {
        deystvie = "/";
        numberInMemory = numberInMemory + prom - multiprom
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if(deystvie === "%x") {
        deystvie = "/";
        fInput.textContent = numberInMemory;
        currentValue = 0;
        notDotFunc();
    }

    else if(deystvie === "%/") {
        deystvie = "/";
        fInput.textContent = numberInMemory;
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "=") {
        deystvie = "/";
        numberInMemory = currentValue;
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === "%=") {
        deystvie = "/";
        currentValue = 0;
        notDotFunc();
    }

    else if (deystvie === null) {
        numberInMemory = currentValue;
        deystvie = "/";
        currentValue = 0; 
        notDotFunc();
    }
}


negativeButton.addEventListener("click",negativeFunc);
function negativeFunc() {
    if (deystvie === "%+" || deystvie === "%-") {
        multiprom = multiprom * (-1);
        fInput.textContent = multiprom;
    }
    else {
        currentValue = currentValue*(-1);
        fInput.textContent = currentValue;
    }
}


percentButton.addEventListener("click", percentFunc);
let percentNumber = null;
let prom = null;
let multiprom = null
function percentFunc() {
    if (deystvie === "+") {
        deystvie = "%+";
        percentNumber = numberInMemory/100;
        if (toFixedNumInMemory<=f(percentNumber)) {
            toFixedNumInMemory = f(percentNumber)
        }
        prom = numberInMemory * (currentValue/100);
        prom = parseFloat(+prom.toFixed(toFixedNumInMemory));
        multiprom = prom;
        fInput.textContent = prom;
        numberInMemory = numberInMemory + prom;
        currentValue = 0;
    }
    else if (deystvie === "-") {
        deystvie = "%-";
        percentNumber = numberInMemory/100;
        if (toFixedNumInMemory<=f(percentNumber)) {
            toFixedNumInMemory = f(percentNumber)
        }
        prom = numberInMemory * (currentValue/100);
        prom = parseFloat(+prom.toFixed(toFixedNumInMemory));
        multiprom = prom;
        fInput.textContent = prom;
        numberInMemory = numberInMemory - prom;
        currentValue = 0;
    }
    else if (deystvie === "%+") {
        if(toFixedNumInMemory<= (f(multiprom)+f(percentNumber))) {
            toFixedNumInMemory = (f(multiprom)+f(percentNumber))
        }
        multiprom = multiprom * percentNumber;
        multiprom = parseFloat(+multiprom.toFixed(toFixedNumInMemory));
        fInput.textContent = multiprom;
    }
    else if (deystvie === "%-") {
        if(toFixedNumInMemory<= (f(multiprom)+f(percentNumber))) {
            toFixedNumInMemory = (f(multiprom)+f(percentNumber))
        }
        multiprom = multiprom * percentNumber;
        multiprom = parseFloat(+multiprom.toFixed(toFixedNumInMemory));
        fInput.textContent = multiprom;
    }
    else if (deystvie === "x") {
        prom = currentValue * 0.01;
        fInput.textContent = prom;
        currentValue = 0;
        if(toFixedNumInMemory<= (f(numberInMemory)+f(prom))) {
            toFixedNumInMemory = (f(numberInMemory)+f(prom))
        }
        numberInMemory = numberInMemory * prom;
        numberInMemory = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        deystvie = "%x";
    }
    else if (deystvie = "%x") {
        prom = prom * 0.01;
        fInput.textContent = prom;
        currentValue = 0;
        if(toFixedNumInMemory<= (f(numberInMemory)+f(prom))) {
            toFixedNumInMemory = (f(numberInMemory)+f(prom))
        }
        numberInMemory = numberInMemory * 0.01;
        numberInMemory = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
    }

    else if (deystvie === "/") {
        prom = currentValue * 0.01;
        fInput.textContent = prom;
        currentValue = 0;
        if(toFixedNumInMemory<= (f(numberInMemory)+f(prom))) {
            toFixedNumInMemory = (f(numberInMemory)+f(prom))
        }
        numberInMemory = numberInMemory / prom;
        numberInMemory = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        deystvie = "%/";
    }

    else if (deystvie = "%/") {
        prom = prom * 0.01;
        fInput.textContent = prom;
        currentValue = 0;
        if(toFixedNumInMemory<= (f(numberInMemory)+f(prom))) {
            toFixedNumInMemory = (f(numberInMemory)+f(prom))
        }
        numberInMemory = numberInMemory / 0.01;
        numberInMemory = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
    }
}


equalButton.addEventListener("click",equal)
function equal() {
    if (deystvie === "+") {
        currentValue = numberInMemory + currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+currentValue.toFixed(toFixedNumInMemory));
        deystvie = "=";
        notDotFunc();
    }
    else if (deystvie === "-") {
        currentValue = numberInMemory - currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+currentValue.toFixed(toFixedNumInMemory));
        deystvie = "=";
        notDotFunc();
    }
    else if (deystvie === "x") {
        currentValue = numberInMemory * currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+currentValue.toFixed(toFixedNumInMemory));
        deystvie = "=";
        notDotFunc();
    }
    else if (deystvie === "/") {
        currentValue = numberInMemory / currentValue;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+currentValue.toFixed(toFixedNumInMemory));
        deystvie = "=";
        notDotFunc();
    }

    else if (deystvie === "%+") {
        deystvie = "%=";
        numberInMemory = numberInMemory - prom + multiprom;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if(deystvie === "%-") {
        deystvie = "%=";
        numberInMemory = numberInMemory + prom - multiprom;
        if (toFixedNumInMemory <= toFixedNum) {
            toFixedNumInMemory = toFixedNum;
        }
        fInput.textContent = parseFloat(+numberInMemory.toFixed(toFixedNumInMemory));
        currentValue = 0;
        notDotFunc();
    }

    else if(deystvie === "%x") {
        deystvie = "%=";
        fInput.textContent = numberInMemory;
        currentValue = 0;
        notDotFunc();
    }

    else if(deystvie === "%/") {
        deystvie = "%=";
        fInput.textContent = numberInMemory;
        currentValue = 0;
        notDotFunc();
    }
}


