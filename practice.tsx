
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


//Пример useEffect с изменением ширины окна и подпиской и отпиской 
import { useEffect, useState } from 'react';

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    // cleanup: отписка при размонтировании или перед повторным запуском эффекта
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // пустой массив — подписка делается один раз при монтировании

  return <div>Ширина окна: {width}px</div>;
}

// 
if (savedPerson.id && people.some((p) => p.id === savedPerson.id)) {

Это проверка, будем ли мы обновлять существующего человека или добавлять нового.

Разбиваем на части:

savedPerson.id

Проверяет, есть ли id у объекта.

Если id есть (например, 2), значит это не новый объект, возможно редактируем существующего.

Если id нет (null или undefined) — это новый объект.

people.some((p) => p.id === savedPerson.id)

people — массив всех людей.

.some(...) проверяет: есть ли в массиве человек с таким же id.

Возвращает true, если такой человек есть, false если нет.

// ✅ Итого, весь if говорит:

// «Если у объекта есть id и в массиве людей уже есть человек с таким id, то это обновление существующей записи.»



// Практика написания кода по памяти.

const onDelete = async (id: number) => {
      await fetch(`http://localhost:8000/persons/${id}`, {
        method: 'DELETE',
      });
      setPersons((prev) => prev.filter((person) => person.id !== id));
    };

 const handleEdit = (person) => {
      setSelectedPerson(person);
    };
// Тут вроде можно и id: 0, name: "", age: 0 НАДО УТОЧНИТЬ. НО ГПТ СКАЗАЛ МОЖНО 
    const handleAdd = () => {
      setSelectedPerson({ id: null, name: "", age: "" }); 
    };


// РАЗНИЦА id: ""(ЭТО ПУСТАЯ СТРОКА БУДЕТ В МОДАЛКЕ), id: null ТОЖЕ ПУСТАЯ СТРОКА, НО ЭТО ДОПОЛНИТЕЛЬНО ПОПКАЗЫВАЕТ ЧТО ЭТО БУДЕТ НОВЫЙ ОБЪЕКТ, КОТОРОГО ЕЩЕ НЕ СУЩЕСТВУЕТ.
// id: 0( ИЗНАЧАЛЬНО В СТРОКЕ БУДЕТ 0 В МОДАЛЬНОМ ОКНЕ). 
id: null,
id: "",
id: 0 

if (person.id === null) {
  // создаём новую запись
} else {
  // обновляем существующую
}


const handleCloseModal = () => {
      setSelectedPerson(null);

      fetch("http://localhost:8000/persons")
      .then((res) => res.json())
      .then((data) => setPersons(data))
      .catch((err) => console.error('Ошибка', err));
    }; 
// ТУТ В КОНЦЕ МОЖНО УПРОСТИТЬ ВЫЗОВ onSave и onClose потому что вызывают одну и туже функцию в модалке
 {persons.map((person) => (
            <TableRow key={person.id}>
              <TableCell>{person.id}</TableCell>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.age}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  onClick={() => handleEdit(person)}
                  sx={{ mr: 1 }}
                >
                  Редактировать
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => onDelete(person.id)}
                >
                  Удалить
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <PersonModal
        person={selectedPerson}
        onSave={handleCloseModal}
        onClose={handleCloseModal}
      />
    </>
      ); 

