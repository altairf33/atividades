const botaoTema = document.getElementById('botaoTema');

botaoTema.addEventListener('click', () => {
    // verificar se o usuario ja tem um tema pre estabelecido
    const temaAtual = localStorage.getItem('tema');
    //verifica qual tema o usuario tem e alterna para o outro
    const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
    
    document.body.classList.toggle(novoTema);

    localStorage.setItem('tema', novoTema);
})

document.addEventListener('DOMContentLoaded', () => {
    //verificar tema salvo
    const temaSalvo = localStorage.getItem('tema');

    if(temaSalvo === 'dark') {
        document.body.classList.add('dark');
    }
    else {
        document.body.classList.add('light');
    }
})