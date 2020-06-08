var fruits = ['Bananas', 'Apples', 'Pinapples', 'Grapes'];

console.log(fruits.indexOf('Pinapples'));

if (fruits.indexOf('Grapes') === -1){
    console.log('Element does not exist')
}
else {
    console.log('Element on index: ' + fruits.indexOf('Grapes'))
}