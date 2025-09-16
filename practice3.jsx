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

