const cliente = document.getElementById("listaClientes");

fetch("https://crudcrud.com/api/75f52b2fbb504b99a1ee3f634ec133fb/clientes")
.then(resposta => resposta.json())          
.then((listaDeClientes) => {
        listaDeClientes.forEach((nome) => {
        const item = document.createElement("li");
        item.innerHTML = `${nome.descricao} (${nome.email}) <button onclick="excluirCliente('${nome._id}')">x</button>`;
        cliente.appendChild(item);

    })
})

document.getElementById("cadastrar").addEventListener("click", () => {
    
    const descricao = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    fetch("https://crudcrud.com/api/75f52b2fbb504b99a1ee3f634ec133fb/clientes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({descricao: descricao, email: email})
    })
    .then(resposta => resposta.json())
    .then((nome) => {
        const item = document.createElement("li");
        item.innerHTML = `${nome.descricao} (${nome.email}) <button onclick="excluirCliente('${nome._id}')">x</button>`;
        cliente.appendChild(item);
    })
    document.getElementById("cadastro").reset();
})

function excluirCliente(id) {
    fetch(`https://crudcrud.com/api/75f52b2fbb504b99a1ee3f634ec133fb/clientes/${id}`, {
        method: "DELETE"
    })
    .then(() => {
        const item = document.querySelector(`button[id="excluir"][onclick="excluirCliente('${id}')"]`).parentElement;
        cliente.removeChild(item);
    })
}