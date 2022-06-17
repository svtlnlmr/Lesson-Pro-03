function task1() {
    const name = prompt('Enter your name');
    let str = '';
    for (let i = 0; i < 3; i++) {
        str = str + 'Happy birthday to you\n';
        if (i === 1) {
            str = str + `Happy birthday, dear ${name}\n`
        }
    }
    console.log(str);
}

function task2() {
    const number = +prompt('Please enter your number');
    if (isNaN(number)) {
        console.log('Its not a number. Please enter your number');
    }
    let str = '';
    for (let i = 0; i < number; i++) {
        str += '.#';
    }
    console.log(str);
}

function task3() {
    const num = prompt('Please enter your number');
    if (!num.trim()) {
        console.log('Invalid. You should enter a number');
    }
    let sum = 0;
    for (let i = 0; i < num; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    }
    console.log(sum);
}

function task4() {
    let i = 0;
    while (true) {
        let number = Math.random();
        i++;
        if (number > 0.7) {
            console.log(`Loop was finished because of: ${number}\nNumber of iterations: ${i}`);
            break;
        }
    }
}

function task5() {
    for (let i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('Div by 5 and 3');
        } else if (i % 3 === 0) {
            console.log('Div by 3');
        } else if (i % 5 === 0) {
            console.log('Div by 5');
        } else {
            console.log(i);
        }
    }
}

function task6() {
    let date = new Date;
    console.log(date.toLocaleString());
}