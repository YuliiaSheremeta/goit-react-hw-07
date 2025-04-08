import { ImPhone,ImUser } from "react-icons/im";
import css from './Contact.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ contact }) {
    
    const dispatch = useDispatch();
    
    const handleDeleteContact = () => {
        dispatch(deleteContact(contact.id))
    };
    return (
        <div className={css.contactcard}>
            <div>
                <p> <ImUser/> {contact.name}</p>
                <p> <ImPhone/> {contact.number}</p>
            </div>
            <button className={css.deletebutton} type="button" onClick={handleDeleteContact}>Delete</button>
        </div>
    );
 };