import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList'
import css from './App.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectLoading,selectIsFormVisible,selectIsSearchVisible,toggleFormVisibility,toggleSearchVisibility } from '../../redux/contactsSlice';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import { HiMiniUserPlus } from "react-icons/hi2";
import { VscSearch } from "react-icons/vsc";
import { NavLink } from "react-router-dom";


function App() {
  
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const isFormVisible = useSelector(selectIsFormVisible);
  const isSearchVisible = useSelector(selectIsSearchVisible);

  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main className={css.main}>
      <div className={css.container}>
        <p className={css.title}>Contacts</p>
         <NavLink className={css.link} onClick={() => dispatch(toggleSearchVisibility())}> <VscSearch className={ css.search} /> </NavLink>
        <NavLink className={css.link} onClick={() => dispatch(toggleFormVisibility())}> <HiMiniUserPlus className={css.user } /> </NavLink>
      </div>
      {isFormVisible && <ContactForm />}
      {isSearchVisible && <SearchBox />}

      {isLoading && <p>Loading...</p>}
      {isError && <p>Error occurred, please try again...</p>}
      {contacts.length > 0 && <ContactList />}
    </main>
  )
}

export default App
