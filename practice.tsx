
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
