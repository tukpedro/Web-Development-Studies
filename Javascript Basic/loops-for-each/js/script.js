var list = ['Pedro', 'Alex', 'Alan', 'Luana'];

console.log(list);

list.forEach(function (value, index, array){
    console.log('Index:' + index + ' |value: ' + value);
    if (value == 'Luana'){
        array[index] = 'New name';
    }
})

console.log(list);

var f = function(value, index) {
    console.log(value, index);
}

list.forEach(f);