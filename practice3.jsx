//  В квадратных скобках [person] означает, что будет происходить монтирование при каждом изменении объекта person. Если скобки пустые, то монтирование будет происходить только один
//  раз. Если скобок нету в конце, то будет происходить монитрование при каждом ререндеринге(ЧТО НЕ ПРАВИЛЬНО).
useEffect(() => {
    if (person) {
      setFormData(person);
    } else {
      setFormData({ id: 0, name: "", age: 0 });
    }
  }, [person]);



//handleCloseModal не только закрывает окно, но и перезагружает его (новыми данными)

const handleCloseModal = () => {
      setSelectedPerson(null);

      fetch("http://localhost:8000/persons")
      .then((res) => res.json())
      .then((data) => setPersons(data))
      .catch((err) => console.error('Ошибка', err));
    };

// Выражение onSave={handleCloseModal} означает, что в компонент передаётся проп onSave, значением которого является функция handleCloseModal. 
      <PersonModal
        person={selectedPerson}
        onSave={handleCloseModal}
        onClose={handleCloseModal}
      />
    </>

// Внешняя функция — создаёт замкнутую функцию с аргументом a
function createAdder(a) {      
  let b = 10;  // переменная внешней функции

  // Внутренняя функция — это замыкание
  function add(c) {            
    return a + b + c;          // использует a, b из внешней функции и аргумент c
  }

  return add;                  // возвращаем внутреннюю функцию
}

// Создаём новую функцию, которая «помнит» a = 5
const add5 = createAdder(5);

// Вызываем внутреннюю функцию через переменную add5
console.log(add5(3)); // 5 + 10 + 3 = 18
console.log(add5(7)); // 5 + 10 + 7 = 22

// Можно создать другую функцию с другим замыканием
const add100 = createAdder(100);
console.log(add100(3)); // 100 + 10 + 3 = 113


// В функции handleSave происходит вызов onSave(). Функция показывает что сохранение прошло успешно и закрывает окно и перезагружает (обновляет новыми данными)
// Я наблюдаю то что onSave() и onClose() вызывают одно и тоже в другом компоненте и сюда попадают как пропсы выше: export default function PersonModal({ person, onClose, onSave })
const handleSave = async () => {
    try {
      if (formData.id && formData.id !== 0) {
        await fetch(`http://localhost:8000/persons/${formData.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      } else {
        await fetch("http://localhost:8000/persons", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
      }
      onSave();
      onClose();
    } catch (err) {
      console.error("Ошибка сохранения:", err);
    }
  };
// Разные написания через await и .then
const onDelete = async (id: number) => {
      await fetch(`http://localhost:8000/persons/${id}`, {
        method: 'DELETE',
      });
      setPersons((prev) => prev.filter((person) => person.id !== id));
    };

 function onDelete(id) {
        fetch(`http://localhost:8000/persons/${id}`, {
            method: 'DELETE',
        })
        .then(() => {
            setPersons(prev => prev.filter(person => person.id !== id))
        })
    }
// Hosting

Hosting это вызов функции до ее написания. Только тип function. var и let так не работают. 

sayHi();

function sayHi() {
console.log("Привет!");
}

1. `string` — строки 

let name = “Bair”;

let greeting = “hi”;

1. `number` — числа. Любые числа (целые или с плавающей точкой).

let age = 25;
let pi = 3.14;

1. `bigint` — большие числа Для очень больших чисел, которые не помещаются в обычный `number`.

let huge = 123456789012345678901234567890n; // обязательно с n на конце

4. `boolean` — логический тип `true` или `false`.

let isStudent = true;
let hasLicense = false;

1. `undefined` — неопределённое значение. Переменная объявлена, но не получила свое значение

let x;
console.log(x); // undefined

1. `null` — пустое значение

let person = null;

### 7. `symbol` — уникальный идентификатор

Используется для создания уникальных ключей объектов.

let id = Symbol("id");
let id2 = Symbol("id");
console.log(id === id2); // false
