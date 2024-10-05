window.onload = function() {
    alert("Bem-vindo ao site!");
}

function insert(num){
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}

function clean(){
    document.getElementById('result').innerHTML = " ";
}

function back(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0,result.length -1);
}

function calculator() {
    var result = document.getElementById('result').innerHTML;
    if (result) {
        try {
            var expression = result.replace(/x/g, '*');
            var calculatedResult = eval(expression);

            if (!Number.isInteger(calculatedResult)) {
                calculatedResult = calculatedResult.toFixed(2);
            }
            document.getElementById('result').innerHTML = calculatedResult;
        } catch (error) {
            document.getElementById('result').innerHTML = "Erro";
        }
    } else {
        document.getElementById('result').innerHTML = "Nada...";
    }
}


