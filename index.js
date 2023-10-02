
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error('La solicitud a la API falló');
    }
    return response.json();
  })
  .then((data) => {
    data.forEach((user) => {
      console.log('Nombre del usuario:', user.name);
    });
  })
  .catch((error) => {
    console.error('Error:', error);
  });
