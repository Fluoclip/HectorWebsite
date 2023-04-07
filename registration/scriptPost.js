
const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formEl);

    const data = Object.fromEntries(formData);

    console.log(data);

    fetch('http://localhost:8081/api/employees',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    }
    
    
    
    );


});