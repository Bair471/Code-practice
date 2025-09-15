//2. Схема "Server → State → Props"
// Использование props с сервера

import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  // Имитация загрузки с сервера
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") 
      .then(response => response.json())
      .then(data => setUsers(data)); 
  }, []);

  return (
    <div>
      <h1>Список пользователей</h1>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

function UserCard({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}
