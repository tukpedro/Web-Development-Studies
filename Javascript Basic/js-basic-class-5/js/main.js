function clicked() {
    document.getElementById('thanks').innerHTML = ("Thnks for clicking");
}

function redirect() {
    // window.open("https://www.youtube.com/");
    window.location.href = "https://www.youtube.com/";
}

function change(element) {
    element.innerHTML = ("Thank you!!!!");
}

function back(element) {
    element.innerHTML = ("Hover the mouse here");
}

function load() {
    alert("Page loaded");
}

function changeFunction(element) {
    document.write(element.value);
}