class Parquimetro {
    #saldo = 0;

    constructor() {
        this.#saldo = 0;
    }

    recebeValor() {
        const valor = parseFloat(document.getElementById('valor').value);

        if (isNaN(valor) || valor <= 0) {
            alert("Digite um valor válido!");
            return;
        }

        this.#saldo += valor;

        this.mostraSaldo();   
        this.mostraTempo();   
    }

    mostraSaldo() {
        document.getElementById('saldo').textContent =
            `Saldo: R$ ${this.#saldo.toFixed(2)}`;
    }

    obterTempo() {
        if (this.#saldo >= 1 && this.#saldo < 1.75) {
            let troco = this.#saldo - 1.00;
            return "Tempo: 30 minutos | Troco: R$ " + troco.toFixed(2);
        }

        if (this.#saldo >= 1.75 && this.#saldo < 3.00) {
            let troco = this.#saldo - 1.75;
            return "Tempo: 1 hora | Troco: R$ " + troco.toFixed(2);
        }

        if (this.#saldo >= 3.00) {
            let troco = this.#saldo - 3.00;
            return `Tempo: 2 horas | Troco: R$ ${troco}`;
        }

        return "Valor insuficiente para obter tempo";
    }

    mostraTempo() {
        document.getElementById('tempo').textContent = this.obterTempo();
    }
   
}

const parquimetro = new Parquimetro();





