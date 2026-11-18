const binaryInput = document.getElementById('binaryInput');

const convertBtn = document.getElementById('convertBtn');

const result = document.getElementById('result');

convertBtn.addEventListener("click", function(){
    
    const digits = binaryInput.value.split('');

    const isBinary = digits.every(function(digit){
        return digit === '0' || digit === '1';
    });

    if (isBinary) {
        result.textContent = binaryInput.value;
    } else {
        result.textContent = 'Invalid binary number';
    }


}) 



