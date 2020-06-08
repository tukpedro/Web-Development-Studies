function displayArticle(id, callbackSuccess, callbackError) {
    if (true){
        callbackSuccess('Callback functions in JS', 'Very used functions')
    }
    else {
        callbackError('Load error')
    }
}

var callbackSuccess = function(title, description){
    document.write('<h1>' + title + '</h1>')
    document.write('<hr /')
    document.write('<p>' + description + '</p>')
}

var callbackError = function(error){
    document.write('<p><b>Erro: </b>' + error + '</p>')
}

displayArticle(1, callbackSuccess, callbackError)