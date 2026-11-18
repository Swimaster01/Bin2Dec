import './style.css';

const binaryInput = document.getElementById('binaryInput');

const convertBtn = document.getElementById('convertBtn');

const result = document.getElementById('result');

convertBtn.addEventListener("click", function(){

    const userInput = binaryInput.value.trim();

    if (userInput === '') {

        result.textContent = 'Please enter a binary number';
        return;
    }

    if (userInput.length > 32) {
        result.textContent = 'Binary number is too long';
        return;
    }
    
    const digits = userInput.split('');

    const isBinary = digits.every(function(digit){
        return digit === '0' || digit === '1';
    });

    if (isBinary) {
        const decimal = parseInt(userInput, 2);
        result.textContent = decimal;
    } else {
        result.textContent = 'Invalid binary number';
    }


}) 



