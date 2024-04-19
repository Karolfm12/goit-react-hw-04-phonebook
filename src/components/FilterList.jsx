export const FilterList = ({
  filter,
  contactList,
  handleDelete,
  handleOnChange,
}) => {
  return (
    <>
      <h3>Find contact by name:</h3>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={e => handleOnChange(e, 'filter')}
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />

      <ul>
        {filter &&
          contactList
            .filter(name =>
              name.userName.toLowerCase().includes(filter.toLowerCase())
            )
            .map((filteredName, index) => (
              <li key={index}>
                {filteredName.userName} {filteredName.phoneNumber}{' '}
                <button onClick={e => handleDelete(e, index)}>Delete</button>
              </li>
            ))}
      </ul>
    </>
  );
};
