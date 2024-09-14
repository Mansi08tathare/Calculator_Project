function Solve(val) {
    var v = document.getElementById('res');
    // If the current value is '0', replace it with the new value, otherwise append the new value
    if (v.value === '0') {
        v.value = val;
    } else {
        v.value += val;
    }
}

function Result() {
    var num1 = document.getElementById('res').value;
    try {
        var num2 = eval(num1.replace('x', '*'));
        document.getElementById('res').value = num2;
    } catch {
        document.getElementById('res').value = 'Error';
    }
}

function Clear() {
    var inp = document.getElementById('res');
    inp.value = '0';  // Set the default value to 0 after clearing
}

function Back() {
    var ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
    if (ev.value === '') {
        ev.value = '0';  // If the input becomes empty, set it to 0
    }
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';
    if (validKeys.includes(key)) {
        Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
        Result();
    } else if (key === 'Backspace') {
        Back();
    } else if (key.toLowerCase() === 'c') {
        Clear();
    }
});
