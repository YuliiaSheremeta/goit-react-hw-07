import Contact from '../Contact/Contact';

import {useSelector } from 'react-redux';
import css from './ContactList.module.css'
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
    const contacts = useSelector(selectFilteredContacts);

    return (
        <div className={css.container}>
        <ul className={css.list}>
            {contacts.map((contact) => (
                <li className={css.item} key={contact.id}>
                    <Contact contact={contact} />
               </li>
             ))}
            </ul>
            </div>
    )
}