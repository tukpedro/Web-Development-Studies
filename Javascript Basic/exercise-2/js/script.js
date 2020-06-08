function verifyCMI() {
    var name = document.getElementById('name-typed').value;
    var height = document.getElementById('height-typed').value;
    var weight = document.getElementById('weight-typed').value;

    height = parseFloat(height)/100;
    weight = parseFloat(weight);

    var cmi = (weight / (height * height));
    var classification;

    if (cmi < 16){
        classification = ('Low weight critical');
    }
    else if (cmi >= 16 && cmi < 16){
        classification = ('Low weight severe');
    }
    else if (cmi >= 17 && cmi < 18.5){
        classification = ('Low weight');
    }
    else if (cmi >= 18.5 && cmi < 25){
        classification = ('Normal weight');
    }
    else if (cmi >= 25 && cmi < 30){
        classification = ('Overweight');
    }
    else if (cmi >= 30 && cmi < 35){
        classification = ('Obesity I');
    }
    else if (cmi >= 35 && cmi < 40){
        classification = ('Obesity II');
    }
    else {
        classification = ('Obesity III');
    }

    document.write(name + ' has a Corporal Mass Index of ' + cmi + ', being classified as: '+ classification);
}