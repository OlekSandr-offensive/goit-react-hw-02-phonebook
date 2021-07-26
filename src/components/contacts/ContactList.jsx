import './ContactList.scss';
import ContactItem from '../ContactItem';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContacts }) => (
  <ul className="ContactList">
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        name={name}
        number={number}
        onClick={onDeleteContacts}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
