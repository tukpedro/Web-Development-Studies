var fruits = ['Banana', 'Apple'];

fruits.unshift('Lemon');

fruits.pop();

fruits.shift();

fruits.push('Orange');

console.log(fruits);


var pcBuild = ['CPU', 'GPU', 'MOBA', 'RAM']
pcBuild['CPU'] = ['i3', 'i5', 'i7', 'i9', 'Ryzen3', 'Ryzen5', 'Ryzen7', 'Ryzen9'];
pcBuild['GPU'] = ['GTX1650', 'GTX1660', 'GTX1660ti', 'RTX2060', 'RTX2070', 'RTX2080'];
pcBuild['MOBA'] = ['Aorus', 'Gigabyte', 'ASRock'];
pcBuild['RAM'] = ['XPG', 'Corsair', 'Kingstom']

pcBuild['MOBA'].push('Biostar');

console.log(pcBuild)
