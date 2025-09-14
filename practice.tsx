
const person = { name: "Иван", age: 25 };

<PersonRow person={person} />

//Деструктуризция
function PersonRow({ person }) {
  const { name, age } = person;
  return <p>{name} ({age})</p>;
}

//Создание нового объекта
function PersonRow({ person }) {
  const newPerson = { ...person, age: person.age + 1 }; // новый объект
  return <p>{newPerson.name} ({newPerson.age})</p>;
}


function PersonRow({ person: { name, age } }) {
  return <p>{name} ({age})</p>;
}




//person — это один пропс, который является объектом.

//name, age, habits — это свойства объекта, к которым мы обращаемся через этот пропс.

//const person = { id: 1, name: "Иван", age: 25, habits: ["спорт", "чтение"] };

// Передача пропса:
<PersonRow person={person} />

// Внутри компонента:
function PersonRow({ person }) {
  console.log(person.name);  // "Иван"
  console.log(person.age);   // 25
}

//передача по отдельности
<PersonRow name={person.name} age={person.age} habits={person.habits} />





//Схема потока данных

App
  ├── persons = [{id:1, name:"Иван"}, {id:2, name:"Мария"}]
  └── handlePersonSelect(person)  ← (главная функция)

        │
        ▼

 PersonTable
   получает:
     - persons (массив людей)
     - onPersonSelect (функция)
   ↓
   для каждого person создаёт PersonRow

        │
        ▼

 PersonRow
   получает:
     - person (один объект: {id, name, age})
     - onSelect (функция)

   когда клик → вызывает onSelect(person)
        │
        ▼
  ⚡ Возврат в App → handlePersonSelect(person)






//2. Пример: плавное появление блока (CSS + useEffect)
import { useState, useEffect } from "react";
import "./styles.css"; // подключим стили

export default function FadeInBox() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // запускаем анимацию через 0.5 сек после монтирования
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer); // очистка таймера
  }, []);

  return (
    <div>
      <h2>Пример анимации появления</h2>
      <div className={`box ${visible ? "show" : ""}`} />
    </div>
  );
}
