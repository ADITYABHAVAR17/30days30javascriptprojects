const input = document.getElementById('text');
const form = document.getElementById('qr-form');
const divContainer = document.getElementById("qr-code");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value === '') {
        // alert('Please enter a valid URL');
        input.classList.add('error');
        setTimeout(() => {
            input.classList.remove('error');
            
        }, 2000);
        return;
    } else {
        divContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}" alt="QR Code">`;
    }
});