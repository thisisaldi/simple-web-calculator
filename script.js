const writeChar = (char) => {
    write = document.getElementById('write').value;
    expression = document.getElementById('expression-display').value;
    operator = document.getElementById('operator-hidden').value;
    
    numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
    operators = ['+', '-', '*', '/'];

    if(operators.includes(char)) {
        if(write === '0') return;
        if(expression !== '') evaluateExpression();

        operator = char;
        expression = write;
        write = '0';
    } else if(numbers.includes(char)) {
        if(char === '.' && write.includes('.')) return;
        if(write === '0' && char === '0') return;
        if(write === '0' && char !== '.') write = char;

        else write += char;
    }

    document.getElementById('write').value = write;
    document.getElementById('expression-display').value = expression;
    document.getElementById('operator-hidden').value = operator;

    // console.log(expression);
    // console.log(operator);
    // console.log(write);
};

const deleteChar = () => {
    write = document.getElementById('write').value;
    write = write.slice(0,-1);
    if(write === '') write = '0';
    document.getElementById('write').value = write;
};

const clearAll = () => {
    document.getElementById('write').value = '0';
    document.getElementById('result').value = '';
    document.getElementById('expression-display').value = '';
    document.getElementById('expression-hidden').value = '';
};

const evaluateExpression = () => {
    let prev = document.getElementById('expression-display').value;
    let write = document.getElementById('write').value;
    let operator = document.getElementById('operator-hidden').value;

    let expression = `${prev}${operator}${write}`;
    let result = eval(expression);

    document.getElementById('expression-display').value = '';
    document.getElementById('write').value = result;

    // console.log(expression)
    // console.log(result);
};

document.addEventListener('keydown', (ev) => {
    chars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '.'];

    if(chars.includes(ev.key)) {
        writeChar(ev.key);
    } else if(ev.key === 'c') {
        clearAll();
    } else if(ev.key === 'Backspace') {
        deleteChar();
    } else if(ev.key === '=' || ev.key === 'Enter') {
        evaluateExpression();
    }

    // console.log(ev.key);
});