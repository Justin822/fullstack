import axios from "axios";
import contactService from "../services/contacts";

const ItemList = ({ items }) => {
  const deleteContact = (name, id) => {
    if (window.confirm(`Delete ${name}?`)) {
      contactService.deleteContactService(id);
    }
  };

  return (
    <>
      {items.map((item) => {
        return (
          <div key={item.id}>
            {item.name} {item.phone}{" "}
            <button onClick={() => deleteContact(item.name, item.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ItemList;
