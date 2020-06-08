function calculate(type, value) {
   if (type === 'operation'){
        if (value === 'clear'){
            document.getElementById('result').value = '';
        }
        if (value === '+' || value === '-' || value === '*' || value === '/' || value === '.'){
            document.getElementById('result').value += value;
        }
        if (value === '='){
            var fieldValue = eval(document.getElementById('result').value);
            document.getElementById('result').value = fieldValue;
        }
   }
   else if (type === 'value'){
       document.getElementById('result').value += value;
   }
}