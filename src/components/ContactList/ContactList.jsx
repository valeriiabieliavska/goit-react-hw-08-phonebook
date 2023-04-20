import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from '../../redux/operations';
import { selectFilteredContacts } from 'redux/contactsSelectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts &&
        filteredContacts.map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            <p className={css.contact}>
              {name}: {number}
            </p>
            <button
              className={css.button}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;
