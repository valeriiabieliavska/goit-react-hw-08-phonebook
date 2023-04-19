import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/contactsSelectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      {filteredContacts.length === 0 ? (
        <p className={css.message}>There are no contacts in the Phonebook</p>
      ) : (
        <ul className={css.list}>
          {filteredContacts.map(({ id, name, number }) => (
            <li key={id} className={css.item} id={id}>
              {name}: {number}
              <button
                className={css.btnDelete}
                type="button"
                onClick={() => dispatch(deleteContact(id))}
              >
                Delete.
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
