const binaryInput = document.getElementById('binaryInput');

const result = document.getElementById('result');

binaryInput.addEventListener('input',function() {
    
    const decimal = parseInt(binaryInput.value, 2);

    console.log(decimal);
    
})

