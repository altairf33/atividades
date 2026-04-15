document.getElementById("nome").addEventListener("blur", (evento) => {
    const nomeInformado = localStorage.setItem("nome", evento.target.value);
});


document.addEventListener('DOMContentLoaded', () => {
    const nomeSalvo = localStorage.getItem("nome");
    if (nomeSalvo) {
        document.getElementById("nome").value = nomeSalvo;
    }
});

document.getElementById("numeroTelefone").addEventListener("blur", (evento) => {
    const numeroTelefoneInformado = localStorage.setItem("numeroTelefone", evento.target.value);
});


document.addEventListener('DOMContentLoaded', () => {
    const numeroTelefoneSalvo = localStorage.getItem("numeroTelefone");
    if (numeroTelefoneSalvo) {
        document.getElementById("numeroTelefone").value = numeroTelefoneSalvo;
    }
});

document.getElementById("email").addEventListener("blur", (evento) => {
    const emailInformado = localStorage.setItem("email", evento.target.value);
});


document.addEventListener('DOMContentLoaded', () => {
    const emailSalvo = localStorage.getItem("email");
    if (emailSalvo) {
        document.getElementById("email").value = emailSalvo;
    }
});

document.getElementById("cpf").addEventListener("blur", (evento) => {
    const cpfInformado = localStorage.setItem("cpf", evento.target.value);
});


document.addEventListener('DOMContentLoaded', () => {
    const cpfSalvo = localStorage.getItem("cpf");
    if (cpfSalvo) {
        document.getElementById("cpf").value = cpfSalvo;
    }
});

document.getElementById("dataNascimento").addEventListener("blur", (evento) => {
    const dataNascimentoInformada = localStorage.setItem("dataNascimento", evento.target.value);
});


document.addEventListener('DOMContentLoaded', () => {
    const dataNascimentoSalva = localStorage.getItem("dataNascimento");
    if (dataNascimentoSalva) {
        document.getElementById("dataNascimento").value = dataNascimentoSalva;
    }
});

document.getElementById("cep").addEventListener("blur", (evento) => {
    const elemento = evento.target;
    const cepinformado = elemento.value;

    if (!(cepinformado.length === 8))
        return;

    fetch(`https://viacep.com.br/ws/${cepinformado}/json/`)
        .then(response => response.json())
        .then(data => {

            if (!data.erro) {
                document.getElementById("logradouro").value = data.logradouro;
                document.getElementById("bairro").value = data.bairro;
                document.getElementById("cidade").value = data.localidade;
                document.getElementById("estado").value = data.uf;

            }
            else {
                alert("CEP não encontrado");
            }

        })
        .catch(error => console.error(error));
    
    cepinformado = localStorage.setItem("cep", evento.target.value);

});


document.addEventListener('DOMContentLoaded', () => {
    const cepSalvo = localStorage.getItem("cep");
    if (cepSalvo) {
        document.getElementById("cep").value = cepSalvo;
    }
});

document.getElementById("numero").addEventListener("blur", (evento) => {
    const numeroInformado = localStorage.setItem("numero", evento.target.value);
});


document.addEventListener('DOMContentLoaded', () => {
    const numeroSalvo = localStorage.getItem("numero");
    if (numeroSalvo) {
        document.getElementById("numero").value = numeroSalvo;
    }
});



