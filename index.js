const button = document.querySelector('main button');
const container = document.querySelector('div');
const buttonSave = document.querySelector('form button');
let sequencial = 0;

button.addEventListener('click', () => {
    container.classList.add('showModal');
});

buttonSave.addEventListener('click', (event) => {
    event.preventDefault();

    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');

    td1.innerText = sequencial;
    sequencial = sequencial + 1;

    td2.innerText = document.getElementById('nome').value;
    td3.innerText = document.getElementById('idade').value;

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
        tr.remove();
    });

    td4.appendChild(deleteButton);

    tr.append(td1, td2, td3, td4);

    document.querySelector('tbody').append(tr);

    container.classList.remove('showModal');
});
