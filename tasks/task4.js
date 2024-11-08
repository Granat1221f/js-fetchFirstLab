"Ваш код повинен зробити DELETE-запит до вказаного URL, де {userId} – це ID користувача, якого потрібно видалити."
"Поверніть статус відповіді сервера після видалення."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


function deleteUser(id) {
  return fetch('https://jsonplaceholder.typicode.com/users/${id}', {
    method: 'DELETE'
  })
  .then(response => {
    return {
      status: response.status, 
      ok: response.ok 
    };
  })
  .catch(error => {
    console.error("Error deleting user:", error);
    return undefined; 
  });
}

deleteUser(1)
  .then(response => console.log(response));

module.exports = deleteUser;
