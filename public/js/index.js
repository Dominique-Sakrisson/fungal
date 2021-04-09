const form = document.getElementById('form');
const ul = document.getElementById('fungi');

const appendItem = (item) => {
    const li = document.createElement('li');
    li.textContent = `${item.fungiName} - ${item.fungiDescription}`
    ul.appendChild(li);
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);

console.log(data);
    fetch('http://localhost:7890/api/v1/fungi/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        fungiName: data.get('fungiName'),
        fungiDescription: data.get('fungiDescription'),
       
    }),
    })

    .then((res) => res.json())
    .then(appendItem);
});

fetch('http://localhost:7890/api/v1/fungi/')
    .then((res) => res.json())
    .then((items) => {
        console.log(items);
        items.forEach(appendItem);
});
