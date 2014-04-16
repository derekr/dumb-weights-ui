var dw = require('dumb-weights');
var map = require('array-map');
var each = require('foreach');
var util = require('util');

function weightClassname (val) {
    if (val === 2.5) return 'weight-2';

    return 'weight-' + val;
};

function createPlate (weight) {
    return util.format(
        '<div class="plate %s"><span class="weight-text">%s lbs</span></div>',
        weightClassname(weight),
        weight
    );
}

function step (val) {
    var plates = dw(val);

    var $plates = map(plates, function (p) {
        return createPlate(p);
    });

    document.querySelector('.visualization').innerHTML = $plates.join('');
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

// kickoff
step(input.value);
