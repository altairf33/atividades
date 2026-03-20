/* elaborar um programa para um Cinema, onde o usuario digita o nome e a duração do filme em 
minutos exibia o titulo do fime e a duração para horas e minutos

1º. obter o nome do filme 
2º. obter a duração em minutos
3º. converter a duração de minutos em horas 
4º. exibir o nome do filme 
5º. exibir a duração em horas e minutos
*/
function algoritimo(){
    const titulo = document.getElementById("titulo").value;
    const duracao= document.getElementById("duracao").value;

    const horas = Math.floor(duracao / 60);
    const minutos = duracao - horas * 60;

    document.getElementById("tituloSaida").textContent = titulo.toUpperCase();
    document.getElementById("duracaoSaida").textContent = horas + " Horas " + minutos + " Minutos";
}