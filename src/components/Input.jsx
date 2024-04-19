import { nanoid } from 'nanoid';

export const Input = ({ userName, phoneNumber, handleOnChange }) => {
  const uniqueIDname = nanoid();
  const uniqueIDphone = nanoid();
  return (
    <>
      <label htmlFor={uniqueIDname}>
        <h3>Name:</h3>
        <input
          id={uniqueIDname}
          type="text"
          name="userName"
          value={userName}
          onChange={handleOnChange}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <h3>Number:</h3>
      <label htmlFor={uniqueIDphone}>
        <input
          id={uniqueIDphone}
          type="number"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleOnChange}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <br />
      <button type="submit">Add Contanct</button>
    </>
  );
};
