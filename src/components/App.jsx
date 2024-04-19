import { INITIAL_STATE } from 'constansts/initial-form-state';
import { useState } from 'react';
import { ContactList } from './ContactList.jsx';
import { FilterList } from './FilterList.jsx';
import { Input } from './Input.jsx';

export const App = () => {
  const [userData, setUserData] = useState(INITIAL_STATE);
  const [contactList, setContactList] = useState([]);

  // const [contacts]

  const handleOnChange = (e, name) => {
    // const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSumbit = e => {
    e.preventDefault();
    setContactList(prev => [
      ...prev,
      { userName: userData.userName, phoneNumber: userData.phoneNumber },
    ]);
    setUserData(INITIAL_STATE);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    setContactList(prev => {
      const prevContactList = [...prev];
      prevContactList.splice(id, 1);
      return prevContactList;
    });
  };
  return (
    <>
      <h1>Phonebook</h1>
      <form onSubmit={handleSumbit}>
        <Input
          userName={userData.userName}
          phoneNumber={userData.phoneNumber}
          handleOnChange={handleOnChange}
        />
      </form>
      <ContactList contactList={contactList} handleDelete={handleDelete} />
      <FilterList
        filter={userData.filter}
        contactList={contactList}
        handleDelete={handleDelete}
        handleOnChange={handleOnChange}
      />
    </>
  );
};
