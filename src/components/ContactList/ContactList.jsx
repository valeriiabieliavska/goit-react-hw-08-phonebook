import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from '../../redux/operations';
import { selectFilteredContacts } from 'redux/contactsSelectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  console.log(filteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            <p className={css.contactName}>{name}</p>
            <p className={css.contactNumber}>{number}</p>
            <button
              className={css.btnDelete}
              type="button"
              onClick={() => {
                const contactToDelete = filteredContacts.find(
                  contact => contact.id === id
                );
                if (contactToDelete) {
                  dispatch(deleteContact(id));
                }
              }}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
