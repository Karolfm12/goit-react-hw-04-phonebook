export const ContactList = ({ contactList, handleDelete }) => {
  return (
    <>
      <ul>
        {contactList.map((contact, index) => (
          <li key={index}>
            {contact.userName} {contact.phoneNumber}{' '}
            <button onClick={e => handleDelete(e, index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
