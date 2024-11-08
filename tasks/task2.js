"Ваш код повинен зробити POST-запит до вказаного URL."
"Для створення нового користувача, передайте в запит наступні дані:"
"name: ваше ім’я"
"email: ваш email"
"Поверніть відповідь від сервера після створення користувача."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


function createUser(user) {
  return fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .then(data => data)
  .catch(error => {
    console.error("Error creating user:", error);
    return null;
  });
}

createUser({ name: "Sam", email: "fjsnfkjns2342@gmail.com" })
  .then(response => console.log(response));

module.exports = createUser;
