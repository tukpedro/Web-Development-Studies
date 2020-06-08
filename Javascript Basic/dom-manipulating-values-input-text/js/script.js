function separateCharacter(){
    //select value entered
    var character = document.getElementById('data-entered').value;

    //clean form field
    document.getElementById('data-entered').value = '';

    //clean spaces
    character.trim();

    switch (character) {
        case '0' :
        case '1' :
        case '2' :
        case '3' :
        case '4' :
        case '5' :
        case '6' :
        case '7' :
        case '8' :
        case '9' :
            document.getElementById('numbers').value += parseInt(character);
        break;
        default : document.getElementById('letters').value += character;
    }
}

