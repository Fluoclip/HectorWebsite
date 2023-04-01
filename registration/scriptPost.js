const url = 'http://localhost:8080/api/postEmployee';
const formData = new FormData();

// dodajte podatke iz forme u formData objekt
formData.append('first-name', document.getElementById('first-name').value);
formData.append('city', document.getElementById('city').value);
formData.append('street', document.getElementById('street').value);
formData.append('guard-id', document.getElementById('guard-id').value);
formData.append('email', document.getElementById('email').value);
formData.append('last-name', document.getElementById('last-name').value);
formData.append('ausbildung', document.getElementById('ausbildung').value);
formData.append('phone', document.getElementById('phone').value);



fetch(url, {
  method: 'POST',
  body: formData
})
.then(response => {
  console.log(response);
})
.catch(error => {
  console.error(error);
});