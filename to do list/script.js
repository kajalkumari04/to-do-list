const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = input.value.trim();
    if (todoText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox">
            <label>${todoText}</label>
            <button class="remove">Remove</button>
        `;
        list.appendChild(li);
        input.value = '';
    }
});

list.addEventListener('click', function(event) {
    if (event.target.matches('.remove')) {
        event.target.parentElement.remove();
    }
});