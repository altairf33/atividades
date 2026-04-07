/* objeto literal */
const pessoa = { nome: "carlos", idade: 20}

/* criar classe */
class veiculo {

    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

        /* atributo privado para indicar se o veiculo esta ligado*/
        this._ligado = false;
    }

    /*metodos*/
    ligar() {
        this._ligado = true;
        console.log("veiculo ligado");
    }
    desligar() {
        this._ligado = false;
        console.log("veiculo desligado");
    }

    /* metodo getter para obter valor do atributo privado */
    get ligado() {
        return this._ligado;
    }

}

const veiculoNovo = new veiculo("honda", "civic", 2025);
console.log(veiculoNovo);
veiculoNovo.ligar();
console.log("o carro esta ligado? " + veiculoNovo.ligado);

/* herança */
class moto extends veiculo {
    constructor(marca, modelo, ano,) {
        super(marca, modelo, ano);
    }
}

motoNova = new moto("yamaha", "mt-07", 2025);
console.log(motoNova);
motoNova.ligar();
console.log("a moto esta ligada? " + motoNova.ligado);

class carro extends veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
    }
    abrirPortas() {
        console.log("as portas do carro foram abertas");
    }
}   

const carroNovo = new carro("honda", "civic", 2025, 4);
console.log(carroNovo);
const motoNova2 = new moto("yamaha", "mt-07", 2025);

carroNovo.abrirPortas();
