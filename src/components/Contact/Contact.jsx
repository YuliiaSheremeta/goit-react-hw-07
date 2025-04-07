import { ImPhone,ImUser } from "react-icons/im";
import css from './Contact.module.css';

export default function Contact({ name, number, onRemove }) {
    return (
        <div className={css.contactcard}>
            <div>
                <p> <ImUser/> {name}</p>
                <p> <ImPhone/> {number}</p>
            </div>
            <button className={css.deletebutton} type="button" onClick={onRemove}>Delete</button>
        </div>
    );
 };