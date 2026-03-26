const matrizGastos = [
    ["Alimentação", 0],
    ["Transporte", 0],
    ["Lazer", 0],
    ["Outros", 0],
    ["Total", 0]
]

const obterElemento = (id) => document.getElementById(id);
const obterValorInformado = () => obterElemento("valor").value;
const obterCategoriaInformado = () => obterElemento("categoria").value;
const obterCategoria = (matriz, nomeCategoria) => matriz.find((item) => item[0] === nomeCategoria);
const valorNegativo = (valor) => valor < 0;
const somaValor = (total, valor) => total + valor;
const atualizaValorCategoria = (categoria, valor) => categoria[1] = somaValor(categoria[1], valor);
const atualizarInterface = () => {
    matrizGastos.forEach(([nome, valor]) =>{
        const elemento = obterElemento(nome);
        elemento.textContent = '';
    })
}

const limparCampos = () => obterElemento('valor').value = ""

function adcionarGasto(){
   /*
   1. Pegar Valor informado
   2. Pegar Categoria informada
   3. Impedir numeros negativos
   4. De acordo com a categoria atualizar valores
   4.1. Criar variaveis para controlar ou armazenar os valores 
   de cada uma das categorias
   5. Atualizar interface
   6. Limpar campos
   */
  const valorInformado = obterValorInformado();
  const categoriaInformada = obterCategoriaInformado();

  if(valorNegativo(valorInformado)){
    alert("o valor informado não pode ser negativo");
    return
  }
  const categoria = obterCategoria(matrizGastos, categoriaInformada);
  const total = obterCategoria(matrizGastos, "Total");
  atualizaValorCategoria(categoria, valorInformado);
  atualizaValorCategoria(total, valorInformado);
  atualizarInterface();
  limparCampos();

}