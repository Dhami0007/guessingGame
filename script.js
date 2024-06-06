let target = Math.floor(Math.random() * 100) + 1;
if (target > 100){
    target = target - 1;
}
let count = 0;

function handleSubmit(){
    const guess = document.getElementById('guessField').value;
    let result = document.getElementById('guessResult');
    let statement = document.getElementById("statement");
    let attempts = document.getElementById("attempts");

    if (guess==''){
        alert('Please enter a number');
    }
    else if (guess > 100 || guess < 1){
        alert('Please enter a number between 1 and 100');
    }
    else if (guess < target){
        statement.innerHTML = `The target is higher than ${guess}`;
        attempts.innerHTML = `Guesses: ${++count}`;
        result.style.visibility = 'visible';
    }
    else if (guess > target){
        statement.innerHTML = `The target is lower than ${guess}`;
        attempts.innerHTML = `Guesses: ${++count}`;
        result.style.visibility = 'visible';
    }
    else if (guess == target){
        statement.innerHTML = `Congratulations! You guessed the correct number!`;
        attempts.innerHTML = `Guesses: ${++count}`;
        result.style.visibility = 'visible';
        result.style.backgroundColor = '#81f09d';
        result.style.color = 'black';
    }
}