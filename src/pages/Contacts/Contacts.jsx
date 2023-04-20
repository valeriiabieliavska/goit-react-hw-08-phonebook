import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsLoading } from 'redux/contactsSelectors';
import { fetchContacts } from '../../redux/operations';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';

import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsWrap}>
      <h2 className={css.title}>Phonebook</h2>
      <Form />

      <Filter />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h2 className={css.title}>Contacts</h2>
          <ContactList />
        </div>
      )}
    </div>
  );
};

export default Contacts;
