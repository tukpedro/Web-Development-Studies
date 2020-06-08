function sum(n1, n2) {
    return n1 +n2;
}

document.write(sum(8, 45));

document.write("<br><br>")

var age = prompt("Type your age:");

function validateAge(age){
    var validate;

    if (age >= 18){
        validate = true;
    }
    else {
        validate = false;
    }

    return validate;
}

document.write(validateAge(age));

document.write("<br><br>")

function setReplace(phrase, name, new_name) {
    return phrase.replace(name, new_name);
}

document.write(setReplace("Go Japan", "Japan", "Brazil"));