const tarefas = document.getElementById("listaTarefas");

fetch("https://crudcrud.com/api/3658ea6874734572a8e6d9d3672187ca/tarefas")
.then(resposta => resposta.json())
.then((listaDeTarefas) => {

    listaDeTarefas.forEach((tarefa) => {
        const item = document.createElement("li");
        item.innerHTML = `${tarefa.descricao} <button>x</button>`;
        tarefas.appendChild(item);

    })
})

document.getElementById("add").addEventListener("click", () => {
    
    const descricao = document.getElementById("tarefa").value;

    fetch("https://crudcrud.com/api/3658ea6874734572a8e6d9d3672187ca/tarefas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({descricao: descricao})
    })
    .then(resposta => resposta.json())
    .then((tarefa) => {
        const item = document.createElement("li");
        item.innerHTML = `${tarefa.descricao} <button>x</button>`;
        tarefas.appendChild(item);
    })
})