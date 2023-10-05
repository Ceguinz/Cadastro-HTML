const button = document.querySelector('main button');
const container = document.querySelector('div');
const buttonSave = document.querySelector('form button');
let sequencial = 0;
const dados = []; // Vetor para armazenar os dados

button.addEventListener('click', () => {
    container.classList.add('showModal');
});

buttonSave.addEventListener('click', (event) => {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;

    const registro = {
        id: sequencial,
        nome: nome,
        idade: idade
    };

    dados.push(registro); // Adiciona o registro ao vetor de dados

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');

    td1.innerText = registro.id;
    sequencial = sequencial + 1;

    td2.innerText = registro.nome;
    td3.innerText = registro.idade;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
        tr.remove();
        // Remover o registro do vetor de dados quando o botão de exclusão é clicado
        const index = dados.findIndex(item => item.id === registro.id);
        if (index !== -1) {
            dados.splice(index, 1);
        }
    });

    td4.appendChild(deleteButton);

    tr.append(td1, td2, td3, td4);

    document.querySelector('tbody').append(tr);

    container.classList.remove('showModal');

    console.log(dados); // Exibe os dados no console
});
