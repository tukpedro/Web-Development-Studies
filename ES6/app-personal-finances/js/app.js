
/*Criando a classe despesa que contem o metodo constutor com parametros com mesmo nome
 dos inputs atribuidos as novas vars locais*/
class Debt {

    /*Metodo construtor de parametros*/
    constructor(year, month, day, type, description, value){
        this.year = year;
        this.month = month;
        this.day = day;
        this.type = type;
        this.description = description;
        this.value = [value];
    }

    /*Metodo que valida os dados dos inputs:
    * Se o dado for indefinido, vazio ou nulo, retornara falso
    * */
    validate(){
        for(let i in this) {
            if(this[i] == undefined || this[i] == '' || this[i] == null) {
                return false;
            }
        }
        return true;
    }
}

class Bd {

    constructor() {
        let id = localStorage.getItem('id');

        if (id === null){
            localStorage.setItem('id', 0);
        }
    }

    getNextId(){
        let nextId =localStorage.getItem('id');
        return parseInt(nextId) + 1;
    }
    record(debt) {
        let id = this.getNextId();

        localStorage.setItem(id, JSON.stringify(debt));

        localStorage.setItem('id', id);
    }

    recoverAllRecords() {
        let debts = Array();

        let id = localStorage.getItem('id');

        for (let i = 0; i <= id; i++){

            let debt = JSON.parse(localStorage.getItem(i));

            if(debt === null) {
                continue
            }
            debt.id = i;
            debts.push(debt);
        }

        return debts;
    }

    search(debt){
        let filteredDebts = [];

        filteredDebts = this.recoverAllRecords();

        console.log(filteredDebts);
        console.log(debt);


        if (debt.year != '') {
            console.log('year filtered');
            filteredDebts = filteredDebts.filter(d => d.year == debt.year);
        }

        if (debt.month != '') {
            console.log('month filtered');
            filteredDebts = filteredDebts.filter(d => d.month == debt.month);
        }

        if (debt.day != '') {
            console.log('day filtered');
            filteredDebts = filteredDebts.filter(d => d.day == debt.day);
        }

        if (debt.type != '') {
            console.log('type filtered');
            filteredDebts = filteredDebts.filter(d => d.type == debt.type);
        }

        if (debt.description != '') {
            console.log('description filtered');
            filteredDebts = filteredDebts.filter(d => d.description == debt.description);
        }

        if (debt.value != '') {
            console.log('value filtered');
            filteredDebts = filteredDebts.filter(d => d.value == debt.value);
        }
        return filteredDebts;
    }

    remove(id){
        localStorage.removeItem(id);

    }
}

let bd = new Bd();


/*Captura os ids dos inputs e atribui cada um a uma var respectivamente*/
function registerDebt() {
    let year = document.getElementById('year');
    let month = document.getElementById('month');
    let day = document.getElementById('day');
    let type = document.getElementById('type');
    let description = document.getElementById('description');
    let value = document.getElementById('value');

    /*Mostra o valor de cada input*/
    let debt = new Debt(
        year.value,
        month.value,
        day.value,
        type.value,
        description.value,
        value.value,
    );

    if (debt.validate()){
        bd.record(debt);
        //success
        // console.log('valid data');


        document.getElementById('modalTitle').innerHTML = 'Register Success';
        document.getElementById('modalBody').innerHTML = 'Register Success';
        document.getElementById('reigsterButton').innerHTML = 'Back';
        document.getElementById('reigsterButton').className = 'btn btn-success';
        document.getElementById('modalTitleDiv').className = 'modal-header text-success'

        $('#debtRegisterModal').modal('show');


        year.value = '';
        month.value = '';
        day.value = '';
        type.value = '';
        description.value = '';
        value.value = '';

    }
    else {
        document.getElementById('modalTitle').innerHTML = 'Register Error';
        document.getElementById('modalBody').innerHTML = 'Please fill all the fields';
        document.getElementById('reigsterButton').innerHTML = 'Back and correct';
        document.getElementById('reigsterButton').className = 'btn btn-danger';
        document.getElementById('modalTitleDiv').className = 'modal-header text-danger'
        // console.log('data is invalid');
        $('#debtRegisterModal').modal('show');
    }
}

function loadDebtsList(debts = [], filter = false) {

    if (debts.length == 0 && filter == false){
        debts = bd.recoverAllRecords();
    }

    let debtsList =document.getElementById('debtsList')
    debtsList.innerHTML = ''

    debts.forEach(function(debt) {

        var line = debtsList.insertRow();
        line.insertCell(0).innerHTML = `${debt.day}/${debt.month}/${debt.year}`;

        switch (debt.type) {
            case '1': debt.type = 'Food'
                break
            case '2': debt.type = 'Education'
                break
            case '3': debt.type = 'Recreation'
                break
            case '4': debt.type = 'Health'
                break
            case '5': debt.type = 'Transport'
                break

        }
        line.insertCell(1).innerHTML = debt.type;
        line.insertCell(2).innerHTML = debt.description;
        line.insertCell(3).innerHTML = debt.value;


        let btn = document.createElement('button');
        btn.className = 'btn btn-danger';
        btn.innerHTML = '<i class="fas fa-times"></i>';
        btn.id = `debt_ID_${debt.id}`;
        btn.onclick = function(){

            let id = this.id.replace('debt_ID_', '');

            bd.remove(id);

            document.getElementById('modalRemoveTitle').innerHTML = 'Register Removed';
            document.getElementById('modalRemoveBody').innerHTML = 'Register successfully removed';
            document.getElementById('removeButton').innerHTML = 'Back';
            document.getElementById('removeButton').className = 'btn btn-warning';
            document.getElementById('modalRemoveDiv').className = 'modal-header text-warning';
            $('#debtRemoveModal').modal('show');
        }
        line.insertCell(4).append(btn);
        console.log(debt);

        var soma = 0;
        var valueOfDebt = parseFloat(debt.value);

    })
}

function refresh() {
    window.location.reload();
}

function searchDebt() {
    let year = document.getElementById('year').value;
    let month = document.getElementById('month').value;
    let day = document.getElementById('day').value;
    let type = document.getElementById('type').value;
    let description = document.getElementById('description').value;
    let value = document.getElementById('value').value;

    let debt = new Debt(year, month, day, type, description, value);

    let debts = bd.search(debt);

    loadDebtsList(debts, true);

}
