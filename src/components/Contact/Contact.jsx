import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import s from './Contact.module.css';

function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      {contact.name}: {contact.number}
      <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
    </li>
  );
}

export default Contact;