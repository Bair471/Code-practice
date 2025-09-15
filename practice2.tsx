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





// Типы примитивных данных в Javascript 

string — строки

let name = "Андрей";


number — числа (целые и с плавающей точкой)

let age = 25;
let pi = 3.14;


bigint — очень большие целые числа

let big = 1234567890123456789012345678901234567890n;


boolean — логический тип (true/false)

let isAdmin = true;
let isOnline = false;


undefined — значение "не определено" (переменная есть, но значения нет)

let x;
console.log(x); // undefined


null — "пустое" значение (осознанное отсутствие данных)

let empty = null;


symbol — уникальные идентификаторы

let id = Symbol("id");







//== (нестрогое равенство)

// Сравнивает значения с приведением типов.

// Если типы разные → пытается их преобразовать и сравнить.

// Примеры:

5 == "5"       // true  (строка приводится к числу)
0 == false     // true  (false → 0)
null == undefined // true (специальное правило языка)




// === (строгое равенство)

// Сравнивает и значение, и тип данных.

// Никаких преобразований не делает.

// Примеры:

5 === "5"      // false (число ≠ строка)
0 === false    // false (число ≠ boolean)
null === undefined // false (разные типы)
5 === 5        // true

