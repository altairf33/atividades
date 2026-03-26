function aleatorio(min, max) {
    return Math.random() * (max - min) + min;
}

function converteInt() {
    aleatoriofloat = aleatorio(1, 100);
    aleatorioInt = parseInt(aleatoriofloat);
    return aleatorioInt;
}

let chances = 10;

const numero = converteInt();

function chute() {
    const palpite = document.getElementById("palpite").value;

    chances--;

    if (chances > 0) {
        if (palpite > numero) {
            document.getElementById("dica").textContent = "O número é menor que o seu palpite";
            document.getElementById("chances").textContent = `Você tem ${chances} chances`;


        }
        else if (palpite < numero) {
            document.getElementById("dica").textContent = "O número é maior que o seu palpite";
            document.getElementById("chances").textContent = `Você tem ${chances} chances`;

        }
        else {
            document.getElementById("dica").textContent = "Parabéns, você acertou!";
            document.getElementById("chances").textContent = `Sobraram ${chances} chances`;

        }

    }
    else {
        document.getElementById("dica").textContent = "Suas chances acabaram! O número era " + numero;
        document.getElementById("chances").textContent = "Game Over!";
    }


}