import '../css/main.scss';

function component () {
    var element = document.createElement('div');
    const textValue = "Hello world!!!";

    element.innerHTML = textValue;

    return element;
}

document.body.appendChild(component());