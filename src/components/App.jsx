import { useState } from 'react';

export const App = () => {
  const [userData, setUserData] = useState({ userName: '', phoneNumber: '' });

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
    console.log(e);
  };

  return (
    <>
      <h1>Phonebook</h1>
      <form onSubmit={handleSumbit}>
        <h3>Name:</h3>
        <input
          type="text"
          name="userName"
          value={userData.userName}
          onChange={handleOnChange}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h3>Number:</h3>
        <input
          type="number"
          name="phoneNumber"
          value={userData.phoneNumber}
          onChange={handleOnChange}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <br />
        <button type="submit">Add Contanct</button>
      </form>
      <div>{userData.userName}</div>
      <div>{userData.phoneNumber}</div>
    </>
  );
};
