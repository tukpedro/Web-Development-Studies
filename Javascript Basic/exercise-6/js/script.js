var fruits = ['Bananas', 'Apples', 'Grapes', 'Mangos'];

console.log(fruits.length);



for (var y = 0; y < fruits.length; y++){
    console.log(fruits[y]);
}

var x = 1;

while (x <= 10){
    var y = 1;
    document.write('Tabuada de ' + x + ':<br>' + '<br>');
    while(y <= 10){
        document.write(x + ' x ' + y + ' = ' + (x * y) + '<br><br>');
        y++;
    }
    x++;
    document.write('<hr>' + '<br>');
}