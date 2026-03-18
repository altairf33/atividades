function calculaIMC(){
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    let IMC = peso / (altura * altura);

    if(IMC <= 18.5){
        document.getElementById("indice").textContent = "Abaixo do peso";
    }
    
    else if(IMC > 18.5 & IMC <= 24.9){
        document.getElementById("indice").textContent = "Peso normal";
    }
    else if(IMC > 24.9 & IMC <= 29.9){
        document.getElementById("indice").textContent = "Sobrepeso";
    }
    else if(IMC > 29.9 & IMC <= 34.9){
        document.getElementById("indice").textContent = "Obesidade grau 1";
    }
    else if(IMC > 34.9 & IMC <= 39.9){
        document.getElementById("indice").textContent = "Obesidade grau 2";
    }
    else if(IMC > 39.9 ){
        document.getElementById("indice").textContent = "Obesidade grau 3";
    }


    

    document.getElementById("resultado").textContent = "O IMC e :" + IMC;
}