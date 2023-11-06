import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: "Arto Hellas" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(persons);

  const addContact = (event) => {
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return false;
    }

    if (persons.some((person) => person.number === newNumber)) {
      alert(`The number ${newNumber} is already added to phonebook`);
      return false;
    }

    event.preventDefault();
    const contactObject = {
      name: newName,
      number: newNumber,
      id: newName,
    };

    setPersons(persons.concat(contactObject));

    setNewName("");
    event.target.reset();
  };

  const handleContactChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchItem(searchTerm);

    const filteredItems = persons.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredContacts(filteredItems);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with{" "}
        <input type="text" value={searchItem} onChange={handleInputChange} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input onChange={handleContactChange} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {useEffect(() => {
          filteredContacts.map((person) => {
            <p key={person.id}>
              {person.name} {person.number}
            </p>;
          });
        }, [handleNumberChange, handleContactChange, handleInputChange])}
      </div>
    </div>
  );
};

export default App;
