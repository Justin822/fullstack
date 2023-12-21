import { useState } from "react";
import ItemList from "./components/ItemList";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "0612345678", id: 1 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(persons);

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSearchItem(e.target.value);

    const filteredItems = persons.filter((person) => {
      return person.name.toLowerCase().includes(e.target.value.toLowerCase());
    });

    setFilteredUsers(filteredItems);
  };

  const addName = (e) => {
    e.preventDefault();

    const personObject = {
      name: newName,
      phone: newNumber,
      id: persons.length + 1,
    };

    const nameExists = persons.some(function (ele) {
      return ele.name === personObject.name;
    });

    nameExists
      ? alert(`${personObject.name} is already added to the phonebook`)
      : setPersons(persons.concat(personObject));

    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter value={searchItem} onchange={handleFilterChange} />
      <h2>Add new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <ItemList items={filteredUsers} />
    </div>
  );
};

export default App;
