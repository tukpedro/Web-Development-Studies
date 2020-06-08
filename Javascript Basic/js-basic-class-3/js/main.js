

var age = prompt("Type your age: ");

if (age >= 18){
    document.write("Older" + "<br><br>")
}
else {
    document.write("Under age" + "<br><br>")
}

var count = 0;

while (count < 5){
    document.write(count);
    count ++;
}

document.write("<br><br>");

for (var i = 0; i <=5; i++){
    document.write(i);
}

document.write("<br><br>");

var date = new Date();
document.write(date.getFullYear());