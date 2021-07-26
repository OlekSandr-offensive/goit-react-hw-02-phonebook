import React from 'react';

const ContactItem = ({ id, name, number, onDeleteContacts }) => {
  return (
    <>
      <li key={id}>
        <p>
          {name}
          <span>{number}</span>
        </p>

        <button type="button" onClick={() => onDeleteContacts(id)}>
          Delete
        </button>
      </li>
    </>
  );
};

export default ContactItem;
