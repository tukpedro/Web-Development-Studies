var itens = ['Chair', 'Printer', 'Fork'];

function addItem() {
    var item = document.getElementById('main-input').value;
    if (item == ''){
        alert('Type a valid item')
    }
    else if (itens.indexOf(item) === -1){
        itens.push(item);
        console.log(itens);
        document.getElementById('main-input').value = '';
    }
    else {
        alert('Item already added')
    }
}

function sortItens() {
    console.log(itens.sort());
}