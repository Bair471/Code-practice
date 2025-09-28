//  В квадратных скобках [person] означает, что будет происходить монтирование при каждом изменении объекта person. Если скобки пустые, то монтирование будет происходить только один
//  раз. Если скобок нету в конце, то будет происходить монитрование при каждом ререндеринге(ЧТО НЕ ПРАВИЛЬНО).
useEffect(() => {
    if (person) {
      setFormData(person);
    } else {
      setFormData({ id: 0, name: "", age: 0 });
    }
  }, [person]);

// Prev подставляется вместо массива persons
setPersons((prev) => prev.filter((person) => person.id !== id));

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

// Hosting это вызов функции до ее написания. Только тип function. var и let так не работают. 

sayHi();

function sayHi() {
console.log("Привет!");
}

// 1. `string` — строки 

let name = “Bair”;

let greeting = “hi”;

// 1. `number` — числа. Любые числа (целые или с плавающей точкой).

let age = 25;
let pi = 3.14;

// 1. `bigint` — большие числа Для очень больших чисел, которые не помещаются в обычный `number`.

// let huge = 123456789012345678901234567890n; // обязательно с n на конце

// 4. `boolean` — логический тип `true` или `false`.

let isStudent = true;
let hasLicense = false;

// 1. `undefined` — неопределённое значение. Переменная объявлена, но не получила свое значение

let x;
console.log(x); // undefined

// 1. `null` — пустое значение

let person = null;

// ### 7. `symbol` — уникальный идентификатор

// Используется для создания уникальных ключей объектов.

let id = Symbol("id");
let id2 = Symbol("id");
console.log(id === id2); // false



// ЗАДАНИЯ

var a = 1;
let b = 2;
const c = 3;
console.log(a, b, c);

// В КОНСОЛИ ВЫВЕДЕТ 1,2,3 а изменить можно только var a и let b. const c это константа она не изменяема.


    
console.log(x);
var x = 5;
console.log(y);
let y = 10;

// Первый console.log(x); → undefined

// Второй console.log(y); → программа падает с ошибкой ReferenceError



function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  }
}

const counter = outer();
console.log(counter());
console.log(counter());

// выведет в консоли 1 затем 2;



const numbers = [1, 2, 3 ,4, 5];
const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0);
console.log(doubled, evens);

// в первом методе все умножится на 2 и получится [2, 4, 6, 8, 10]
// во втором методе все вернется в изначальные значения, но будет [2, 4] из-за условия num % 2 === 0.
// Т.е делится на 2 без остатка. Остальные делятся с остатком.


const user = {
name: 'Alice',
age: 25,
city: 'Moscow'
};
const {name, age}= user;
const [first, second]= [10,20, 30];

//Результат: name = 'Alice' age = 25 и [ 10, 20 ];


// АСИНХРОННОСТЬ 
console.log('1');
setTimeout(()=
> console.log('2'), 0);
console.log('3');

// Получается 1, 3, 2 Таймер даже если не имеет значения для откладывания или 0, все равно ставится в очередь на выполнение. 


// СРАВНЕНИЕ
console.log(0 == '0');
console.log(0 === '0');
console.log(null == undefined);
console.log(null === undefined);


// Два типа сравнения строгое === и не строгое ==. 
// Результаты будут true, false, true, false.



document.getElementById('myButton').addEventListener('click',f
unction() {
console.log('Button clicked!');
});

// работает по тому что мы выбрали кнопку через getElementById а затем повесили на нее слушатель клик и написали функцию(),
//которая просто пока вызывает в консоли надпись button clicked



const obj = {
  name: 'John',
  greet: function() {
    console.log('Hello, ' + this.name);
  }
};

const greetFunc = obj.greet;
obj.greet();      // "Hello, John"
greetFunc();      // "Hello, undefined" (или ошибка в strict mode)


от несколько самых базовых операций в JavaScript:

Присваивание: = как в a = 2.

Математические: + (сложение), - (вычитание), * (умножение) и / (деление), как в a * 3.

Составное присваивание: +=, -=, *= и /= — это составные операции, которые объединяют математическую операцию с присваиванием, как в a += 2 (эквивалентно a = a + 2).

Инкремент/Декремент: ++ (инкремент), -- (декремент), как в a++ (эквивалентно a = a + 1).

Доступ к свойству объекта: . как в console.log().

Объекты — это значения, которые хранят другие значения под своими именами, называемые свойства. obj.a означает значение из объекта obj из его свойства a. Еще один способ доступа к свойствам — obj["a"]. См. главу 2.

Равенство: == (нестрогое), === (строгое), != (нестрогое неравенство), !== (строгое неравенство), как в a == b.

См. «Значения и типы» и главу 2.

Сравнение: < (меньше чем), > (больше чем), <= (меньше или нестрого равно), >= (больше или нестрого равно), как в a <= b.

См. «Значения и типы» и главу 2.

Логические: && (и), || (или), как в a || b, которое выбирает или a, или (or) b.

Эти операции используются для создания составных условных конструкций (см. «Условные конструкции»), например: если либо a либо (or) b — истина.
