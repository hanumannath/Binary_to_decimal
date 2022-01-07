let decimal = 0;
//function to flip binary to decimal and decimal to bnary
function iconfunction() {
    document.getElementById('input1').value="";
    decimal = !decimal;
    if (decimal == 1) {
        document.getElementById('head').innerHTML = "Decimal to binary";
        document.getElementById('input1').placeholder = "enter a decimal number";
        document.getElementById('head3').innerHTML = "";
    } else {
        document.getElementById('head').innerHTML = "Binary to decimal";
        document.getElementById('head3').innerHTML = "";
        document.getElementById('input1').placeholder = "enter a binary number";

    }
}
let input = document.querySelector('input');
input.addEventListener('input', updateValue);
//function for adjustement of input
function updateValue() {
    document.getElementById('input1').placeholder = "";
    let error = document.getElementById('head4');
    error.innerHTML = " ";
    if (decimal == 0) {
        document.getElementById('head3').innerHTML = "enter a binary number";
        document.getElementById('head3').style.color = "#0275d8";
    } else {
        document.getElementById('head3').style.color = "#0275d8";
        document.getElementById('head3').innerHTML = "enter a decimal number";
    }
}
//function to check input is binary or not
function checkbinary(str) {
    let isBinary = true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "0" || str[i] == "1") {
            isBinary = true;
        }
        else {
            isBinary = false;
        }
    }
    return isBinary;
}
//function to check input is valid decimal or not

function checkdecimal(str) {
    let isdecimal = true;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "0" || str[i] == "1" || str[i] == "2" || str[i] == "3" || str[i] == "4" || str[i] == "5" || str[i] == "6" || str[i] == "7" || str[i] == "8" || str[i] == "9") {
            isdecimal = true;
        }
        else {
            isdecimal = false;
        }
    }
    return isdecimal;
}
//function to valiadate input

function valiadateinput() {
    let inp = document.getElementById('input1').value;
    if (decimal == 0) {
        const isBinary = checkbinary(inp);
        if (isBinary == 1) {
            let decimal1 = parseInt(inp, 2);

            let result = document.getElementById('head4');
            result.innerHTML = "decimal is:" + decimal1;

        }
        else {
            displayError("please enter a valid binary number");

        }
    } else {
        if (checkdecimal(inp)) {
            const temp = parseInt(inp);

            let binary = temp.toString(2);

            let error = document.getElementById('head4');
            error.innerHTML = "binary is is:" + binary;

        } else {
            displayError("please enter a valid decimal number");
        }
    }
}

//function to display error when input is invalid

function displayError(str) {
    if (decimal == 0) {
        let error = document.getElementById('head4');
        error.innerHTML = str;
        document.getElementById('but').style.marginTop = "120px";
        setTimeout(function () {
            error.innerHTML = '';
            document.getElementById('but').style.marginTop = "110px";
        }, 3000);
    } else {
        let error = document.getElementById('head4');
        error.innerHTML = str;
        document.getElementById('but').style.marginTop = "120px";
        setTimeout(function () {
            error.innerHTML = '';
            document.getElementById('but').style.marginTop = "110px";
        }, 3000);

    }
}
