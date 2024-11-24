document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        const number1 = parseFloat(document.getElementById('number1').value);
        const number2 = parseFloat(document.getElementById('number2').value);
        let result;

        if (isNaN(number1) || isNaN(number2)) {
            result = 'Erro';
        } else {
            switch (this.textContent) {
                case 'Soma':
                    result = number1 + number2;
                    break;
                case 'Subtração':
                    result = number1 - number2;
                    break;
                case 'Multiplicação':
                    result = number1 * number2;
                    break;
                case 'Divisão':
                    result = number1 / number2;
                    result = result.toFixed(2);
                    break;
            }
        }
        document.getElementById('result').value = result;
    });
});
