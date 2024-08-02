// main.js
function ShowToast(type, message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type} show`;
    toast.innerHTML = `<img src="images/${type}.svg" alt="">${message}`;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove('show');
        toast.classList.add('hide');
    }, 3000);

    setTimeout(() => {
        toastContainer.removeChild(toast);
    }, 3500);
}
