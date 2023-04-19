import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsLoading, selectError } from 'redux/contactsSelectors';
import { fetchContacts } from 'redux/operations';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';

import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contactsWrap}>
      <h2 className={css.title}>Phonebook</h2>
      <Form />
      <h2 className={css.title}>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      {error && !isLoading && (
        <h3 style={{ color: 'red' }}>{error || 'Error...'}</h3>
      )}
      {isLoading === false && !error && <ContactList />}
    </div>
  );
};

export default Contacts;