function verifyAge(){

    var age = document.getElementById('age-typed').value;

    if (age >= 0 && age < 15){
        document.getElementById('result').innerHTML = 'Child';
    }
    else if (age >= 15 && age < 30){
        document.getElementById('result').innerHTML = "Young";
    }
    else if (age >= 30 && age < 60){
        document.getElementById('result').innerHTML ='Adult';
    }
    else {
        document.getElementById('result').innerHTML = 'Old';
    }
}