import '../css/main.scss';

var __svg__  = { path: '../svg/*.svg', name: 'svg/[hash].sprite.svg' };
require('webpack-svgstore-plugin/src/helpers/svgxhr')(__svg__);

function component () {
    var element = document.createElement('div');
    const textValue = "Hello world!!!";

    element.innerHTML = textValue;

    return element;
}

document.body.appendChild(component());