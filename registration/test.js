const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event =>{
    event.preventDefault();

    const formData = new formData(formEl);
});