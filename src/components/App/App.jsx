import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList'
import css from './App.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectContact, selectIsError, selectIsLoading } from '../../redux/contactsSlice';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';

function App() {
  
  const dispstch = useDispatch();
  const contacts = useSelector(selectContact);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispstch(fetchContacts());
  }, [dispstch]);

  return (
    <main>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error occurred, please try again...</p>}
      {contacts.length > 0 && <ContactList />}
    </main>
  )
}

export default App
