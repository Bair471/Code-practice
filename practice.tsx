
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

