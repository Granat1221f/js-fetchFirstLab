"Ваша функція повинна робити GET-запит до вказаного URL і отримати дані."
"Поверніть дані користувачів у форматі масиву"
"Дані мають включати такі поля, як id та name."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => data.map(user => ({ id: user.id, name: user.name })))
    .catch(error => {
      console.error("Error fetching users:", error);
      return [];
    });
}

console.log(fetchUsers())

module.exports = fetchUsers;