let useCapitals = false, useNumbers = false, useSymbols = false, count = 10, length = 8;

const handleClick = (e, id) => {
    if (e) {
        document.getElementById(id).setAttribute('class', 'active');
    } else {
        document.getElementById(id).removeAttribute('class');
    }

    return e;
};

const handleChange = (min, max, id) => {
    const block = document.getElementById(id);
    if (block.value > max) {
        block.value = max;
    }
    if (block.value < min) {
        block.value = min;
    }

    return block.value;
};

document.getElementById('capitals').addEventListener('click', e => useCapitals = handleClick(e.target.checked, 'capitals'));
document.getElementById('numbers').addEventListener('click', e => useNumbers = handleClick(e.target.checked, 'numbers'));
document.getElementById('symbols').addEventListener('click', e => useSymbols = handleClick(e.target.checked, 'symbols'));

document.getElementById('count').onchange = () => count = handleChange(1, 100, 'count');
document.getElementById('length').onchange = () => length = handleChange(1, 32, 'length');

document.getElementById('button').onclick = e => alert(
    `Capital: ${useCapitals}
Numbers: ${useNumbers}
Symbols: ${useSymbols}
Count of passwords: ${count}
Length: ${length}`
);