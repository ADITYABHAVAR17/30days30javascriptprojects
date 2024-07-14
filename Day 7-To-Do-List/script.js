const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', function(e) {
    if(input.value) {
        const div = document.createElement('div');
        div.classList.add('additems');
        div.innerHTML = `
            <input type="checkbox" class="checkbox">
            <p class="text">${input.value}</p>
            <button class="del"><img width="20px" src="assets/remove.png" alt="Delete"></button>
        `;

        // Append the new task item to the task container
        document.querySelector('.task-container').appendChild(div);

        // Add event listener to the delete button
        const delButton = div.querySelector('.del');
        delButton.addEventListener('click', function() {
            div.remove();
        });
        const check = div.querySelector('.checkbox');
        check.addEventListener('click', function() {
            if(check.checked) {
                div.style.textDecoration = 'line-through';
                div.style.backgroundColor = 'rgb(73, 235, 73)';
            } else {
                div.style.textDecoration = 'none';
                div.style.backgroundColor = 'rgb(235, 235, 54)';
            }
        });

        // Clear the input field after adding the task
        input.value = '';
    } else {
        alert('Please enter a valid input');
    }
});
