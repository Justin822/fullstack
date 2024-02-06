import { useState, useEffect } from "react";
import ItemList from "./components/ItemList";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import "./App.css";

import contactService from "./services/contacts";
import RedNotification from "./components/RedNotification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(persons);
  const [addedNotification, setAddedNotification] = useState(null);
  const [addedRedNotification, setAddedRedNotification] = useState(null);

  useEffect(() => {
    contactService.getAll().then((res) => {
      setPersons(res.data);
    });
  }, []);

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
    };

    const nameExists = persons.some(function (ele) {
      return ele.name === personObject.name;
    });

    const replaceNumber = () => {
      if (
        window.confirm(`${personObject.name} is already added to the phonebook`)
      ) {
        persons.some(function (ele) {
          const isSame = ele.name === personObject.name;

          const numberNotification = () => {
            contactService.update(ele.id, personObject).catch(() => {
              setAddedRedNotification(
                `${ele.name} has already been deleted on the server`
              );
              setTimeout(() => {
                setAddedRedNotification(null);
              }, 5000);
            });
            setAddedNotification(`Phone number of ${ele.name} has changed`);
            setTimeout(() => {
              setAddedNotification(null);
            }, 5000);
          };

          if (isSame) {
            return numberNotification();
          } else {
            return console.log("no");
          }
        });
      }
    };

    nameExists
      ? replaceNumber()
      : contactService.create(personObject).then((res) => {
          setPersons(persons.concat(res.data));
          setAddedNotification(`Added ${res.data.name}`);
          setTimeout(() => {
            setAddedNotification(null);
          }, 5000);
        });

    // axios.post("http://localhost:3001/contacts", personObject).then((res) => {
    //   setPersons(persons.concat(res.data));
    // });

    // setPersons(persons.concat(personObject))

    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={addedNotification} />
      <RedNotification message={addedRedNotification} />
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
