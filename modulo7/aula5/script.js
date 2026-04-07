// Definir clase contaBancaria

class ContaBancaria {
    #saldo;
    constructor() {
        this.#saldo = 0;
    }
    //metdos
    depositar() {
        this.#saldo += valor;
    }
    
    sacar() {
        this.#saldo -= valor;
    }

    temSaldoParaSacar(valor) {
        
        return valor <= this.#saldo;
    }

    getSaldo() {
        return this.#saldo;
    }

}


class CaixaEletronico {
    constructor() {
        this.conta = this.conta;
    }

    depositar(){
        const valorDeposito = parseFloat(document.getElementById('valorDepositado').value);
        
        this.conta.depositar(valorDeposito);

        this.mostrarSaldo(this.conta.saldo);
    }

    mostrarSaldo(saldo) {
        document.getElementById('saldo').textContent = `Saldo: R$ ${saldo}`;
    }
}

const conta = new ContaBancaria();
const caixaEletronico = new CaixaEletronico(conta);