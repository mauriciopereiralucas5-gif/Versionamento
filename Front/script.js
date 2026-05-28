// Lista de Usuários (pode vir de API depois):

const usuarios = [
    {
        nome: "Lucas Maurício",
        email: "lucasmauricio@gmail.com",
        avatar: "https://ar.pinterest.com/pin/1138003399580560766/"
    },
    {
        nome: "Julia Mansueto",
        email: "juliamansueto@gmail.com",
        avatar: "https://www.instagram.com/p/DDVepPFvjvR/"
    },
    {
        nome: "Stephany Lima",
        email: "stephanylima@gmail.com",
        avatar: "https://www.deezer.com/br/artist/8691"
    }
];


// Função que cria o visual:

function carregarUsuarios(Lista) {
    const container = document.getElementById("listaUsuarios");

    container.innerHTML = "";

    Lista.forEach(user => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <img class="avatar" src="${user.avatar}" />
        <div class="nome">${user.name}</div>
        <div class="email">${user.email}</div>
        `;
        
        container.appendChild(card);
    });
}

// Executa ao carregar a página:

carregarUsuarios(usuarios);