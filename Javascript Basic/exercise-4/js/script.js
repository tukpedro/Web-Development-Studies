function inputEvent(bgColor) {
    var content = document.getElementById('main-input').value;
    if (content.length > 0 && content.length < 3 ){
        document.getElementById('main-input').style.background = '#ff0000'
    }
    else if (content.length >= 3){
        document.getElementById('main-input').style.background = '#008000'
    }
    else {
        document.getElementById('main-input').style.background = '#ffff00';
    }
}