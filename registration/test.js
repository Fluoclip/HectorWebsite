const form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  const jsonData = {};

  // pretvoriti FormData u JSON
  for (const [key, value] of formData.entries()) {
    jsonData[key] = value;
  }

  const url = 'https://example.com/api';
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(jsonData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
});