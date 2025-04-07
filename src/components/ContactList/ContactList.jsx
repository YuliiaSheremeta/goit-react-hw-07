import Contact from '../Contact/Contact';
import {deleteContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css'

export default function ContactList() {
    const dispatch = useDispatch();

    const selectContacts = useSelector((state) => state.contacts.items);

    const searchFilter = useSelector((state) => state.filters.name)
    
    const filteredContacts = selectContacts.filter(contact => contact.name.toLowerCase().includes(searchFilter.toLowerCase()));
    
    return (
        <div className={css.container}>
        <ul className={css.list}>
            {filteredContacts.map(contact => (
                <li className={css.item} key={contact.id}>
                    <Contact
                        name={contact.name}
                        number={contact.number}
                        onRemove={() => dispatch(deleteContact(contact.id))} />
               </li>
             ))}
            </ul>
            </div>
    )
}