var dw = require('dumb-weights');

function step (val) {
    console.log(dw(val));
}

var input = document.querySelector('[name=weight]');

input.addEventListener('change', function () {
    step(input.value);
});

var up = document.getElementById('step-up');
var down = document.getElementById('step-down');

up.addEventListener('click', function () {
    input.stepUp();
    step(input.value);
});

down.addEventListener('click', function () {
    input.stepDown();
    step(input.value);
});
