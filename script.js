const writeChar = (char) => {
    write = document.getElementById('write').value;
    remainder = document.getElementById('remainder').value;
    expression = document.getElementById('expression').value;
    
    numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    operator = ['+', '-', '*', '/'];
    float = '.';

    if(operator.includes(char)) {
        if(remainder === '' && write === '') return;
        
        if(operator.some((t) => remainder.includes(t))) {
            if(write === '') return;

            evaluateExpression();
            remainder += char;
        }

        remainder = write + ' ' + char;
        write = '';
        expression = remainder;

    } else if(numbers.includes(char)) {
        if(write === '' && char === '0') return; 

        write += char;
        expression += char;
    
    } else if(char === '.' && !write.includes('.')) {
        write += char;
    }

    document.getElementById('write').value = write;
    document.getElementById('remainder').value = remainder;
    document.getElementById('expression').value = expression;
    console.log(expression);
};

const deleteChar = () => {
    expression = document.getElementById('write').value;
    expression = expression.slice(0,-1);
    document.getElementById('write').value = expression;
};

const clearAll = () => {
    document.getElementById('write').value = '';
    document.getElementById('remainder').value = '';
    document.getElementById('expression').value = '';
};

const evaluateExpression = () => {
    result = eval(document.getElementById('expression').value);
    remainder = result;
    write = result;

    document.getElementById('write').value = write;
    document.getElementById('remainder').value = remainder;
    document.getElementById('expression').value = remainder;

    console.log(result);
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

    console.log(ev.key);
});