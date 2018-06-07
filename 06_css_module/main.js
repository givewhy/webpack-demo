var style = require('./app.css');

var insertText = `<div id="example">
                    <h1 class=${style.h1}>Hello World from example</h1>
                    <h2 class="h2">Hello Webpack from example</h2>
                </div>`;
document.getElementById("insert").innerHTML= insertText;