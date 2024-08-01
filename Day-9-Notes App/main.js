document.addEventListener('DOMContentLoaded' , () => { //wait for the DOM to load before running the code
    const createButton = document.getElementById('create');
    const form = document.getElementById('form');
    const input = document.getElementById('input');
    const notesContainer = document.getElementById('notes-container');

    createButton.addEventListener('click', () => {
        form.style.display = 'block';
        input.focus(); //focus on the input field when the create button is clicked 
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();//prevent the form from submitting and refreshing the page
        const noteText = input.value.trim();//remove any whitespace from the input value and store it in noteText

        if (noteText) {
            saveNoteToLocalStorage(noteText);//save the note to local storage
            input.value = ''; //clear the input field
            form.style.display = 'none';
            displayNotes(); //display the notes
        }
    });

    function saveNoteToLocalStorage(note) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    function displayNotes() {
        notesContainer.innerHTML = '';
        let notes = JSON.parse(localStorage.getItem('notes')) || [];

        notes.forEach((note, index) => {
            const noteElement = document.createElement('div');
            noteElement.className = 'note';
            noteElement.innerText = note;

            const deleteButton = document.createElement('button');
            deleteButton.innerHTML = '<img src="images/delete.png" alt="Delete Icon">';
            deleteButton.addEventListener('click', () => {
                deleteNoteFromLocalStorage(index);
                displayNotes();
            });

            noteElement.appendChild(deleteButton);
            notesContainer.appendChild(noteElement);
        });
    }

    function deleteNoteFromLocalStorage(index) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    displayNotes();
});
