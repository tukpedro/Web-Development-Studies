function calculate(num1, num2, operation) {
    var num1 = document.getElementById('num1').value;
    var operator = document.getElementById('operation').value;
    var num2 = document.getElementById('num2').value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    switch (operator) {
        case 'sum' : document.write(num1 + num2);
        break;

        case 'substraction' : document.write(num1 - num2);
        break;

        case 'multiplication' : document.write(num1 * num2);
        break;

        case 'division': document.write(num1 / num2);
        break;

        default : document.write('Error')
    }
}