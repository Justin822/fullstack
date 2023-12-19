import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: 1 }]);
  const [newName, setNewName] = useState("");

  const handleNameChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  const addName = (e) => {
    e.preventDefault();

    const personObject = {
      name: newName,
      id: persons.length + 1,
    };

    const nameExists = persons.some(function (ele) {
      return ele.name === personObject.name;
    });

    nameExists
      ? alert("Person exists")
      : setPersons(persons.concat(personObject));

    setNewName("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      {persons.map((person) => {
        return <div key={person.id}>{person.name}</div>;
      })}
    </div>
  );
};

export default App;
