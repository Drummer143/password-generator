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

function generatePasswords(useCapitals, useNumbers, useSymbols, count, length) {
    const charset = [
        /* smalls: */ "abcdefghijklmnopqrstuvwxyz",
        /* capitals: */ "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        /* numbers: */[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        /* symbols: */[33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126]
    ]

    const allowedSymbols = [useCapitals, useNumbers, useSymbols];

    for (let i = 1; i < allowedSymbols.length + 1; i++) {
        if (!allowedSymbols[i - 1]) {
            allowedSymbols.splice(i - 1, 1);
            charset.splice(i, 1);
            i--;
        }
    }

    let div = document.createElement('div');
    div.className = 'result';
    div.innerHTML = '';
    div.style.gridTemplateColumns = `repeat(${Math.round(32 / length)}, 1fr)`;

    let passwords = [];
    const rand = () => Math.round(Math.random() * 10000) + 1;

    for (let i = 0; i < count; i++) {
        let password = '';
        for (let j = 0; j < length; j++) {

            const currSet = (rand()) % charset.length;
            const currPos = (rand()) % charset[currSet].length;

            if (charset[currSet].length === 32) {
                password += String.fromCharCode(charset[currSet][currPos]);
            } else {
                password += charset[currSet][currPos];
            }
        }

        const result = document.createElement('h2');
        result.className = 'password';
        result.append(password);
        console.log(result);

        div.append(result);
    }

    console.log(div);

    /* let results = document.createElement=('div'); */

    document.getElementById('root').innerHTML = '';
    document.getElementById('root').append(div);

    // console.log(Math.round(Math.random() * 10000) % 4);

    // alert(`${charset[0].length} ${charset[1].length} ${charset[2].length} ${charset[3].length}`)
}

document.getElementById('capitals').addEventListener('click', e => useCapitals = handleClick(e.target.checked, 'capitals'));
document.getElementById('numbers').addEventListener('click', e => useNumbers = handleClick(e.target.checked, 'numbers'));
document.getElementById('symbols').addEventListener('click', e => useSymbols = handleClick(e.target.checked, 'symbols'));

document.getElementById('count').onchange = () => count = handleChange(1, 100, 'count');
document.getElementById('length').onchange = () => length = handleChange(8, 32, 'length');

document.getElementById('button').onclick = e => alert(
    `Capital: ${useCapitals}
Numbers: ${useNumbers}
Symbols: ${useSymbols}
Count of passwords: ${count}
Length: ${length}`
);

document.getElementById('button').onclick = () => generatePasswords(useCapitals, useNumbers, useSymbols, count, length);