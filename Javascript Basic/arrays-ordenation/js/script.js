var fruits = [12,40,3,7,19,1];

console.log(fruits.sort(numOrdenation));

function numOrdenation(a, b) {
    return a -b;
    // < 0 = a ordenado antes de b
    // > 0 = b ordenado antes de a
    // == a ordem se mantem
}