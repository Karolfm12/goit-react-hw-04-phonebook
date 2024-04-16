import { useState } from 'react';

export const App = () => {
  const [name, setName] = useState('');

  return (
    <>
      <h1>Phonebook</h1>
      <div>
        <h3>Name:</h3>
        <input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <h3>Number:</h3>
        <input
          type="text"
          name="phone"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // required
        />
        <br />
        <button onClick={() => setName()}>Add Contanct</button>
      </div>
    </>
  );
};
